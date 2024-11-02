const selectors = {
  // task control
  listAddBtn: document.querySelector(".task-controls__add"),
  searchInput: document.querySelector(".task-controls__search-input"),

  // list main
  todoList: document.querySelector(".list"),
  listItems: document.querySelectorAll(".list__item"),
  // popup
  popup: document.querySelector(".popup"),

  // popup edit and add
  popupEditAndAdd: document.querySelector(".popup__editAndAdd"),
  editAndAddInput: document.querySelector(".popup__editAndAdd__add__input"),
  popupEditAndAddBtn: document.querySelector(".popup__editAndAdd__button"),
  popupEditAndAddTitle: document.querySelector(".popup__editAndAdd__title"),

  // popup read
  popupRead: document.querySelector(".popup__read"),
  popupReadBtn: document.querySelector(".popup__read__button"),
  memoContent: document.querySelector(".popup__read__memo__content"),
  memoInput: document.querySelector(".popup__read__memo__input"),
  memoBtn: document.querySelector(".popup__read__memo__button"),
  hasgTagBox: document.querySelector(".popup__hashTag__content"),
  hasgTagInput: document.querySelector(".popup__hashTag__input"),

  popupBox: document.querySelector(".pop-up-box"),
  popupBtn: document.querySelector(".pop-up-confirm-btn"),
  popupTitle: document.querySelector(".pop-up-title"),
  editAndAddPopup: document.querySelector(".pop-up-edit-and-add"),
  readPopup: document.querySelector(".pop-up-read"),
  popupReadTitle: document.querySelector(".pop-up-read-title"),
  popupReadConfirmBtn: document.querySelector(".pop-up-confirm-btn-read"),
};

export default selectors;
