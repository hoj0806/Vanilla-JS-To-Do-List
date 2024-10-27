// selectors
const listAddBtn = document.querySelector(".feature-box__add-button-box");
const popupBox = document.querySelector(".pop-up-box");
const addInput = document.querySelector(".add-input");
const popupBtn = document.querySelector(".pop-up-confirm-btn");
// Event handler
listAddBtn.addEventListener("click", () => {
  popupBox.classList.add("show-pop-up");
});

popupBtn.addEventListener("click", () => {
  console.log(addInput.value);
  popupBox.classList.remove("show-pop-up");
});
