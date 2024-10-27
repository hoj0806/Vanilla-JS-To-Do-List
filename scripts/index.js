// selectors
const listAddBtn = document.querySelector(".feature-box__add-button-box");
const popupBox = document.querySelector(".pop-up-box");
listAddBtn.addEventListener("click", () => {
  popupBox.classList.add("show-pop-up");
});
