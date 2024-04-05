import { get, post } from "./crudOperations.js";
import { toggleLoading } from "./pestManagement.js";

export async function handleFarmProfilePage() {
  let isLoading = true;
  const elementsWaitingForData = [".row--details"];

  toggleLoading(isLoading, elementsWaitingForData);

  get({ url: "farmProduce/farm-profile" }).then((result) => {
    if (result.status === "success") {
      const profileData = result.data[0];
      const farmId = profileData.farm_id;

      isLoading = false;
      renderProfileDetails(profileData);
      handleProfileDetailsForm(farmId);
      toggleLoading(isLoading, elementsWaitingForData);

      console.log(profileData);
    }
  });

  function handleProfileDetailsForm(farmId) {
    const farmProfileDetailsForm = document.querySelector(
      ".form--farm-profile"
    );
    const inputEls = farmProfileDetailsForm.querySelectorAll("input");

    let formData = {};
    inputEls.forEach((el) => {
      el.addEventListener("change", (e) => {
        e.preventDefault();

        el.closest("section")
          .querySelector(".btns-row")
          .classList.remove("hidden");

        const inputElId = el.getAttribute("id");
        const inputType = el.getAttribute("type");
        let value = el.value;
        value = inputType === "number" ? value * 1 : value;

        formData = { ...formData, [inputElId]: value };
      });
    });

    farmProfileDetailsForm.querySelectorAll(".btn-cancel").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".btns-row").classList.add("hidden");
      });
    });

    farmProfileDetailsForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const farmProfileData = renameObjectKeys(formData, "snakeCase");

      console.log(farmProfileData);

      post({
        url: `farmProduce/farm-profile/${farmId}`,
        data: farmProfileData,
        loadingMessage: "Updating details",
        successMessage: "Details updated",
      });
    });
  }

  function renderProfileDetails(profileData) {
    const {
      farm_id: farmId,
      farmer_name: farmerName,
      coffee_variety: coffeeVariety,
      farm_size: farmSize,
      number_of_coffee_trees: numberOfCoffeeTrees,
      expected_yearly_yield: expectedYearlyYield,
      coffee_price_per_kg: coffeePricePerKg,
    } = profileData;

    const formData = renameObjectKeys(profileData, "camelCase");

    const inputEls = document
      .querySelector(".form--farm-profile")
      .querySelectorAll("input");

    console.log(inputEls);
    inputEls.forEach((el) => {
      const inputElId = el.getAttribute("id");
      console.log(inputElId);
      console.log(formData);
      el.value = formData[inputElId];
    });
  }
  function renameObjectKeys(oldObject, namingConvention) {
    const newObject = {};
    if (Object.keys(oldObject).length > 0) {
      for (const key in oldObject) {
        let newKey;
        if (namingConvention === "camelCase") {
          newKey = key.replace(/_([a-z])/g, function (match, letter) {
            return letter.toUpperCase();
          });
        }
        if (namingConvention === "snakeCase") {
          newKey = key.replace(/[A-Z]/g, function (match) {
            return "_" + match.toLowerCase();
          });
        }

        newObject[newKey] = oldObject[key];
      }
    }
    return newObject;
  }
}
