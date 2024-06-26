const hideAlert = () => {
  const el = document.querySelector(".status-box");

  if (el) {
    el.parentElement.removeChild(el);
  }
};

export const showAlert = (type, message) => {
  hideAlert();
  const markup = `<div class="status-box status-box--${type}">    
  <ion-icon class='icon-success'  name="checkmark-circle-outline"></ion-icon>
  <ion-icon  class='icon-error' name="close-circle-outline"></ion-icon>
  <ion-icon  class='icon-warning'  name="alert-circle-outline"></ion-icon>
  <svg stroke="currentColor" class='icon-loading'  fill="#20377d" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path></svg>
  <span>
  ${message}
  </span> 
  </div>

`;

  document
    .querySelector(".app-layout")
    .insertAdjacentHTML("afterbegin", markup);

  if (type !== "loading") {
    window.setTimeout(hideAlert, 5000);
  }
};
