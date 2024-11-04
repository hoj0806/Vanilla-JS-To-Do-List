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
  popupReadTitle: document.querySelector(".popup__read__title"),
  popupReadDate: document.querySelector(".popup__read__date"),
  memoContent: document.querySelector(".popup__read__memo__content"),
  memoInput: document.querySelector(".popup__read__memo__input"),
  memoBtn: document.querySelector(".popup__read__memo__button"),

  hasgTagBox: document.querySelector(".popup__hashTag__content"),
  hasgTagInput: document.querySelector(".popup__hashTag__input"),
  hashTagDeleteIcon: document.querySelector(".hashTag__delete__icon"),
  hashTagContent: document.querySelector(".popup__hashTag__content"),
};

export default selectors;
