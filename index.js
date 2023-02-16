"use strict";

const newItem = document.querySelector(".new-item");
const btnSubmit = document.querySelector(".btn-submit");
const btnClearBig = document.querySelector(".btn-clear");
const btnClearSmall = document.querySelector(".btn-small");
const listItems = document.querySelector(".list-items");

btnSubmit.addEventListener("click", () => {
  const listItem = `<li class='item'>
          <p class='text'>${newItem.value}</p>
          <button class="btn btn-small-check">✔</button>
          <button class="btn btn-small">✖</button>
       </li>
      `;
  if (newItem.value !== "") {
    listItems.insertAdjacentHTML("afterbegin", listItem);
  } else {
    alert("Insert an item!");
  }
  newItem.value = "";

  function deleteItem(e) {
    if (e.target.innerHTML === "✖") e.target.parentNode.remove();
  }
  listItems.addEventListener("click", deleteItem);
});

function checkItem(e) {
  const text = e.target.parentNode.querySelector(".text");
  if (e.target.innerHTML === "✔") text.classList.toggle("text-crossed");
}

listItems.addEventListener("click", checkItem);

btnClearBig.addEventListener("click", () => {
  listItems.innerHTML = "";
});
