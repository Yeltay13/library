const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function AddBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
function displayBooks() {
  const bookshelf = document.getElementById("bookshelf");
  bookshelf.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", index);

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
    `;

    bookshelf.appendChild(bookCard);
  });
}

displayBooks();

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
function toggleReadStatus(index) {
  myLibrary[index].toggleRead();
  displayBooks();
}
document
  .getElementById("new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    AddBookToLibrary(title, author, pages, read);
    displayBooks();
    this.reset();
  });

// Initial display of books
displayBooks();
