import { get } from "./crudOperations.js";

export async function handlePestManagementPage() {
  let isLoading = true;

  const pageElements = [".row-probable-pests", ".row-other-pests"];
  toggleLoading(isLoading, pageElements);

  const pestListsContainer = document.querySelector(".container--pest-lists");
  const pestDetailsContainer = document.querySelector(
    ".container--pest-details"
  );

  const goBackToFarmGuideMenuBtn = document.querySelector(
    ".btn-open-farm-guide-menu"
  );

  goBackToFarmGuideMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("/farm-guide");
  });

  const goBackToPestListsBtn = document.querySelector(".btn-open-pest-lists");

  goBackToPestListsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    goBackToPestLists();
  });

  function goBackToPestLists() {
    pestDetailsContainer.classList.add("hidden");
    pestListsContainer.classList.remove("hidden");
  }

  get({ url: "farmGuide/pest-management" }).then((result) => {
    if (result.status === "success") {
      const pests = result.data;
      isLoading = false;
      toggleLoading(isLoading, [".row-other-pests"]);
      console.log(pests);

      renderOtherPestsList(pests);
    }
  });

  function renderPestListItem(pest) {
    const {
      pest_id: pestId,
      pest_name: pestName,
      pest_symptoms: symptoms,
      required_tools: tools,
      required_pesticide: pesticide,
      pesticide_application_procedure: pesticideApplicationProcedure,
    } = pest;

    const markup = ` 
      <li class="pest">
      <div class="pest_img-box">
        <img
          src="../src/Coffee-diseases/coffee-berry-disease-1.jpg"
          alt=""
          class="pest_image"
        />
      </div>
      <span class="pest_name">${pestName}</span>
      <button class="btn btn-primary btn-medium btn-open-more-details" id=${pestId}>
        See more details
      </button>
      </li>

      
`;

    return markup;
  }

  function renderOtherPestsList(otherPestsList) {
    let otherPestsListItemsMarkup = `${otherPestsList
      .map((pest) => renderPestListItem(pest))
      .join("")}`;

    document.querySelector(".list-other-pests").innerHTML = "";
    document
      .querySelector(".list-other-pests")
      .insertAdjacentHTML("afterbegin", otherPestsListItemsMarkup);

    handlePestLists(otherPestsList);
  }

  function handlePestLists(pestList) {
    const openPestDetailsBtns = document.querySelectorAll(
      ".btn-open-more-details"
    );

    console.log(openPestDetailsBtns);

    openPestDetailsBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        pestListsContainer.classList.add("hidden");
        pestDetailsContainer.classList.remove("hidden");

        console.log("helllooo");

        const selectedPestId = btn.getAttribute("id") * 1;
        const pestToShow = pestList.find(
          (pest) => pest.pest_id === selectedPestId
        );

        renderMorePestDetails(pestToShow);
      });
    });
  }

  function renderMorePestDetails(pest) {
    const {
      pest_id: pestId,
      pest_name: pestName,
      pest_symptoms: symptoms,
      pest_symptoms_images: symptomsImages,
      required_tools: requiredTools,
      required_pesticide: requiredPesticide,
      pesticide_application_procedure: pesticideApplicationProcedure,
    } = pest;

    const pestDetailsMarkup = `
    <div class="row flex flex-dc">
    <div class="flex flex-dc gap-md">
      <div class="flex flex-dc gap-sm">
        <p class="pest_detail">
          <span>Pest Name</span>
          <span>${pestName}</span>
        </p>
        <div class="pest_detail pest_detail-symptoms flex flex-dc gap-sm">
          <h4>Symptoms</h4>
          <ul class="flex flex-dc gap-sm pest_symptoms">
               ${symptoms
                 .map(
                   (symptom) => `<li>
                                  <p class="pest_symptom">
                                  ${symptom}
                                  </p>
                                </li>`
                 )
                 .join("")}
          </ul>
        </div>
        <div>
          <div class="pest_detail flex-dc flex gap-sm section-symptoms--images">
            <h4>Symptom Images</h4>
            <ul class="list list-activity-images list-symptoms-images">
                  ${symptoms
                    .map(
                      (image) => `
                                        <li>
                                          <figure class="procedure_step-img">
                                            <img
                                              src="/src/fertilizer-application-methods/ring-method.jpg"
                                              alt=""
                                            />
                                            <figcaption>Step 1</figcaption>
                                          </figure>
                                        </li>
                      `
                    )
                    .join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    `;

    const pestControlDetailsMarkup = `
    <div class="flex flex-dc gap-md">
    <div class="flex flex-dc gap-sm">
      <p class="instruction_detail">
        <span>Required Pesticide</span>
        <span
          >${requiredPesticide}</span
        >
      </p>
      <p class="instruction_detail">
      <span>Required Tools</span>
        <span>${requiredTools}</span>
      </p>
    </div>
    <div
      class="instruction_detail instruction_detail-procedure flex flex-dc gap-sm"
    >
      <h4>Procedure</h4>

      <ul class="flex flex-dc gap-sm procedure_steps">
      ${pesticideApplicationProcedure
        .map(
          (step, index) => `
          <li>
          <p class="procedure_step">
        <strong>Step ${index + 1}: </strong>${step}
        </p>
        </li>
          `
        )
        .join("")}
      </ul>
      <div class="section-instructions--images">
        <div class="row row-activity">
          <h3>Procedure Images</h3>
          <ul class="list list-activity-images">
          ${symptoms
            .map(
              (image) => `
                                <li>
                                  <figure class="procedure_step-img">
                                    <img
                                      src="/src/fertilizer-application-methods/ring-method.jpg"
                                      alt=""
                                    />
                                    <figcaption>Step 1</figcaption>
                                  </figure>
                                </li>
              `
            )
            .join("")}
            
          </ul>
        </div>
      </div>
    </div>
  </div>


`;

    document.querySelector(".section-details--text").innerHTML = "";
    document.querySelector(".pest-control--instructions").innerHTML = "";

    document
      .querySelector(".section-details--text")
      .insertAdjacentHTML("afterbegin", pestDetailsMarkup);

    document
      .querySelector(".pest-control--instructions")
      .insertAdjacentHTML("afterbegin", pestControlDetailsMarkup);
  }
}

export function toggleLoading(isLoading, elements) {
  if (isLoading) {
    elements.forEach((el) => {
      document.querySelectorAll(el).forEach((el) => {
        el.classList.add("loading");
        el.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
        el.querySelectorAll("input").forEach(
          (input) => (input.disabled = true)
        );
      });
    });
  } else {
    elements.forEach((el) => {
      document.querySelectorAll(el).forEach((el) => {
        el.classList.remove("loading");
        el.querySelectorAll("button").forEach((btn) =>
          btn.removeAttribute("disabled")
        );
        el.querySelectorAll("input").forEach((input) =>
          input.removeAttribute("disabled")
        );
      });
    });
  }
}
