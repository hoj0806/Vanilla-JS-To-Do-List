// selectors

// popup
const popupWrapper = document.querySelector(".pop-up-wrapper");
const popupBox = document.querySelector(".pop-up-box");
const popupBtn = document.querySelector(".pop-up-confirm-btn");
const popupTitle = document.querySelector(".pop-up-title");
const editAndAddPopup = document.querySelector(".pop-up-edit-and-add");
const readPopup = document.querySelector(".pop-up-read");

const listAddBtn = document.querySelector(".feature-box__add-button-box");
const addInput = document.querySelector(".add-input");
const listContainer = document.querySelector(".todo-list-container");

let selectList;

// Event handler

// list add button event
listAddBtn.addEventListener("click", () => {
  popupWrapper.classList.add("show-pop-up");
  popupBtn.textContent = "추가";
  popupTitle.textContent = "할 일 추가하기";
  editAndAddPopup.classList.remove("hide-pop-up");
  readPopup.classList.add("hide-pop-up");
});

// popup confirm button event
popupBtn.addEventListener("click", (e) => {
  if (e.target.textContent === "추가") {
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
  // list delete button
  if (e.target.classList.contains("list-delete-btn")) {
    const deleteItem = e.target.closest(".list-item");
    deleteItem.remove();
  }

  if (e.target.classList.contains("list-edit-btn")) {
    popupWrapper.classList.add("show-pop-up");
    popupTitle.textContent = "할 일 수정하기";
    popupBtn.textContent = "수정";
    const editItem = e.target.closest(".list-item");
    const listTitle = editItem.children[0].textContent;
    addInput.value = listTitle;
    selectList = editItem;
  }

  if (e.target.classList.contains("list-title")) {
    popupWrapper.classList.add("show-pop-up");
    editAndAddPopup.classList.add("hide-pop-up");
    readPopup.classList.remove("hide-pop-up");
  }
});
