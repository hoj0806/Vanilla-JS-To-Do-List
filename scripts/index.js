// selectors
const listAddBtn = document.querySelector(".feature-box__add-button-box");
const popupBox = document.querySelector(".pop-up-box");
const addInput = document.querySelector(".add-input");
const popupBtn = document.querySelector(".pop-up-confirm-btn");
const listContainer = document.querySelector(".todo-list-container");
const listItems = document.querySelectorAll(".list-item");

let todoList = [];

listItems.forEach((item) => {
  todoList.push({
    title: item.innerHTML,
    isFinished: false,
  });
});

// Event handler
listAddBtn.addEventListener("click", () => {
  popupBox.classList.add("show-pop-up");
});

popupBtn.addEventListener("click", () => {
  todoList.push({
    title: addInput.value,
    isFinished: false,
  });
  popupBox.classList.remove("show-pop-up");
  console.log(todoList);
  const html = `<li class="list-item">${addInput.value}</li>`;
  listContainer.insertAdjacentHTML("beforeend", html);
});
