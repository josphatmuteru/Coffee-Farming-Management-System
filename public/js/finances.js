import { post } from "./crudOperations.js";

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

  function handleEditCreateBudget() {
    const budgetDialog = document.querySelector(".dialog-budget");
    const budgetForm = document.querySelector(".form--budget");
    const inputEls = document.querySelectorAll(".input");
    const openBudgetDialogBtn = document.querySelector(".btn-open-budget-form");

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

  handleEditCreateBudget();

  toggleExpenseDetails();
}
