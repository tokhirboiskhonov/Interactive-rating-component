let ratingValue;

const elRatingComponentForm = document.querySelector(".rating-component__form");
const elRatingComponentResultValue = document.querySelector(
  ".rating-component__result-value"
);

if (elRatingComponentForm) {
  elRatingComponentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let ratingFormData = new FormData(elRatingComponentForm);

    ratingValue = parseInt(ratingFormData.get("rating"), 10);

    elRatingComponentResultValue.textContent = ratingValue;

    let currentStep = elRatingComponentForm.closest(".rating-component__step");
    currentStep.classList.remove("rating-component__step--active");
    currentStep.nextElementSibling.classList.add(
      "rating-component__step--active"
    );
  });
}
