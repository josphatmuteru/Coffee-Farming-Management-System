import { get } from "./crudOperations.js";

export async function handleFertilizerApplicationGuidePage() {
  let isLoading = true;
  let fertilizers = [];

  const goBackToFarmGuideMenuBtn = document.querySelector(
    ".btn-open-farm-guide-menu"
  );

  goBackToFarmGuideMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("/farm-guide");
  });

  function toggleLoading(isLoading) {
    if (isLoading) {
      document.querySelector(".row-instructions").classList.add("loading");
      document.querySelector(".row-fertilizers").classList.add("loading");
    } else {
      document.querySelector(".row-instructions").classList.remove("loading");
      document.querySelector(".row-fertilizers").classList.remove("loading");
    }
  }

  toggleLoading(isLoading);

  get({
    url: "farmGuide/fertilizer-application",
  }).then((result) => {
    if (result.status === "success") {
      isLoading = false;
      fertilizers = result.data;
      const fertilizerList = fertilizers.map((fertilizer) => ({
        id: fertilizer.fertilizer_id,
        name: fertilizer.fertilizer_name,
        nutrient: fertilizer.fertilizer_name,
      }));

      console.log(fertilizers);
      renderFertilizerApplicationInstructions(fertilizers[0]);
      renderFertilizerList(fertilizerList, fertilizers);
      toggleLoading(isLoading);
    } else {
      console.log(result);
    }
  });

  function handleFertilizerList(fertilizers) {
    const fertilizerListEls = document.querySelectorAll(".fertilizer");
    console.log(fertilizerListEls);

    fertilizerListEls.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedFertilizerId = item.getAttribute("id") * 1;
        fertilizerListEls.forEach((el) => {
          el.classList.remove("active");
        });
        item.classList.add("active");

        const fertilizer = fertilizers.find(
          (item) => item.fertilizer_id === selectedFertilizerId
        );

        console.log(fertilizer);
        renderFertilizerApplicationInstructions(fertilizer);
      });
    });
  }

  function renderFertilizerList(fertilizerList, fertilizers) {
    let markup = ``;
    fertilizerList.forEach((fertilizer, index) => {
      console.log(index);
      markup += `
                <li class="fertilizer  ${index === 0 ? "active" : ""}" id=${
        fertilizer.id
      } >
                  <span class="fertilizer_name">
                  ${fertilizer.name}
                  </span>
                  <div class="flex align-center">
                    <span class="fertilizer_nutrient"
                      >Nutrient -
                      <span class="value"> ${fertilizer.nutrient} </span>
                    </span>
                
                  </span>
                </div>
                </li>
  `;
    });

    document.querySelector(".list-fertilizers").innerHTML = "";
    document
      .querySelector(".list-fertilizers")
      .insertAdjacentHTML("afterbegin", markup);

    handleFertilizerList(fertilizers);
  }

  function renderFertilizerApplicationInstructions(fertilizer) {
    const {
      fertilizer_name: name,
      amount_per_tree: amountPerTree,
      application_procedure: applicationProcedure,
      required_tools: tools,
    } = fertilizer;

    const markup = `
                  <div class="flex flex-dc gap-sm">
                    <p class="instruction_detail">
                      <span> Fertilizer - </span>
                      <span>${name} </span>
                    </p>
                    <p class="instruction_detail">
                      <span>Amount per tree - </span>
                      <span> ${amountPerTree} </span>
                    </p>
                    <p class="instruction_detail">
                      <span> Tools - </span>
                      <span>${tools.map((tool) => tool).join("")}</span>
                    </p>
                  </div>

                  <div class="instruction_detail instruction_detail-procedure">
                    <h4>Application Procedure</h4>
                    ${applicationProcedure
                      .map((step) => {
                        const stepMarkup = `<p>${step}</p>`;
                        return stepMarkup;
                      })
                      .join("")}
                  </div>
               

`;
    document.querySelector(".fertilizer-instructions_text").innerHTML = "";
    document
      .querySelector(".fertilizer-instructions_text")
      .insertAdjacentHTML("afterbegin", markup);
  }
}
