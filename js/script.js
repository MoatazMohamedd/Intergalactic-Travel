(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
          event.stopPropagation();
        } else {
          showLoadingSpinner();
          bookTrip();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

function bookTrip() {
  bookingSection = document.querySelector(".needs-validation");
  bookingSection.hidden = true;

  bookingSection.reset();

  setTimeout(function () {
    hideLoadingSpinner();
    bookingSection.hidden = false;
    bookingSection.classList.remove("was-validated");
  }, 2500);
}

function showLoadingSpinner() {
  var spinner = document.querySelector("#spinner");
  spinner.classList.remove("d-none");
}

function hideLoadingSpinner() {
  var spinner = document.querySelector("#spinner");
  spinner.classList.add("d-none");
}
