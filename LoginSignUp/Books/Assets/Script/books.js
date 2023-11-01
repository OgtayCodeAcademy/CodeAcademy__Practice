let BASE_URL = "http://localhost:3000/books";
let cards_wrapper = document.querySelector(".cards-wrapper");
let loader = document.querySelector(".spinner-border");
let basket_counter = document.getElementById("basket-counter");

let editName = document.getElementById("edit-name");
let editPrice = document.getElementById("edit-price");
let editGenre = document.getElementById("edit-genre");
let editPageCount = document.getElementById("edit-pageCount");
let editImage = document.getElementById("edit-image");
let editAuthor = document.getElementById("edit-author");
let editYear = document.getElementById("edit-year");
let editDescription = document.getElementById("edit-description");

if (!localStorage.getItem('log-in') == false) {
  document.addEventListener("DOMContentLoaded", () => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((books) => {
        books.forEach((book) => {
          loader.classList.add("d-none");
          cards_wrapper.innerHTML += `
          <div class="card" style="width: 18rem;">
                  <div class="card-image" style="background-image: url(${book.coverImage}); width: 100%; height: 200px; 200px; background-size: cover;">
                  </div>
                  <div class="card-body" style="height: 350px;">
                      <h3 id="${book.id}" class="card-title books-name" style="cursor: pointer;">${book.name}</h3>
                      <h6 class="card-title">${book.author}</h6>
                      <div class="book-description" style="height: 150px; overflow-y: hidden;""><p class="card-text">${book.description}</p></div>
                      <a id="${book.id}" href="#" class="btn btn-danger delete">Delete</a>
                      <button data-price="${book.price}" data-pageCount="${book.pageCount}" data-year="${book.year}" data-genre="${book.genre}" data-name="${book.name}" data-image="${book.coverImage}" data-author="${book.author}" data-description="${book.description}" type="button" class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                      <button class="btn btn-primary add-cart"><i class="fa-solid fa-cart-arrow-down"></i></button>
                  </div>
          </div>`;
          const add_cart = document.querySelectorAll(".add-cart");
          add_cart.forEach((button) => {
            button.addEventListener("click", function () {
              fetch(
                `${BASE_URL}/${this.previousElementSibling.previousElementSibling.id}`
              )
                .then((response) => response.json())
                .then((book) => {
                  if (JSON.parse(localStorage.getItem("cart")) === null) {
                    book.quantity = 1;
                    localStorage.setItem("cart", JSON.stringify([book]));
                    basket_counter.textContent = JSON.parse(localStorage.getItem("cart")).length;
                  } else {
                    let array = JSON.parse(localStorage.getItem("cart"));
                    let found = array.find((x) => x.id === book.id);
                    if (found) {
                      found.quantity++;
                      localStorage.setItem("cart", JSON.stringify([...array]));
                    } else {
                      book.quantity = 1;
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...array, book])
                      );
                      basket_counter.textContent = JSON.parse(localStorage.getItem("cart")).length;
                    }
                  }
                });
            });
          });
          const learn_buttons = document.querySelectorAll(".books-name");
          learn_buttons.forEach((button) => {
            button.addEventListener("click", function () {
              fetch(`${BASE_URL}/${this.id}`)
                .then((response) => response.json())
                .then((book) => {
                  Swal.fire({
                    title: `${book.name}`,
                    text: `${book.author}`,
                    footer: `${book.description}`,
                    imageUrl: `${book.coverImage}`,
                    showCloseButton: true,
                  });
                });
            });
          });
          const delete_buttons = document.querySelectorAll(".delete");
          delete_buttons.forEach((button) => {
            button.addEventListener("click", function () {
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.parentElement.parentElement.remove();
                  fetch(`${BASE_URL}/${this.id}`, {
                    method: "DELETE",
                  });
                  Swal.fire("Deleted!", "Book has been deleted.", "success");
                }
              });
            });
          });
          const edit_buttons = document.querySelectorAll(".edit");
          edit_buttons.forEach((button) => {
            button.addEventListener("click", function (e) {
              e.preventDefault();
              let id = this.previousElementSibling.id;
              let price = this.getAttribute("data-price");
              let name = this.getAttribute("data-name");
              let genre = this.getAttribute("data-genre");
              let pageCount = this.getAttribute("data-pageCount");
              let image = this.getAttribute("data-image");
              let author = this.getAttribute("data-author");
              let year = this.getAttribute("data-year");
              let description = this.getAttribute("data-description");
  
              editName.value = name;
              editPrice.value = price;
              editGenre.value = genre;
              editPageCount.value = pageCount;
              editImage.value = image;
              editAuthor.value = author;
              editYear.value = year;
              editDescription.value = description;
  
              let submit = document.querySelector(".edit-submit-button");
              submit.addEventListener("click", () => {
                fetch(`${BASE_URL}/${this.previousElementSibling.id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify({
                    id: id,
                    price: editPrice.value,
                    name: editName.value,
                    genre: editGenre.value,
                    pageCount: editPageCount.value,
                    coverImage: editImage.value,
                    author: editAuthor.value,
                    year: editYear.value,
                    description: editDescription.value,
                  }),
                });
              });
            });
          });
        });
      });
  });
}else{
  document.body.innerHTML +=`<h1 style="color: red;font-size: 30px;text-align: center;margin-top: 50px;">You need to login first</h1>`
}


