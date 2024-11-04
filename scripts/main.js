import selectors from "./selectors.js";

let selectList;
let addListTitle;
let mode;
let memoContent = "";

// Date
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, "0");
const day = today.getDate().toString().padStart(2, "0");
const formattedDate = `${year}/${month}/${day}`;

// fuction

const togglePopup = (popup) => {
  selectors.popup.classList.toggle("show-content");
  popup.classList.toggle("show-content");
};

const addList = () => {
  const listItemHTML = `<li class="list__item" data-date=${formattedDate}>
  <div class="list__item__title">${addListTitle}</div>
<div style="display: flex; flex-direction: column;">
<div class="list__item__date">${formattedDate}</div>
<div class="list__item__hashTag">해시태그가 없습니다</div>
</div>
  <div class="list__item__feature">
   <div class="list__item__featrue__check">체크</div>
    <button class="list__item__featrue__edit__button">
      <img src="/icons/listEditIcon.svg" class="list__item__featrue__edit__button__icon"/>
    </button>

    <button class="list__item__featrue__delete__button">
      <img src="/icons/listDeleteIcon.svg" class="list__item__featrue__delete__button__icon"/>
    </button>
  </div>
  </li>`;
  insertHTMLbeforeend(selectors.todoList, listItemHTML);
};

const editList = () => {
  selectList.children[0].textContent = selectors.editAndAddInput.value;
};

const insertHTMLbeforeend = (parent, html) => {
  parent.insertAdjacentHTML("beforeend", html);
};

const setReadAndEditPopupContent = (mode) => {
  if (mode === "add") {
    selectors.popupEditAndAddTitle.textContent = "할 일 추가하기";
    selectors.popupEditAndAddBtn.textContent = "추가";
  } else if (mode === "edit") {
    selectors.popupEditAndAddTitle.textContent = "할 일 수정하기";
    selectors.popupEditAndAddBtn.textContent = "수정";
  }
};

const addHashTag = (event) => {
  const listHagTagContainer = selectList.children[1].children[1];

  const html = ` <div class="list__item__hashTag__item">
  <div><img style="width: 1.4rem; height: 1.4rem; cursor: pointer;" src="/icons/hashTagDeleteIcon.svg" class="hashTag__delete__icon"></div>
  <div class="list__item__hashTag__item__title">#${event.target.value}</div>
</div>`;
  const listHashTagHtml = `<div class='list__item__hashTag__item'>#${event.target.value}</div>`;
  if (listHagTagContainer.textContent === "해시태그가 없습니다") {
    listHagTagContainer.textContent = "";
  }

  selectors.hashTagContent.insertAdjacentHTML("beforeend", html);
  listHagTagContainer.insertAdjacentHTML("beforeend", listHashTagHtml);

  event.target.value = "";
};
// Event handler

// <-----------task controls------------>

// list search
selectors.searchInput.addEventListener("input", (e) => {
  const searchInput = e.target.value;
  selectors.listItems.forEach((list) => {
    const title = list.children[0].textContent;
    if (!title.includes(searchInput)) {
      list.classList.add("hide-content");
    } else {
      list.classList.remove("hide-content");
    }
  });
});

// add list
selectors.listAddBtn.addEventListener("click", () => {
  mode = "add";
  togglePopup(selectors.popupEditAndAdd);
  setReadAndEditPopupContent(mode);
});

// <----------------popup---------------->

// popup edit and add
selectors.popupEditAndAddBtn.addEventListener("click", () => {
  if (mode === "add") {
    addList();
  } else if (mode === "edit") {
    editList();
  }
  togglePopup(selectors.popupEditAndAdd);
  selectors.editAndAddInput.value = "";
});

selectors.editAndAddInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (mode === "add") {
      addList();
    } else if (mode === "edit") {
      editList();
    }
    togglePopup(selectors.popupEditAndAdd);
    selectors.editAndAddInput.value = "";
  }
});

selectors.editAndAddInput.addEventListener("input", (e) => {
  addListTitle = e.target.value;
});

// popup read

selectors.memoBtn.addEventListener("click", (e) => {
  let memoBtnText = selectors.memoBtn.textContent;

  if (memoBtnText === "메모하기") {
    e.target.textContent = "확인";
    selectors.memoContent.textContent = "";
  } else if (memoBtnText === "확인") {
    e.target.textContent = "메모하기";
    selectList.dataset.memo = selectors.memoInput.value;
    selectors.memoContent.textContent = selectList.dataset.memo;
  }
  if (selectList.dataset.memo === undefined) {
    selectors.memoInput.value = "";
  } else {
    selectors.memoInput.value = selectList.dataset.memo;
  }
  selectors.memoInput.classList.toggle("show-content");
});

