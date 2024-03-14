import { showAlert } from "./alert.js";
import { get, post, sendDelete } from "./crudOperations.js";

export async function HandleDashboardFunctions() {
  const expenseDialog = document.getElementById("dialog--expenses");
  const scheduleDialog = document.getElementById("dialog--schedule");
  const openDialogBtns = document.querySelectorAll(".btn-open-dialog");

  const showFarmInputBtns = document.querySelectorAll(".btn-show-farmInput");

  // let openExpenseDialogAndFormBtns = document.querySelectorAll(
  //   ".btn-open-expense-dialog-and-form"
  // );
  const openScheduleDialogAndFormBtns = document.querySelectorAll(
    ".btn-open-schedule-dialog-and-form"
  );
  const openExpenseFormBtns = document.querySelectorAll(
    ".btn-open-expense-form"
  );

  const openActivityFormBtns = document.querySelectorAll(
    ".btn-open-activity-form"
  );

  function convertSnakeCaseToCamelCase(word) {
    return word.replace(/_([a-z])/g, function (match, letter) {
      return letter.toUpperCase();
    });
  }
  function convertCamelCaseToSnakeCase(word) {
    return word.replace(/[A-Z]/g, function (match) {
      return "_" + match.toLowerCase();
    });
  }

  function renameObjectKeys(oldObject, namingConvention) {
    const newObject = {};
    if (Object.keys(oldObject).length > 0) {
      for (const key in oldObject) {
        let newKey;
        if (namingConvention === "camelCase") {
          newKey = convertSnakeCaseToCamelCase(key);
        }
        if (namingConvention === "snakeCase") {
          newKey = convertCamelCaseToSnakeCase(key);
        }

        newObject[newKey] = oldObject[key];
      }
    }
    return newObject;
  }

  const fetchScheduleActivities = async () => {
    const req = {
      url: "activities/",
    };

    const scheduleActivities = await get(req);
    return scheduleActivities;
  };

  const scheduleActivities = await fetchScheduleActivities();

  const thisMonthsRecommendedActivities = await get({
    url: "activities/recommended-this-month",
  });

  thisMonthsRecommendedActivities.forEach((activity) => {
    const listItemMarkup = createRecommendedActivitiesListItemMarkup(activity);
    document
      .querySelector(".recommended-activities")
      .insertAdjacentHTML("afterbegin", listItemMarkup);

    handleRecommendedActivities();
  });

  scheduleActivities.forEach((activity) => {
    const listItemMarkup = createScheduleListItemMarkup(
      activity.activity_details
    );

    document
      .querySelector(".schedule_activities-list")
      .insertAdjacentHTML("afterbegin", listItemMarkup);
  });

  const fetchFarmInputs = async () => {
    const req = {
      url: "farmInputs/",
    };

    const farmInputs = await get(req);

    let farmInputsWithRenamedDetails = [];

    console.log(farmInputs);
    if (farmInputs.length > 1) {
      farmInputsWithRenamedDetails = farmInputs.map((farmInput) => {
        return renameObjectKeys(farmInput, "camelCase");
      });
    }

    console.log(farmInputsWithRenamedDetails);
    const availableFarmInputs = Object.groupBy(
      farmInputsWithRenamedDetails,
      ({ farmInputType }) => farmInputType
    );

    return availableFarmInputs;
  };

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
    pesticide: [
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

  const activityFormDefaultFields = [
    { id: "activityDate", label: "Date", type: "date" },
    { id: "activityTime", label: "Time to start", type: "time" },
    {
      id: "hoursRequired",
      label: "Hours required",
      type: "number",
    },

    {
      id: "subForm",
      heading: "Labour",
      optionButtons: [
        { label: "Do it yourself", unHides: null },
        {
          label: "Hire labourers",
          unHides: ["numberOfLaborers", "payRate"],
        },
      ],
      fields: [
        {
          id: "numberOfLaborers",
          label: "Number of Laborers",
          type: "number",
        },
        { id: "payRate", label: "Pay Rate", type: "number" },
      ],
    },
  ];

  const activityForms = {
    picking: [
      { id: "activityDate", label: "Date", type: "date" },
      { id: "activityTime", label: "Time to start", type: "time" },
      {
        id: "numberOfLaborers",
        label: "Number of Laborers",
        type: "number",
      },
      { id: "payRate", label: "Pay Rate", type: "number" },
      {
        id: "hoursRequired",
        label: "Hours required",
        type: "number",
      },
    ],
    pruning: [
      { id: "activityDate", label: "Date", type: "date" },
      { id: "activityTime", label: "Time to start", type: "time" },
      {
        id: "numberOfLaborers",
        label: "Number of Laborers",
        type: "number",
      },
      { id: "payRate", label: "Pay Rate", type: "number" },
      {
        id: "hoursRequired",
        label: "Hours required",
        type: "number",
      },
    ],
    pesticideApplication: [
      {
        id: "pesticide",
        label: "Pesticide",
        type: "select",
        options: [
          "Picking",
          "Fertilizer Application",
          "Pesticide Application",
          "Pruning",
        ],
      },
      { id: "quantity", label: "Quantity", type: "number" },

      {
        id: "numberOfLaborers",
        label: "Number of Laborers",
        type: "number",
      },
      { id: "payRate", label: "Pay Rate", type: "number" },
      {
        id: "hoursRequired",
        label: "Hours Required",
        type: "number",
      },
    ],
    fertilizerApplication: [
      {
        id: "subForm",
        heading: "fertilizer",
        optionButtons: [
          "Choose from available Pesticides",
          "Buy different type",
        ],
        fields: [
          {
            id: "fertilizer",
            label: "Fertilizer",
            type: "select",
            options: [
              "Picking",
              "Fertilizer Application",
              "Pesticide Application",
              "Pruning",
            ],
          },
          {
            id: "requiredQuantity",
            label: "Fertilizer quantity required",
            type: "number",
          },

          {
            id: "quantityToPurchase",
            label: "Fertilizer quantity to purchase",
            type: "number",
          },
          {
            id: "purchaseCost",
            label: "Fertilizer purchase cost",
            type: "number",
          },
        ],
      },

      {
        id: "hoursRequired",
        label: "Hours required",
        type: "number",
      },
    ],
  };

  const availableFarmInputs = await fetchFarmInputs();

  function convertKeyNamesfromSnakeToCamelCase(oldObject) {
    const newObject = {};
    if (Object.keys(oldObject).length > 0) {
      for (const key in oldObject) {
        const newKey = convertSnakeCaseToCamelCase(key);
        newObject[newKey] = oldObject[key];
      }
    }
    return newObject;
  }

  console.log("item", availableFarmInputs);

  if (Object.keys(availableFarmInputs).length > 0) {
  }

  // console.log(convertCamelCaseToSnakeCase("helloThere"));
  console.log(availableFarmInputs);

  const availableFarmInputss = {
    pesticide: [
      {
        description: "some pesticide",
        quantity: 5,
        measurementUnit: "Litres",

        id: 2,
      },
      {
        description: "Another pesticide",
        quantity: 5,
        measurementUnit: "Litres",

        id: 2,
      },
    ],

    fertilizer: [
      {
        description: "CAN",
        quantity: 5,
        measurementUnit: "Litres",

        id: 2,
      },
      {
        description: "Manure",
        measurementUnit: "Kilograms",

        quantity: 5,
        id: 2,
      },
    ],
  };
  function createFarmInputListItemsMarkup(farmInput) {
    const farmInputItems = availableFarmInputs[farmInput] ?? [];

    let listItemsMarkup = ``;

    farmInputItems.forEach((item) => {
      listItemsMarkup += `
                            <li class="row row--item"
                              data-item-details='${JSON.stringify({
                                farmInputId: item.farmInputId,
                                farmInputType: item.farmInputType,
                                description: item.description,
                                currentQuantity: item.quantity,
                                measurementUnit: item.measurementUnit,
                              })}'>
                              <span>${item.description}</span>
                              <span>${item.quantity} ${
        item.measurementUnit === "Litres"
          ? "Ltr"
          : item.measurementUnit === "Kilograms"
          ? "Kg"
          : item.measurementUnit
      }</span>
                              <button
                                class="btn btn-small btn-primary btn-icon btn-open-expense-dialog-and-form"
                                data-opens=${farmInput}
                                data-item-='${item.farmInputId}'>
                                <ion-icon name="add-outline"></ion-icon>
                                <span>Add More</span>
                              </button>
                              <button class="btn btn-icon-only btn-delete-farmInput">
                                <ion-icon name="trash-outline"></ion-icon>
                              </button>
                            </li>
`;
    });
    return listItemsMarkup;
  }

  function renderAvailableFarmInput(btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(btn);
      const farmInputToShow = btn.getAttribute("data-shows");
      const listItemsMarkup = createFarmInputListItemsMarkup(farmInputToShow);

      const farmInputInvetoryListEl = document.querySelector(
        ".farm-input-inventory"
      );

      btn.classList.add("disabled");

      showFarmInputBtns.forEach((item) => {
        if (btn !== item) {
          item.classList.remove("disabled");
          item.disabled = false;
        }
      });
      btn.disabled = true;
      farmInputInvetoryListEl.innerHTML = "";
      farmInputInvetoryListEl.insertAdjacentHTML("afterBegin", listItemsMarkup);

      const addDifferentFarmInputBtn =
        farmInputInvetoryListEl.parentNode.parentNode.querySelector(
          ".btn-add-different-farm-input"
        );
      addDifferentFarmInputBtn.setAttribute("data-opens", farmInputToShow);
      addDifferentFarmInputBtn.querySelector(
        "span"
      ).textContent = `Add Different ${capitilizeFirstLetter(farmInputToShow)}`;

      handleFarmInputInventory(btn);
    });
  }

  function handleFarmInputInventory() {
    const openExpenseDialogAndFormBtns = document.querySelectorAll(
      ".btn-open-expense-dialog-and-form"
    );

    const deleteFarmInputBtns = document.querySelectorAll(
      ".btn-delete-farmInput"
    );

    openExpenseDialogAndFormBtns.forEach((btn) => {
      const farmInputToShow = btn.getAttribute("data-shows");
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const itemId = btn.getAttribute("data-item-id") * 1;
        const formToOpen = btn.getAttribute("data-opens");

        if (itemId) {
          const itemDetails = btn
            .closest("li")
            ?.getAttribute("data-item-details");

          const formValues = JSON.parse(itemDetails);

          expenseDialog.showModal();

          const isEditMode = true;
          openForm(e, btn, "expense", formValues, isEditMode);
        } else {
          expenseDialog.showModal();
          openForm(e, btn, "expense");
        }
      });
    });

    deleteFarmInputBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const itemDetails = btn
          .closest("li")
          ?.getAttribute("data-item-details");
        const farmInputData = JSON.parse(itemDetails);
        const { farmInputId, description, farmInputType } = farmInputData;

        const confirmDeleteModal = document.createElement("dialog");
        confirmDeleteModal.setAttribute(
          "id",
          "dialog-confirm-delete-farmInput"
        );
        confirmDeleteModal.classList.add("dialog");

        const confirmDeleteMarkup = `
        <div class='flex'>
          <button class='btn btn-icon-only btn-close-modal ml-auto'>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <form>
        <h3>Discard ${capitilizeFirstLetter(farmInputType)}</h3>
        <div class='flex flex-dc gap-md'>
        <span class='intruction-text'>
          Are you sure you want ot remove ${description} from the inventory?
        </span>
        <div class="flex gap-md ml-auto">
          <button type='button' class="btn btn-medium btn-secondary btn-close-modal">Cancel</button>
          <button type='button' class="btn btn-medium btn-danger btn-confirm-delete">Delete</button>
        </div>
        </div>
        </form>
`;
        confirmDeleteModal.innerHTML = confirmDeleteMarkup;

        btn.parentElement.insertAdjacentElement(
          "afterbegin",
          confirmDeleteModal
        );
        confirmDeleteModal.showModal();
        confirmDeleteModal
          .querySelectorAll(".btn-close-modal")
          .forEach((btn) => {
            btn.addEventListener("click", (e) => {
              e.preventDefault();
              confirmDeleteModal.close();
            });
          });

        confirmDeleteModal
          .querySelector(".btn-confirm-delete")
          .addEventListener("click", (e) => {
            e.preventDefault();

            sendDelete({
              url: `farmInputs/${farmInputId}`,
              loadingMessage: `Removing ${description} from inventory...`,
            }).then((result) => {
              if (result.status === "success") {
                confirmDeleteModal.close();
                showAlert(
                  "success",
                  `${capitilizeFirstLetter(description)} removed successfully`
                );
              }
            });
          });
        console.log(farmInputData);
      });
    });
  }

  function handleRecommendedActivities() {
    const openScheduleDialogAndFormBtns = document.querySelectorAll(
      ".btn-open-schedule-dialog-and-form"
    );

    openScheduleDialogAndFormBtns.forEach((btn) => {
      console.log(btn);

      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const formToOpen = btn.getAttribute("data-opens");

        const activityDetails = JSON.parse(
          btn.closest("li").getAttribute("data-activity-details")
        );

        const farmInputType = formToOpen.includes("Application")
          ? formToOpen.split("Application")[0]
          : false;
        const farmInput = activityDetails.required_farm_input;

        console.log(farmInput);
        scheduleDialog.showModal();
        // dialogContentEl.removeChild(selectExpenseForm);

        if (farmInput && farmInputType) {
          const formValues = { [farmInputType]: farmInput };
          openForm(e, btn, "activity", formValues);
        }

        console.log(formToOpen);
        openForm(e, btn, "activity");
        // handleFormOpen();
      });
    });
  }

  showFarmInputBtns.forEach((btn) => {
    renderAvailableFarmInput(btn);
  });
  showFarmInputBtns[0].removeAttribute("disabled");
  showFarmInputBtns[0].click();
  console.log("btn", showFarmInputBtns[0]);

  function createMarkup2(formDetails, formHeading, formType) {
    console.log(formDetails);

    function createFormRow2(el) {
      const label = `<label for=${el.id}>${el.label}</label>`;
      let input;
      if (el.type !== "select") {
        input = `<input id=${el.id} class="input" type=${el.type} required />`;
      } else {
        input = `<select id=${el.id} class="input" required>
                                <option value="">--Choose from available ${el.id}s--</option>`;
        el.options.forEach(
          (option) => (input += `<option value=${option}>${option}</option>`)
        );
        input += `</select>`;
      }

      return `<div class="form-row form-row--horizontal">${label}${input}</div>`;
    }
    const elements = activityFormFields.map((el) => {
      if (el.id === "subForm") {
        let markup = `<div class='subform'>
                        <h3>${el.heading}</h3>`;
        el.fields.forEach((field) => {
          markup += createFormRow(field);
        });
        markup += `</div>`;
        return markup;
      } else {
        return createFormRow(el);
      }
    });

    console.log(elements);

    return elements;
  }

  function capitilizeFirstLetter(word) {
    const capitilizedFirstLetterWord =
      word.charAt(0).toUpperCase() + word.slice(1);
    console.log(capitilizedFirstLetterWord);
    return capitilizedFirstLetterWord;
  }
  function createMarkup(farmInput, formType, formHeading, isEditMode) {
    function createExpenseFormDetails(formHeading, farmInput) {
      let formDetails = [
        {
          id: "transactionDate",
          label: "Date of Purchase",
          type: "date",
        },
        {
          id: "description",
          label: `${
            farmInput ? capitilizeFirstLetter(farmInput) : "Description"
          }`,
          type: "text",
        },
      ];

      if (farmInput) {
        const quantityPurchasedField = {
          id: "quantity",
          label: "Quantity",
          type: "number",
        };

        formDetails = [
          ...formDetails,
          quantityPurchasedField,
          {
            id: "measurementUnit",
            label: "Measurement Unit",
            defaultOption: "Choose measurement unit",
            type: "select",

            options: ["Litres", "Kilograms"],
          },
        ];
      }

      formDetails = [
        ...formDetails,
        {
          id: "cost",
          label: "Cost",
          type: "number",
        },
      ];
      return formDetails;
    }

    function createActivityFormDetails(farmInput) {
      let formDetails = [...activityFormDefaultFields];

      if (farmInput) {
        const farmInputRequiredQuantityField = {
          id: "requiredQuantity",
          label: `${capitilizeFirstLetter(farmInput.type)} quantity required`,
          type: "number",
        };

        const farmInputSubForm = {
          id: "subForm",
          heading: farmInput.type,
          optionButtons: [
            {
              label: `Choose from available ${farmInput.type}s `,
              unHides: [farmInput.type, "requiredQuantity"],
            },
            {
              label: "Buy different type",
              unHides: [
                `${farmInput.type}toPurchase`,
                "quantityToPurchase",
                "measurementUnit",
                "requiredQuantity",

                "purchaseCost",
              ],
            },
          ],
          fields: [
            {
              id: farmInput.type,
              label: farmInput.type,
              defaultOption: `Choose from available ${farmInput.type}s`,

              type: "select",
              options: farmInput.availableOptions,
            },

            {
              id: `${farmInput.type}toPurchase`,
              label: `${capitilizeFirstLetter(farmInput.type)}`,
              type: "text",
            },
            farmInputRequiredQuantityField,

            {
              id: "quantityToPurchase",
              label: `${capitilizeFirstLetter(
                farmInput.type
              )} quantity to purchase`,
              type: "number",
            },
            {
              id: "measurementUnit",
              label: "Measurement Unit",
              defaultOption: "Choose measurement unit",
              type: "select",

              options: ["Litres", "Kilograms"],
            },
            {
              id: "purchaseCost",
              label: `${capitilizeFirstLetter(farmInput.type)} purchase cost`,
              type: "number",
            },
          ],
        };

        formDetails = [...formDetails, farmInputSubForm];
      }
      console.log(formDetails);
      return formDetails;
    }

    function createFormRow(el, createHidden = false) {
      const label = `<label for=${el.id}>${el.label}</label>`;
      let input;
      if (el.type !== "select") {
        input = `<input name=${el.id} id=${el.id} class="input" ${
          createHidden ? "disabled" : ""
        } type=${el.type} required />`;
      } else {
        input = `<select id=${el.id} class="input" ${
          createHidden ? "disabled" : ""
        }   required>
                                <option value="">--${
                                  el.defaultOption
                                }--</option>`;
        el.options.forEach((option) => {
          console.log(option.replace(" ", "-"));
          return (input += `<option  value='${option}'>${option}</option>`);
        });
        input += `</select>`;
      }

      return createHidden
        ? `<div class="form-row  form-row--horizontal hidden">${label}${input}</div>`
        : `<div class="form-row form-row--horizontal">${label}${input}</div>`;
    }

    const formDetails =
      formType === "expense"
        ? createExpenseFormDetails(formHeading, farmInput)
        : formType === "activity"
        ? createActivityFormDetails(farmInput)
        : false;

    const elements = formDetails?.map((el) => {
      if (el.id === "subForm") {
        let subFromMarkup = `<div class='sub-form'>
                        <div class="form-row form-row--horizontal">
                          <label>${el.heading}</label>
                          <div class='flex flex-dc gap-sm'>`;
        el.optionButtons.forEach((button) => {
          subFromMarkup += `<button  type='button' class='btn btn-medium btn-secondary btn-unHide-form-fields' data-unHides=${JSON.stringify(
            button.unHides
          )}>
                              ${button.label}
                              </button>

                          `;
        });
        subFromMarkup += `</div>
                          </div>`;
        el.fields.forEach((field) => {
          subFromMarkup += createFormRow(field, true);
        });
        subFromMarkup += `</div>`;
        return subFromMarkup;
      } else {
        return createFormRow(el);
      }
    });

    let markup = `
                          <form class='form dialog_content--input dialog_content--input-${formType}-details 'data-isEditMode=${isEditMode}>
                            ${
                              formType === "expense"
                                ? `<h2>Enter ${capitilizeFirstLetter(
                                    formHeading
                                  )} Expense Details</h2>
                            <div class="form-row form-row--horizontal hidden">
                              <label for="expense">Expense</label>
                              <input id='expense' class="input input--expense " disabled value=${formHeading} required type="text" />
                            </div>

                            `
                                : `<h2>Enter ${formHeading
                                    .replace(/([a-z])([A-Z])/g, "$1 $2")
                                    .split(" ")
                                    .map(
                                      (word) =>
                                        word.charAt(0).toUpperCase() +
                                        word.slice(1)
                                    )
                                    .join(",")
                                    .replace(",", " ")} Activity Details</h2>
                                    <div class="form-row form-row--horizontal hidden">
                                      <label for="activity">Activity</label>
                                      <input id='activity' class="input input--activity "  disabled value=${formHeading} required type="text" />
                                    </div>

                                    `
                            }

                          `;
    elements.forEach((el) => (markup += el));

    if (formType === "expense") {
      markup += `
                          <div class="form-row form-row--horizontal">
                              <label for="total">Total</label>
                              <input id='total' class="input" type="number" />
                            </div>
                         `;
    }
    markup += `

                          <div class="btns-row">
                            <button class="btn btn-secondary btn-large open-select-expense-form" type='button' >Back</button>
                            <button class="btn btn-secondary btn-large">Cancel</button>
                            <button class="btn btn-primary btn-large btn-open-confirm-expense-form">${
                              formType === "expense"
                                ? "Submit"
                                : "Add to schedule"
                            }</button>
                          </div>
                          </form>`;

    return markup;
  }

  const expenseDescriptionDetailValues = {
    labour: {
      activity: "Fertilizer Application",
      laborers: 15,
      payRate: 150,
      hours: 10,
      totalCost: 67500,
    },
    pesticidePurchase: {
      pesticide: "Fertilizer Application",
      measurementUnit: "Litres",

      quantity: 15,
      cost: 150,
      totalCost: 6750,
    },
    fertilizerPurchase: {
      fertilizer: "Fertilizer Application",
      measurementUnit: "Litres",
      quantity: 15,
      cost: 150,
      totalCost: 67500,
    },
  };

  function formatCamelCaseToNormal(word) {
    const formattedWord = word
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(",")
      .replace(",", " ");

    return formattedWord;
  }

  function formatTimeToTwelveHourFormat(timeString) {
    const hours = parseInt(timeString.split(":")[0]);
    const minutes = timeString.split(":")[1];
    console.log(hours - 12);

    const time =
      hours - 12 === -12
        ? `12 : ${minutes} AM`
        : hours - 12 > 0
        ? `${hours - 12}:${minutes} PM`
        : `${hours.toString().padStart(2, "0")}:${minutes} AM`;
    return time;
  }

  function createRecommendedActivitiesListItemMarkup(activityData) {
    const { activity, required_farm_input: farmInput } = activityData;
    const activityName = capitilizeFirstLetter(
      formatCamelCaseToNormal(activity)
    );
    const icon = activity.split("Application")[0];

    const markup = `
    <li class="activity" data-activity-details='${JSON.stringify(
      activityData
    )}'>
      <span class="icon"
        ><img
          class="image-icon-sm"
          src="../src/${icon}.png"
          alt=""
        />
      </span>
      <div class="activity_details flex flex-dc">
        <span>${activityName}</span>
        <span> ${farmInput ? `- ${farmInput}` : ""}</span>
      </div>

      <button
        class="btn btn-small btn-primary btn-open-schedule-dialog-and-form"
        data-opens="${activity}"
      >
        Add to schedule
      </button>
  </li>
    `;

    return markup;
  }

  function createScheduleListItemMarkup(activityData) {
    let { activity, activityTime, activityDate } = activityData;
    const farmInput =
      activityData.fertilizer ?? activityData.pesticide ?? false;

    const icon = activity.split("Application")[0];
    activity = formatCamelCaseToNormal(activity);

    activityTime = formatTimeToTwelveHourFormat(activityTime);
    activityDate = new Date(activityDate);

    activityDate = activityDate.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
    });

    console.log(activityData);

    const scheduleListItemMarkup = ` 
           <li class="list-item schedule_activity">
            <span class="schedule_activity-icon">
              <img class="icon-image" src="../src/${icon}.png" alt="" />
            </span>
            <div class="flex flex-dc">
              <div class='flex max-width'>
                <div class="flex flex-dc">
                <span class="schedule_activity-name">${activity}</span>
                ${
                  farmInput
                    ? `
                <span class="schedule_activity-farmInput">${farmInput}</span>
                  
                  `
                    : `
                <span class="schedule_activity-farmInput">&nbsp;</span>
                  
                  `
                }
                </div>
                <button class='btn btn-icon-only--sm ml-auto'>
                <ion-icon name="ellipsis-vertical"></ion-icon>
                </button>
                </div>
              <div class="flex flex-dr ${
                farmInput ? "mt-tiny" : "m"
              } height-max">
                <span class="schedule_activity-date">${activityDate}</span>
                <span class="schedule_activity-time ml-auto"
                  >${activityTime}</span
                >
              </div>
            </div>
          </li>`;

    return scheduleListItemMarkup;
  }

  function createConfirmExpensesFormMarkup(expenseDescriptionDetailValues) {
    const expenseDescriptionDetailLabels = {
      labour: [
        { id: "activity", label: "Activity" },
        { id: "laborers", label: "Laborers" },
        { id: "payRate", label: "Pay Rate" },
        { id: "hoursRequired", label: "Hours" },
      ],
      pesticidePurchase: [
        { id: "pesticide", label: "Pesticide" },
        { id: "quantity", label: "Quantity" },
        { id: "purchaseCost", label: "Cost" },
      ],
      fertilizerPurchase: [
        { id: "fertilizer", label: "Fertilizer" },
        { id: "quantity", label: "Quantity" },
        { id: "purchaseCost", label: "Cost" },
      ],
    };

    const expenses = Object.keys(expenseDescriptionDetailValues);
    console.log(expenses);

    let markup = `<form class="form dialog_content dialog_content-confirm">
                                      <h2>Confirm Activity Expenses</h2>
                                      <div class="activity_expenses flex flex-dc gap-md">
                                        <div>
                                          <ul class="list expense_list expense_list--labor">

                                            <li class="expense_list-item header-row">
                                              <span>Expense</span>
                                              <span>Description</span>
                                              <span>Total</span>

                                            </li>
                                        `;

    const expenseListItems = expenses.map((expense) => {
      let listItemMarkup = ` <li class="expense_list-item values-row">
                                              <span class="item_detail">${expense
                                                .replace(
                                                  /([a-z])([A-Z])/g,
                                                  "$1 $2"
                                                )
                                                .split(" ")
                                                .map(
                                                  (word) =>
                                                    word
                                                      .charAt(0)
                                                      .toUpperCase() +
                                                    word.slice(1)
                                                )
                                                .join(",")
                                                .replace(",", " ")}</span>
                                              <div class="item_detail item_detail-description">`;
      const descriptionDetails = expenseDescriptionDetailLabels[expense];
      descriptionDetails.forEach((detail) => {
        listItemMarkup += `   <div>
                                      <span>${detail.label}</span>
                                      <span>
                                        ${
                                          expenseDescriptionDetailValues[
                                            expense
                                          ][detail.id]
                                        }
                                      </span>
                                    </div>`;
      });
      listItemMarkup += `     </div>
                                    <span class="item_detail">KSH. ${expenseDescriptionDetailValues[expense].totalCost}</span>
                                 </li>`;
      return listItemMarkup;
    });

    expenseListItems.forEach((item) => (markup += item));
    markup += `         </ul>
                                </div>
                                </div>

                          <div class="btns-row flex">
                                <button class="btn btn-secondary btn-large">Cancel</button>
                                <button class="btn btn-primary btn-large btn-open-confirm-expense-form">Edit</button>
                                <button class="btn btn-primary btn-large btn-open-confirm-expense-form">Confirm</button>
                          </div>
                        </form>`;

    return markup;
  }

  openDialogBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const dialogName = btn.getAttribute("data-opens");
      console.log(btn, dialogName);
      const dialogElementToOpen = document.getElementById(dialogName);
      dialogElementToOpen.showModal();
    });
  });

  openExpenseFormBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => openForm(e, btn, "expense"));
  });
  openActivityFormBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => openForm(e, btn, "activity"));
  });

  function openForm(e, btn, formType, formValues = {}, isEditMode = false) {
    e.preventDefault();
    const formToOpen = btn.getAttribute("data-opens");

    const farmInputType = formToOpen.includes("pesticide")
      ? "pesticide"
      : formToOpen.includes("fertilizer")
      ? "fertilizer"
      : false;

    const farmInputAvailableOptions = farmInputType
      ? availableFarmInputs[farmInputType]?.map((item) => item.description) ??
        []
      : false;

    console.log("farmInputType", farmInputType, availableFarmInputs);

    let farmInput = farmInputType
      ? {
          type: farmInputType,
          availableOptions: farmInputAvailableOptions,
        }
      : false;

    farmInput = formType === "expense" ? farmInputType : farmInput;

    const markup = createMarkup(farmInput, formType, formToOpen, isEditMode);

    // const dialogContentEl =
    //   btn.closest(".dialog_content") ??
    //   document.querySelector(`.dialog_content`);
    const selectionForm =
      btn.closest(".dialog_content-select") ??
      document.querySelector(`.dialog_content-select--${formType}`);

    const dialogContentEl = selectionForm.closest(".dialog_content");

    console.log(`.dialog_content-select--${formType}`);

    dialogContentEl.removeChild(selectionForm);

    dialogContentEl.insertAdjacentHTML("beforeEnd", markup);

    console.log("formvaaaaaaaaaaaaaaaaalues", formValues);

    if (Object.keys(formValues).length > 0) {
      const inputElements = dialogContentEl.querySelectorAll(".input");
      if (Object.keys(formValues).includes("farmInputId")) {
        const idInputEl = document.createElement("input");

        idInputEl.id = "farmInputId";
        idInputEl.value = formValues.farmInputId;
        idInputEl.classList.add("input");
        idInputEl.classList.add("hidden");

        inputElements[0].parentNode.insertAdjacentElement(
          "beforeend",
          idInputEl
        );
      }

      inputElements.forEach((el) => {
        const key = el.getAttribute("id");
        const tagName = el.tagName;
        console.log("element", tagName);

        if (Object.keys(formValues).includes(key)) {
          if (tagName === "SELECT") {
            const inputElement = document.createElement("input");

            inputElement.id = key;
            inputElement.value = formValues[key];
            inputElement.classList.add("input");

            el.parentNode.replaceChild(inputElement, el);
          }
          el.value = formValues[key];
        }
      });
    }

    handleFormOpen(formValues, isEditMode);
  }

  function getFormData(form) {
    const inputElements = form.querySelectorAll(".input");

    let formData = {};

    inputElements.forEach((el) => {
      const key = el.getAttribute("id");
      const type = el.getAttribute("type");
      const value = el.value;
      formData[key] = type === "number" ? parseFloat(value) : value;

      el.addEventListener("change", (e) => {
        const value = e.target.value;
        formData[key] = type === "number" ? parseFloat(value) : value;
      });
    });

    return formData;
  }

  function handleFormOpen(existingData = {}, isEditMode = false) {
    const expensesForm = document.querySelector(
      ".dialog_content--input-expense-details"
    );
    const activityForm = document.querySelector(
      ".dialog_content--input-activity-details"
    );

    function editFormMarkup() {}

    if (activityForm) {
      const unHideFormFieldsBtns = document.querySelectorAll(
        ".btn-unHide-form-fields"
      );
      const activity = document.querySelector(".input--activity").value;
      const openExpenseConfirmFormBtn = document.querySelector(
        ".btn-open-confirm-expense-form"
      );

      unHideFormFieldsBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const fieldsToUnHide = JSON.parse(btn.getAttribute("data-unHides"));

          console.log(fieldsToUnHide);
          fieldsToUnHide?.forEach((field) => {
            const inputEl = document.getElementById(field);
            inputEl.closest(".form-row--horizontal").classList.remove("hidden");

            inputEl.removeAttribute("disabled");
          });

          const buttonsRowEl = btn.closest(".form-row--horizontal");
          const fieldsToDelete = buttonsRowEl
            .closest(".sub-form")
            .querySelectorAll(".hidden");

          // fieldsToDelete.forEach((field) =>
          //   field.parentNode.removeChild(field)
          // );

          buttonsRowEl.parentNode.removeChild(buttonsRowEl);
        });
      });

      let availableFarmInputSelected = "";
      const availableFarmInputSelectEl = activityForm.querySelector("select");
      const requiredQuantityEl = document.getElementById("requiredQuantity");
      const measurementUnitSelectEl =
        document.getElementById("measurementUnit");

      requiredQuantityEl?.addEventListener("change", (e) => {
        e.preventDefault();
        compareAvailableAndRequiredQuantities();
      });

      console.log(availableFarmInputSelectEl);

      availableFarmInputSelectEl?.addEventListener("change", (e) => {
        e.preventDefault();
        addMeasurementUnitToLabel();

        compareAvailableAndRequiredQuantities();
      });

      function addMeasurementUnitToLabel() {
        const selectedFarmInput = activityForm.querySelector("select").value;
        const farmInputType = availableFarmInputSelectEl.getAttribute("id");
        const selectedFarmInputDetails = getSelectedFarmInputDetails(
          selectedFarmInput,
          farmInputType
        );

        const selectedMeasurementUnit =
          selectedFarmInputDetails?.measurementUnit;

        const measurementUnitInputEl = document.createElement("input");
        measurementUnitInputEl.classList.add("input");
        // measurementUnitInputEl.classList.add("hidden");
        measurementUnitInputEl.setAttribute("id", "measurementUnit");
        measurementUnitInputEl.setAttribute("value", selectedMeasurementUnit);
        measurementUnitSelectEl.parentNode.replaceChild(
          measurementUnitInputEl,
          measurementUnitSelectEl
        );

        console.log(measurementUnitInputEl.value);
        requiredQuantityEl.parentNode.querySelector(
          "label"
        ).textContent += ` (${selectedMeasurementUnit})`;
      }

      function getSelectedFarmInputDetails(selectedFarmInput, farmInputType) {
        const selectedFarmInputDetails = availableFarmInputs[
          farmInputType
        ].find((item) => item.description === selectedFarmInput);

        console.log(selectedFarmInput);

        return selectedFarmInputDetails;
      }

      function compareAvailableAndRequiredQuantities() {
        if (availableFarmInputSelectEl.disabled) return;
        if (availableFarmInputSelectEl.value === "") return;
        const requiredQuantity = requiredQuantityEl.value * 1;

        const farmInputType = availableFarmInputSelectEl.getAttribute("id");

        const selectedFarmInput = activityForm.querySelector("select").value;
        console.log(availableFarmInputSelectEl);
        const selectedFarmInputDetails = getSelectedFarmInputDetails(
          selectedFarmInput,
          farmInputType
        );
        const selectedFarmInputQuantity = selectedFarmInputDetails?.quantity;

        console.log(document.getElementById("quantityToPurchase"));
        const quantityToPurchaseEl =
          document.getElementById("quantityToPurchase");
        const purchaseCostEl = document.getElementById("purchaseCost");
        if (selectedFarmInputQuantity < requiredQuantity) {
          quantityToPurchaseEl.parentElement.classList.remove("hidden");
          purchaseCostEl.parentElement.classList.remove("hidden");

          quantityToPurchaseEl.removeAttribute("disabled");
          purchaseCostEl.removeAttribute("disabled");
        } else if (selectedFarmInputQuantity > requiredQuantity) {
          quantityToPurchaseEl.parentElement.classList.add("hidden");
          purchaseCostEl.parentElement.classList.add("hidden");

          quantityToPurchaseEl.setAttribute("disabled", true);
          purchaseCostEl.setAttribute("disabled", true);
        }
      }

      let activityData = getFormData(activityForm);
      activityData["activity"] = activity;

      console.log(activityData);

      function generateActivityExpenses(activityData, activity) {
        const activityName = activity
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(",")
          .replace(",", " ");

        const {
          numberOfLaborers: laborers,
          payRate,
          hoursRequired,
          activityDate,
        } = activityData;

        const totalCost = laborers * payRate * hoursRequired;

        const labourExpenseData = {
          farm_id: 1,
          expense_type: "labour",
          expense_total: totalCost,
          transaction_date: activityDate,
          expense_details: [
            {
              numberOfLaborers: laborers,
              description: activityName,
              payRate,
              hoursWorked: hoursRequired,
              transactionDate: activityDate,

              expenseTotal: totalCost,
            },
          ],
        };

        const labourExpenseDataToDisplay = {
          laborers,
          activity: activityName,
          payRate: `KSH.${payRate}`,
          hoursRequired,
          totalCost,
        };

        let activityExpensesAndFarmInputDetails = {};
        let activityExpenses = {};
        let activityExpensesDataToDisplay = {};

        if (activityData.numberOfLaborers) {
          activityExpenses = { labourExpenseData };
          activityExpensesDataToDisplay = {
            labour: labourExpenseDataToDisplay,
          };
          activityExpensesAndFarmInputDetails = {
            activityExpenses,
            activityExpensesDataToDisplay,
          };
        }

        function generatePurchaseExpenseDetails(purchasedItem) {
          let farmInputToUpdate,
            farmInputToCreate = {};

          const {
            activity,
            purchaseCost,
            requiredQuantity,
            quantityToPurchase,
            activityDate,
            measurementUnit,
          } = activityData;

          const farmInputType = activity.split("Application")[0];

          activityData["farmInputType"] = farmInputType;

          const purchasedItemName =
            activityData[purchasedItem].length > 0
              ? activityData[purchasedItem]
              : activityData[`${purchasedItem}toPurchase`];

          activityData["farmInputName"] = purchasedItemName;

          let purchaseExpenseData = {
            farm_id: 1,
            expense_type: farmInputType,
            expense_total: purchaseCost,
            transaction_date: activityDate,
          };

          let purchaseExpenseDataToDisplay = {
            [purchasedItem]: purchasedItemName,
            quantity: `${quantityToPurchase} ${measurementUnit}`,
            purchaseCost: `KSH.${purchaseCost}`,
            totalCost: purchaseCost,
          };

          if (activityData[purchasedItem].length > 1) {
            const {
              farmInputId,
              quantity: currentQuantity,
              measurementUnit,
            } = getSelectedFarmInputDetails(
              activityData[purchasedItem],
              purchasedItem
            );

            purchaseExpenseData = {
              ...purchaseExpenseData,
              expense_details: [
                {
                  expense: farmInputType,
                  description: purchasedItemName,
                  quantity: quantityToPurchase,
                  transactionDate: activityDate,
                  cost: purchaseCost,
                },
              ],
            };
            purchaseExpenseDataToDisplay = {
              ...purchaseExpenseDataToDisplay,
              quantity: `${quantityToPurchase} ${measurementUnit}`,
            };

            const quantityAfterPurchase = currentQuantity + quantityToPurchase;
            const quantityAfterSubtractingRequiredQuantity =
              quantityAfterPurchase - requiredQuantity;

            const updatedFarmInputDetails = {
              farmInputId,
              quantity: quantityAfterSubtractingRequiredQuantity,
            };

            farmInputToUpdate = updatedFarmInputDetails;
          }
          if (activityData[`${purchasedItem}toPurchase`].length > 1) {
            const quantityAfterSubtractingRequiredQuantity =
              quantityToPurchase - requiredQuantity;

            const newFarmInputDetails = {
              description: activityData[`${purchasedItem}toPurchase`],
              quantity: quantityAfterSubtractingRequiredQuantity,
              measurement_unit: measurementUnit,
              farm_input_type: farmInputType,
            };

            farmInputToCreate = newFarmInputDetails;

            purchaseExpenseData = {
              ...purchaseExpenseData,
              expense_details: [
                {
                  expense: farmInputType,
                  description: purchasedItemName,
                  quantity: quantityToPurchase,
                  transactionDate: activityDate,
                  cost: purchaseCost,
                },
              ],
            };
          }

          return {
            purchaseExpenseData,
            purchaseExpenseDataToDisplay,

            farmInputToCreate,
            farmInputToUpdate,
          };
        }

        if (activity === "pesticideApplication" && activityData.purchaseCost) {
          const {
            purchaseExpenseData: pesticidePurchase,
            purchaseExpenseDataToDisplay,

            farmInputToCreate,
            farmInputToUpdate,
          } = generatePurchaseExpenseDetails("pesticide");

          const farmInputToCreateOrUpdate =
            Object.keys(farmInputToCreate).length > 0
              ? farmInputToCreate
              : Object.keys(farmInputToUpdate).length > 0
              ? farmInputToUpdate
              : false;

          activityExpenses = { ...activityExpenses, pesticidePurchase };
          activityExpensesDataToDisplay = {
            ...activityExpensesDataToDisplay,
            pesticidePurchase: purchaseExpenseDataToDisplay,
          };

          activityExpensesAndFarmInputDetails = {
            activityExpenses,
            activityExpensesDataToDisplay,
            farmInputDetails: farmInputToCreateOrUpdate,
          };
        }
        if (activity === "fertilizerApplication" && activityData.purchaseCost) {
          const {
            purchaseExpenseData: fertilizerPurchase,
            purchaseExpenseDataToDisplay,
            farmInputToCreate,
            farmInputToUpdate,
          } = generatePurchaseExpenseDetails("fertilizer");

          const farmInputToCreateOrUpdate =
            Object.keys(farmInputToCreate).length > 0
              ? farmInputToCreate
              : Object.keys(farmInputToUpdate).length > 0
              ? farmInputToUpdate
              : false;

          activityExpenses = {
            ...activityExpenses,
            fertilizerPurchase,
          };
          activityExpensesDataToDisplay = {
            ...activityExpensesDataToDisplay,
            fertilizerPurchase: purchaseExpenseDataToDisplay,
          };

          activityExpensesAndFarmInputDetails = {
            activityExpenses,
            activityExpensesDataToDisplay,
            farmInputDetails: farmInputToCreateOrUpdate,
          };
        }

        return activityExpensesAndFarmInputDetails;
      }
      activityForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const {
          activityExpenses = {},
          farmInputDetails = {},
          activityExpensesDataToDisplay = {},
        } = generateActivityExpenses(activityData, activity);

        let activityCreateRequest = {};
        let expenseCreateRequests = {};
        let farmInputCreateOrUpdateRequest = {};

        if (Object.keys(activityData).length > 0) {
          const scheduleListItemMarkup =
            createScheduleListItemMarkup(activityData);
          const {
            activity,
            activityDate,
            activityTime,
            numberOfLaborers,
            farmInputName = false,
            farmInputType = false,
          } = activityData;

          console.log(activityData);
          const activityDataToUpload = {
            activity_name: activity,
            activity_date: activityDate,
            activity_details: {
              activity,
              activityDate,
              activityTime,
              numberOfLaborers: isNaN(numberOfLaborers)
                ? "Do it yourself"
                : numberOfLaborers,
              farmInputName,
              farmInputType,
            },
            activity_status: "pending",
          };

          activityCreateRequest = {
            url: "activities/",
            data: activityDataToUpload,
            loadingMessage: "Adding activity to schedule",
            successMessage: "Activity added successfully",
          };
          console.log(activityDataToUpload);

          // document.querySelector(".activities_list").innerHTML = "";
          document
            .querySelector(".activities_list")
            .insertAdjacentHTML("beforeend", scheduleListItemMarkup);
        }

        if (Object.keys(activityExpensesDataToDisplay).length > 0) {
          openConfirmExpensesForm(activityExpensesDataToDisplay);
        }

        if (Object.keys(activityExpenses.length > 0)) {
          expenseCreateRequests = Object.keys(activityExpenses).map((key) => {
            const request = {
              url: "expenses/",
              data: activityExpenses[key],
              loadingMessage: `Creating ${formatCamelCaseToNormal(
                key.split("ExpenseData")[0]
              )} expense...`,
              successMessage: `${formatCamelCaseToNormal(
                key.split("ExpenseData")[0]
              )} expense created successfully`,
            };
            return request;
          });

          if (Object.keys(farmInputDetails).length) {
            farmInputCreateOrUpdateRequest = {
              loadingMessage: `Adding ${
                activityData.activity.split("Application")[0]
              } to inventory...`,
              successMessage: `${
                activityData.activity.split("Application")[0]
              } added successfully`,
            };
            if (Object.keys(farmInputDetails).includes("farmInputId")) {
              const { farmInputId, quantity } = farmInputDetails;
              const farmInputData = {
                quantity,
              };

              farmInputCreateOrUpdateRequest = {
                ...farmInputCreateOrUpdateRequest,
                url: `farmInputs/${farmInputId}`,
                data: { farmInputData },
              };

              console.log(farmInputCreateOrUpdateRequest);
            } else {
              farmInputCreateOrUpdateRequest = {
                url: `farmInputs/`,
                data: farmInputDetails,
                ...farmInputCreateOrUpdateRequest,
              };
            }
            post(farmInputCreateOrUpdateRequest).then((result) => {
              if (result.status === "success") {
                post(activityCreateRequest).then((result) => {
                  if (result.status === "success") {
                    expenseCreateRequests.forEach((request) => {
                      post(request);
                    });
                  }
                });
              }
            });
          } else {
            post(activityCreateRequest).then((result) => {
              if (result.status === "success") {
                expenseCreateRequests.forEach((request) => {
                  post(request);
                });
              }
            });
          }
        }
      });

      function openConfirmExpensesForm(activityExpensesDataToDisplay) {
        const dialogContentEl = activityForm.closest(".dialog_content");
        console.log("dialogContentEl", activityForm.parentNode);
        dialogContentEl.removeChild(activityForm);

        const markup = dialogContentEl.insertAdjacentHTML(
          "afterBegin",
          createConfirmExpensesFormMarkup(activityExpensesDataToDisplay)
        );
      }
    }

    if (expensesForm) {
      expensesForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = getFormData(expensesForm);
        console.log("isEditMode", isEditMode);
        if (isEditMode) {
          if (
            formData.expense === "fertilizer" ||
            formData.expense === "pesticide"
          ) {
            const newQuantity =
              existingData.currentQuantity + formData.quantity;

            const farmInputData = {
              quantity: newQuantity,
            };
            const farmInputId = existingData.farmInputId;

            const farmInputUpdateRequest = {
              url: `farmInputs/${farmInputId}`,
              data: { farmInputData },
              loadingMessage: `Adding more ${formData.expense} to inventory...`,
              successMessage: `${capitilizeFirstLetter(
                formData.expense
              )} added successfully`,
            };

            const expenseDetails = [{ ...formData }];
            const expenseData = {
              transaction_date: formData.transactionDate,
              expense_type: formData.expense,
              expense_details: expenseDetails,
              expense_total: formData.cost,
              farm_id: 1,
            };

            const expenseCreateRequest = {
              url: "expenses/",
              data: expenseData,
              loadingMessage: "Creating expense...",
              successMessage: "Expense created successfully...",
            };

            post(farmInputUpdateRequest).then((result) => {
              if (result.status === "success") {
                post(expenseCreateRequest).then((result) => {
                  if (result.status === "success") {
                    const dialogEl =
                      document.getElementById("dialog--expenses");
                    dialogEl.close();
                  }
                });
              }
            });

            return;
          }
        } else {
          if (
            formData.expense === "fertilizer" ||
            formData.expense === "pesticide"
          ) {
            const { description, expense, quantity, measurementUnit } =
              formData;
            const farmInputData = {
              description,
              farm_input_type: expense,
              quantity,
              measurement_unit: measurementUnit,
              farm_id: 1,
            };

            const expenseDetails = [{ ...formData }];
            const expenseData = {
              transaction_date: formData.transactionDate,
              expense_type: formData.expense,
              expense_details: expenseDetails,
              expense_total: formData.cost,
              farm_id: 1,
            };

            const farmInputCreateRequest = {
              url: "farmInputs/",
              data: farmInputData,
              loadingMessage: `Adding ${formData.expense} to inventory...`,
              successMessage: `${capitilizeFirstLetter(
                formData.expense
              )} added successfully`,
            };

            const expenseCreateRequest = {
              url: "expenses/",
              data: expenseData,
              loadingMessage: "Creating expense...",
              successMessage: "Expense created successfully",
            };
            console.log("farmInputData", farmInputData);
            post(farmInputCreateRequest).then((result) => {
              if (result.status === "success") {
                post(expenseCreateRequest);
              }
            });
          } else {
            const { expense, cost, transactionDate } = formData;

            const expenseDetails = [{ ...formData }];
            const expenseData = {
              expense_type: expense,
              transaction_date: transactionDate,
              expense_details: expenseDetails,
              expense_total: cost,
            };

            const expenseCreateRequest = {
              url: "expenses/",
              data: expenseData,
              loadingMessage: "Creating expense...",
              successMessage: "Expense created successfully",
            };

            post(expenseCreateRequest);
          }
        }
      });
    }
  }
}
