import { post } from "./crudOperations.js";

export function handleExpenseAndYieldInput() {
  const showHarvestDialogBtn = document.querySelector(".showHarvestDialog");
  const showExpenseDialogBtn = document.querySelector(".showExpenseDialog");
  const harvestDialog = document.getElementById("harvest-dialog");
  const expenseDialog = document.getElementById("expense-dialog");
  const dialogContentEl = document.querySelector(".dialog_content");
  const selectExpenseForm = document.querySelector(
    ".dialog_content--select-expense"
  );
  const inputExpenseDetailsForm = document.querySelector(
    ".dialog_content--input-expense-details"
  );
  const openExpenseFormBtns = document.querySelectorAll(
    ".btn-open-expense-form"
  );

  showHarvestDialogBtn.addEventListener("click", () => {
    harvestDialog.showModal();
  });
  showExpenseDialogBtn.addEventListener("click", () => {
    expenseDialog.showModal();
  });

  const expenseForms = {
    labour: [
      {
        id: "description",
        label: "Description",

        type: "select",
        options: [
          "Picking",
          "Fertilizer Application",
          "Pesticide Application",
          "Pruning",
        ],
      },
      {
        id: "numberOfLaborers",
        label: "Number of Laborers",
        type: "number",
      },
      { id: "payRate", label: "Pay Rate", type: "number" },
      {
        id: "hoursWorked",
        label: "Hours worked",
        type: "number",
      },
    ],
    pesticides: [
      {
        id: "description",
        label: "Description",

        type: "select",
        options: [
          "Picking",
          "Fertilizer Application",
          "Pesticide Application",
          "Pruning",
        ],
      },
      {
        id: "costPerUnit",
        label: "Cost per unit",
        type: "number",
      },
      {
        id: "quantity",
        label: "Quantity purchased",
        type: "number",
      },
    ],
    fertilizer: [
      {
        id: "description",
        label: "Description",

        type: "select",
        options: [
          "Picking",
          "Fertilizer Application",
          "Pesticide Application",
          "Pruning",
        ],
      },
      {
        id: "costPerUnit",
        label: "Cost per unit",
        type: "number",
      },
      {
        id: "quantity",
        label: "Quantity purchased",
        type: "number",
      },
    ],
    miscelleneous: [
      {
        id: "description",
        label: "Description",
      },
      {
        id: "cost",
        label: "Cost",
        type: "number",
      },
    ],
  };

  function openExpenseSelectionForm() {
    console.log("hello");
    openExpenseSelectionFormBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // dialogContentEl.removeChild(inputExpenseDetailsForm);

      dialogContentEl.appendChild(selectExpenseForm);
    });
  }

  function handleFormOpen(expenseType) {
    const openExpenseSelectionFormBtn = document.querySelector(
      ".open-select-expense-form"
    );

    const inputExpenseDetailsForm = document.querySelector(
      ".dialog_content--input-expense-details"
    );

    if (inputExpenseDetailsForm) {
      const inputElements = inputExpenseDetailsForm.querySelectorAll(".input");

      let formData = {
        expenseDetails: {},
      };

      function parseValue(value, type) {
        switch (type) {
          case "number":
            return parseFloat(value);

          default:
            return value.toString();
        }
      }

      inputElements.forEach((el) => {
        el.addEventListener("change", (e) => {
          const key = el.getAttribute("id");
          const type = el.getAttribute("type");

          const value = e.target.value;
          if (key === "transactionDate" || key === "expenseTotal") {
            formData[key] = parseValue(value, type);
          }
          // formData.expenseDetails.push({ [key]: parseValue(value, type) });
          formData.expenseDetails = {
            ...formData.expenseDetails,
            [key]: parseValue(value, type),
          };
        });
      });

      inputExpenseDetailsForm.addEventListener("submit", (e) => {
        e.preventDefault();
        e.stopPropagation();

        const data = {
          farm_id: 1,
          expense_type: expenseType,
          transaction_date: formData.transactionDate,
          expense_total: formData.expenseTotal,
          expense_details: [formData.expenseDetails],
        };

        console.log(data);
        const req = {
          url: "expenses/",
          data,
          loadingMessage: "Creating expense...",
          successMessage: "Expense created successfully",
        };

        post(req);
        console.log(formData);
      });

      openExpenseSelectionFormBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        dialogContentEl.removeChild(inputExpenseDetailsForm);
        dialogContentEl.appendChild(selectExpenseForm);
      });
    }
  }

  function openExpenseForm(formDetails, expenseType) {
    const elements = formDetails.map((el) => {
      const label = `<label for=${el.id}>${el.label}</label>`;
      let input;
      if (el.type !== "select") {
        input = `<input id=${el.id} class="input" type=${el.type} required />`;
      } else {
        input = `<select id=${el.id} class="input" required>
                        <option value="">--Please choose an option--</option>`;
        el.options.forEach(
          (option) => (input += `<option value=${option}>${option}</option>`)
        );
        input += `</select>`;
      }

      return `<div class="form-row form-row--horizontal">${label}${input}</div>`;
    });

    let markup = `
                  <form class='form dialog_content--input-expense-details'>
                  <h2>Enter ${expenseType} expense Details</h2>
                    <div class="form-row form-row--horizontal">
                      <label for="transactionDate">Transaction Date</label>
                      <input id='transactionDate' class="input" required type="date" />
                    </div>
                  `;
    elements.forEach((el) => (markup += el));

    markup += `
                  <div class="form-row form-row--horizontal">
                      <label for="total">Total</label>
                      <input id='expenseTotal' class="input" type="number" />
                    </div>
                  <div class="btns-row">
                    <button class="btn btn-secondary btn-large open-select-expense-form" type='button' >Back</button>
                    <button class="btn btn-secondary btn-large">Cancel</button>
                    <button class="btn btn-primary btn-large">Submit</button>
                  </div>
                  </form>`;

    dialogContentEl.removeChild(selectExpenseForm);

    dialogContentEl.insertAdjacentHTML("beforeEnd", markup);
    // formContainerEl.insertAdjacentHTML("afterBegin", markup);

    handleFormOpen(expenseType);
  }

  openExpenseFormBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const formToOpen = btn.getAttribute("data-opens");
      console.log(expenseForms[formToOpen]);
      openExpenseForm(expenseForms[formToOpen], formToOpen);
    });
  });
}
