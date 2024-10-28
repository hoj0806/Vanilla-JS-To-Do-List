// selectors

// popup
const popupWrapper = document.querySelector(".pop-up-wrapper");
const popupBox = document.querySelector(".pop-up-box");
const popupBtn = document.querySelector(".pop-up-confirm-btn");
const popupTitle = document.querySelector(".pop-up-title");

const listAddBtn = document.querySelector(".feature-box__add-button-box");
const addInput = document.querySelector(".add-input");
const listContainer = document.querySelector(".todo-list-container");
const listItems = document.querySelectorAll(".list-item");
const listDeleteBtns = document.querySelectorAll(".list-delete-btn");

let selectList;

// Event handler

// list add button event
listAddBtn.addEventListener("click", () => {
  popupWrapper.classList.add("show-pop-up");
  popupBtn.textContent = "확인";
  popupTitle.textContent = "할 일 추가하기";
});

// popup confirm button event
popupBtn.addEventListener("click", (e) => {
  if (e.target.textContent === "확인") {
    const html = `<li class="list-item">
              <div class="list-title">${addInput.value}</div>
              <div class="list-button-box">
                <button class="list-edit-btn">
                  <img src="/icons/listEditIcon.svg" class="list-edit-icon"/>
                </button>
                <button class="list-delete-btn">
                  <img src="/icons/listDeleteIcon.svg" class="list-delete-icon"/>
                </button>
              </div>
            </li>`;
    listContainer.insertAdjacentHTML("beforeend", html);
  } else if (e.target.textContent === "수정") {
    selectList.children[0].textContent = addInput.value;
  }

  popupWrapper.classList.remove("show-pop-up");
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
