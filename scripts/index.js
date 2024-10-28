// selectors
const listAddBtn = document.querySelector(".feature-box__add-button-box");
const popupBox = document.querySelector(".pop-up-box");
const addInput = document.querySelector(".add-input");
const popupBtn = document.querySelector(".pop-up-confirm-btn");
const listContainer = document.querySelector(".todo-list-container");
const listItems = document.querySelectorAll(".list-item");
const listDeleteBtns = document.querySelectorAll(".list-delete-btn");

let todoList = [];
let selectList;
listItems.forEach((item) => {
  todoList.push({
    title: item.textContent,
    isFinished: false,
    order: Number(item.dataset.order),
  });
});

// Event handler
listAddBtn.addEventListener("click", () => {
  popupBox.classList.add("show-pop-up");
  popupBtn.textContent = "확인";
  document.querySelector(".pop-up-title").textContent = "할 일 추가하기";
});

popupBtn.addEventListener("click", (e) => {
  if (e.target.textContent === "확인") {
    todoList.push({
      title: addInput.value,
      isFinished: false,
      order: listItems.length,
    });

    const html = `<li class="list-item" data-order="${listItems.length}">
     <div class="list-title">${addInput.value}</div>
    <button class="list-delete-btn"></button><button class="list-edit-btn"></button></li>`;
    listContainer.insertAdjacentHTML("beforeend", html);
  } else if (e.target.textContent === "수정") {
    selectList.children[0].textContent = addInput.value;
  }

  popupBox.classList.remove("show-pop-up");
});

listContainer.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("list-delete-btn")) {
    console.log(123);
    const list = e.target.parentNode;
    const deleteOrder = list.dataset.order;
    list.remove();
    todoList.splice(deleteOrder, 1);
  }

  if (e.target.classList.contains("list-edit-btn")) {
    console.log(1);
    popupBox.classList.add("show-pop-up");
    document.querySelector(".pop-up-title").textContent = "할 일 수정하기";
    const list = e.target.parentNode;
    selectList = list;
    popupBtn.textContent = "수정";
  }
});
