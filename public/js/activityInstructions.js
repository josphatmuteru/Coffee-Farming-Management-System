import { get } from "./crudOperations.js";
import { toggleLoading } from "./pestManagement.js";

export async function handleActivityInstructions() {
  const currentUrl = window.location.href;

  const activityName = currentUrl.split("farm-guide/")[1];

  const goBackToFarmGuideMenuBtn = document.querySelector(
    ".btn-open-farm-guide-menu"
  );

  goBackToFarmGuideMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.replace("/farm-guide");
  });

  console.log(activityName);

  let isLoading = true;

  const pageElements = [
    ".section-instructions--images",
    ".section-instructions--text",
  ];

  toggleLoading(isLoading, pageElements);

  get({ url: `farmGuide/${activityName}` }).then((result) => {
    if (result.status === "success") {
      const activityDetails = result.data[0];
      isLoading = false;

      renderActivityInstructionDetails(activityDetails);
      toggleLoading(isLoading, pageElements);
    }
  });

  function renderActivityInstructionDetails(activityDetails) {
    const {
      activity_name: activityName,
      required_tools: requiredTools,
      activity_procedure: activityProcedure,
      procedure_images: procedureImages,
    } = activityDetails;
    console.log(activityDetails.activity_procedure);
    const markup = `
    <div class="row row-activity">
    <div class="flex flex-dc gap-md">
      <div class="flex flex-dc gap-sm">
        <p class="instruction_detail">
          <span>Activity</span>
          <span>${activityName}</span>
        </p>
        <p class="instruction_detail">
          <span>Purpose</span>
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing
            elit.</span
          >
        </p>
        <p class="instruction_detail">
          <span>Tools</span> <span>${requiredTools}</span>
        </p>
      </div>
      <div
        class="instruction_detail instruction_detail-procedure flex flex-dc gap-sm"
      >
        <h4>Procedure</h4>

        <ul class="flex flex-dc gap-sm procedure_steps">
        ${activityProcedure
          .map(
            (step, index) => `
        <li>
        <div class='flex gap-sm' >
        <span><strong>${index + 1}.</strong></span>
        <p class="procedure_step">
         ${step}
        </p>
        </div>
        </li>
        `
          )
          .join("")}

        </ul>
        <div class="section-instructions--images">
          <div class="row row-activity">
            <h3>Procedure Images</h3>
            <ul class="list list-activity-images">            
            ${activityProcedure
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

    document.querySelector(".section-instructions--text").innerHTML = "";
    document
      .querySelector(".section-instructions--text")
      .insertAdjacentHTML("afterbegin", markup);
  }
}