selectors.popupReadBtn.addEventListener("click", () => {
  selectors.memoInput.classList.remove("show-content");
  togglePopup(selectors.popupRead);
});
// list main
selectors.todoList.addEventListener("click", (e) => {
  const target = e.target;

  // delete list
  if (target.classList.contains("list__item__featrue__delete__button")) {
    const deleteItem = target.closest(".list__item");
    deleteItem.remove();
  } else if (target.classList.contains("list__item__featrue__edit__button")) {
    // edit list
    mode = "edit";
    togglePopup(selectors.popupEditAndAdd);
    setReadAndEditPopupContent(mode);
    selectList = e.target.closest(".list__item");
  } else if (target.classList.contains("list__item__title")) {
    // read list
    selectList = e.target.closest(".list__item");
    selectors.memoContent.textContent = selectList.dataset.memo;
    selectors.popupReadTitle.textContent = selectList.children[0].textContent;
    selectors.popupReadDate.textContent = selectList.dataset.date;
    togglePopup(selectors.popupRead);
  } else if (target.classList.contains("list__item__featrue__check")) {
    const select = target.closest(".list__item");
    if (target.textContent === "체크") {
      target.textContent = "체크취소";
      select.children[0].style.textDecoration = "line-through";
    } else {
      target.textContent = "체크";
      select.children[0].style.textDecoration = "none";
    }
    // console.log(selectTitle);
  }
});

selectors.hasgTagInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addHashTag(e);
  }
});

selectors.hashTagContent.addEventListener("click", (e) => {
  if (e.target.classList.contains("hashTag__delete__icon")) {
    const listHagTagContainer = selectList.children[1].children[1];

    if (selectors.hashTagContent.children.length === 1) {
      listHagTagContainer.textContent = "해시태그가 없습니다";
    }
    const popupHashTag = e.target.closest(".list__item__hashTag__item");
    const listHashTag = selectList.children[1].children[1].children;
    console.log(listHashTag);
    console.log(popupHashTag);
    [...listHashTag].forEach((hashTag) => {
      if (hashTag.textContent === popupHashTag.children[1].textContent) {
        hashTag.remove();
      }
    });
    popupHashTag.remove();
  }
});
// // list add button event
// listAddBtn.addEventListener("click", () => {
//   popupWrapper.classList.add("show-pop-up");
//   popupBtn.textContent = "추가";
//   popupTitle.textContent = "할 일 추가하기";
//   editAndAddPopup.classList.remove("hide-pop-up");
//   readPopup.classList.add("hide-pop-up");
// });

// // popup confirm button event
// popupBtn.addEventListener("click", (e) => {
//   if (e.target.textContent === "추가") {
//     const html = `<li class="list-item">
//               <div class="list-title">${editAndAddInput.value}</div>
//               <div class="list-button-box">
//                 <button class="list-edit-btn">
//                   <img src="/icons/listEditIcon.svg" class="list-edit-icon"/>
//                 </button>
//                 <button class="list-delete-btn">
//                   <img src="/icons/listDeleteIcon.svg" class="list-delete-icon"/>
//                 </button>
//               </div>
//             </li>`;
//     listContainer.insertAdjacentHTML("beforeend", html);
//   } else if (e.target.textContent === "수정") {
//     selectList.children[0].textContent = editAndAddInput.value;
//   }

//   popupWrapper.classList.remove("show-pop-up");
// });

// listContainer.addEventListener("click", (e) => {
//   // list delete button
//   if (e.target.classList.contains("list-delete-btn")) {
//     const deleteItem = e.target.closest(".list-item");
//     deleteItem.remove();
//   }

//   if (e.target.classList.contains("list-edit-btn")) {
//     popupWrapper.classList.add("show-pop-up");
//     popupTitle.textContent = "할 일 수정하기";
//     popupBtn.textContent = "수정";
//     const editItem = e.target.closest(".list-item");
//     const listTitle = editItem.children[0].textContent;
//     editAndAddInput.value = listTitle;
//     selectList = editItem;
//   }

//   if (e.target.classList.contains("list-title")) {
//     selectList = e.target;
//     memoContent.textContent = e.target.dataset.memo;
//     popupWrapper.classList.add("show-pop-up");
//     editAndAddPopup.classList.add("hide-pop-up");
//     readPopup.classList.remove("hide-pop-up");
//     popupReadTitle.textContent = e.target.textContent;
//   }
// });

// memoBtn.addEventListener("click", () => {
//   if (memoBtn.textContent === "확인") {
//     memoInput.classList.remove("show-pop-up");
//     memoBtn.textContent = "메모하기";
//     selectList.setAttribute("data-memo", memoInput.value);
//     memoContent.textContent = selectList.dataset.memo;
//     // console.log(memoInput.value);
//   } else {
//     memoBtn.textContent = "확인";
//     memoInput.classList.add("show-pop-up");
//   }
// });

// popupReadConfirmBtn.addEventListener("click", () => {
//   memoContent.textContent = "";
//   memoInput.value = "";
//   popupWrapper.classList.remove("show-pop-up");
// });

// hasgTagInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     console.log("해시태그추가");
//     const hashTag = `<div>${e.target.value}</div>`;
//     hasgTagBox.insertAdjacentHTML("beforeend", hashTag);
//     selectList.insertAdjacentHTML("beforeend", hashTag);
//     e.target.value = "";
//   }
// });

// // search input fuction

// const listItems = document.querySelectorAll(".list-item");

// searchInput.addEventListener("input", (e) => {
//   const inputValue = e.target.value;

//   listItems.forEach((element) => {
//     if (!element.innerHTML.includes(inputValue)) {
//       element.classList.add("hide-pop-up");
//     } else {
//       element.classList.remove("hide-pop-up");
//     }
//   });
// });
