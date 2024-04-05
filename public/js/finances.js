import { get, post } from "./crudOperations.js";
import { toggleLoading } from "./pestManagement.js";

export function handleFinancesPage() {
  const toggleExpenseDetailsBtns = document.querySelectorAll(
    ".btn-toggle--expense-details"
  );
  const expensesSectionEl = document.querySelector(".section-expenses");

  let financesData = JSON.parse(
    expensesSectionEl.getAttribute("data-financesData")
  );

  const { expenses, budget } = financesData;

  console.log(financesData);

  function toggleExpenseDetails() {
    toggleExpenseDetailsBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("clicked");

        if (btn.style.transform.includes("rotate(180deg)")) {
          btn.style.transform = "";
        } else {
          btn.style.transform = "rotate(180deg)";
        }

        const expenseParentEl = btn.closest(".expense");
        const expenseBodyEl = expenseParentEl.querySelector(".expense_body");

        expenseBodyEl.classList.toggle("hidden");
      });
    });
  }

  async function renderFinancesOverview() {
    let isLoading = true;

    const elementsWaitingForData = [".row-widgets"];

    toggleLoading(isLoading, elementsWaitingForData);

    function createFinancesOverviewMarkup(financesData) {
      const {
        total_revenue: income = 0,
        total_expenses: expensesTotal = 0,
        profit = 0,
        budget_amount: budgetAmount = 0,
        budget_remaining: remainingBudgetAmount = 0,
      } = financesData || {};

      const markup = `
      <h2 class="heading-secondary">Overview</h2>

      <div class="row row-widgets">
                <div class="widget widget--income">
                  <span class="widget-label">Income</span>
                  <div class="widget-details">
                    <span class="widget-value">${formatCurrency(income)}</span>
                  </div>
                </div>
                <div class="widget widget--expenses">
                  <span class="widget-label">Expenses</span>
                  <div class="widget-details">
                    <span class="widget-value"> ${formatCurrency(
                      expensesTotal
                    )}</span>
                  </div>
                </div>
                <div class="widget widget--profit">
                  <span class="widget-label">Profit</span>
                  <div class="widget-details">
                    <span class="widget-value">${formatCurrency(profit)}</span>
                  </div>
                </div>
                <div class="widget widget--budget">
                  <span class="widget-label">Budget</span>
                  <div class="widget-details">
                    <span class="widget-value">Yearly budget: ${formatCurrency(
                      budgetAmount
                    )}</span>
                    <span class="widget-value"
                      >Remaining Amount: ${formatCurrency(
                        remainingBudgetAmount
                      )}</span
                    >
                  </div>
                </div>
              </div>`;

      return markup;
    }

    get({ url: "farmProduce/finances-overview" }).then((result) => {
      if (result.status === "success") {
        isLoading = false;
        const financesData = result.data[0];
        const financesOverviewMarkup =
          createFinancesOverviewMarkup(financesData);

        document.querySelector(".section--overview").innerHTML = "";
        document
          .querySelector(".section--overview")
          .insertAdjacentHTML("afterbegin", financesOverviewMarkup);

        toggleLoading(isLoading, elementsWaitingForData);
      }
    });
  }

  renderFinancesOverview();

  function formatCurrency(number) {
    return new Intl.NumberFormat("ke-KE", {
      style: "currency",
      currency: "KSH",
    }).format(number);
  }

  function renderIncomeDetails() {
    let isLoading = true;
    const elementsWaitingForData = [".row-income"];

    toggleLoading(isLoading, elementsWaitingForData);

    function createIncomeDetailsMarkup(incomeData) {
      const {
        total_harvest_amount_kg: totalYield = 0,
        coffee_price_per_kg: pricePerKg = 0,
        total_revenue: expectedRevenue = 0,
      } = incomeData || {};

      const markup = `
      <h3 class="sub-heading">Coffee Sales</h3>
                <div class="sales-details">
                  <div class="sales-detail sales-detail--price">
                    <span class="label label-price">Price per Kg</span>
                    <span class="value value-price">${formatCurrency(
                      pricePerKg
                    )}</span>
                  </div>

                  <div class="sales-detail sales-detail--yield">
                    <span class="label label-yield">Total Yield</span>
                    <span class="value value-yield">${totalYield} Kg</span>
                  </div>

                  <div class="sales-detail sales-detail--amount">
                    <span class="label label-amount">Expected revenue</span>
                    <span class="value value-amount">${formatCurrency(
                      expectedRevenue
                    )}</span>
                  </div>
      
      `;

      return markup;
    }

    get({ url: "farmProduce/income" }).then((result) => {
      if (result.status === "success") {
        isLoading = false;
        const incomeData = result.data[0];
        const incomeDetailsMarkup = createIncomeDetailsMarkup(incomeData);

        document.querySelector(".row-income").innerHTML = "";
        document
          .querySelector(".row-income")
          .insertAdjacentHTML("afterbegin", incomeDetailsMarkup);

        toggleLoading(isLoading, elementsWaitingForData);
      }
    });
  }

  renderIncomeDetails();

  async function renderBugdetChart() {
    const budgetSection = document.querySelector(".section-budget");
    let expenseTotals = [];
    const expenseWidgetEls = document.querySelectorAll(".expense");

    function showExpenseBudgetStatus(budget) {
      expenseWidgetEls.forEach((el) => {
        const exepenseType = el.getAttribute("data-expense-type");
        const expenseTotal = parseFloat(
          el
            .querySelector(".expense_cost-value")
            .getAttribute("data-expense-total")
        );

        if (budget[exepenseType]) {
          if (budget[exepenseType] < expenseTotal) {
            const amountOverBudget = expenseTotal - budget[exepenseType];
            el.querySelector(
              ".expense_status"
            ).textContent = `Over-Budget -- ${formatCurrency(
              amountOverBudget
            )}`;
            el.querySelector(".expense_status").classList.add(
              "expense_status--over-budget"
            );
          } else {
            el.querySelector(".expense_status").textContent = "On-Budget";
            el.querySelector(".expense_status").classList.add(
              "expense_status--on-budget"
            );
          }
        }
      });
    }

    get({ url: "expenses/budget" }).then((result) => {
      if (result.status === "success") {
        const budget = result.data[0] ?? {};

        const {
          fertilizer = 0,
          labour = 0,
          pesticide = 0,
          miscelleneous = 0,
        } = budget || {};

        const budgetChartData = [fertilizer, labour, pesticide, miscelleneous];

        const isGreaterThanOne = (currentValue) => currentValue < 1;

        const isCreateMode = Object.keys(budget)
          .map((key) => budget[key])
          .every(isGreaterThanOne);

        if (!isCreateMode) {
          const budgetForm = document.querySelector(".form--budget");
          budgetForm.setAttribute("data-is-edit-mode", true);
          budgetForm.querySelector("h2").textContent = "Edit budget";

          document.querySelector(".btn-open-budget-form").textContent =
            "Edit budget";
        }

        showExpenseBudgetStatus(budget);
        populateBudgetForm(budget);

        const ctx = document.getElementById("myChart");
        new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: ["Fertilizer", "Labour", "Pesticides", "Miscellaneous"],
            datasets: [
              {
                label: "Allocated amount",
                data: budgetChartData,
                borderWidth: 1,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                position: "right",
              },
            },
            // scales: {
            //   y: {
            //     beginAtZero: true,
            //   },
            // },
          },
        });
      }
    });
  }

  renderBugdetChart();

  function populateBudgetForm(budget) {
    const inputEls = document.querySelectorAll(".input");
    console.log(budget);

    inputEls.forEach((el) => {
      const key = el.getAttribute("id");
      console.log(key);
      el.value = budget[key] ?? 0;
    });
  }

  function handleEditCreateBudget() {
    const budgetDialog = document.querySelector(".dialog-budget");
    const budgetForm = document.querySelector(".form--budget");
    const inputEls = document.querySelectorAll(".input");
    const openBudgetDialogBtn = document.querySelector(".btn-open-budget-form");

    const closeDialogBtns = document.querySelectorAll(".btn-close-modal");
    console.log(closeDialogBtns);

    const isEditMode = budgetForm.getAttribute("data-is-edit-mode");

    console.log(isEditMode);

    closeDialogBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        btn.closest("dialog").close();
      });
    });

    openBudgetDialogBtn.addEventListener("click", (e) => {
      e.preventDefault();
      budgetDialog.showModal();
    });

    let formData = {};
    inputEls.forEach((el) => {
      el.addEventListener("change", (e) => {
        const key = el.getAttribute("id");
        const type = el.getAttribute("type");
        const value = type === "number" ? parseFloat(e.target.value) : value;

        formData[key] = value;
      });
    });

    budgetForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const req = {
        url: "expenses/budget",
        data: formData,
        loadingMessage: "Creating budget...",
        successMessage: "Budget created successfully",
      };

      post(req);
      console.log(formData);
    });
  }

  handleEditCreateBudget(budget);

  toggleExpenseDetails();
}
