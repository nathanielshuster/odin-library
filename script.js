let myLibrary = [];

function Book(book) {
  this.title = book.title
  this.author = book.author
  this.read = book.read
}

document.addEventListener('submit', function(e) {
  e.preventDefault()
  const newBookTitle = document.querySelector('#title').value
  const newBookAuthor = document.querySelector('#author').value
  const newBookStatus = document.querySelector('#status').value

  const newBook = {
    title: newBookTitle,
    author: newBookAuthor,
    read: newBookStatus
  }

  addBookToLibrary(newBook)
});

function addBookToLibrary(book) {
  let newBook = new Book(book)
  myLibrary.push(newBook)
  
  displayBook(newBook)
}

function displayBook(book) {
  const container = document.querySelector(".main");

  // create new card
  const card = document.createElement("div")
  card.classList.add("card")

  // create data elements
  const title = document.createElement("h3")
  title.classList.add("title")
  title.textContent += book.title
  const author = document.createElement("p")
  author.classList.add("author")
  author.textContent += book.author
  const status = document.createElement("p")
  status.classList.add("status")
  status.textContent += book.read

  // add data elements to card
  card.appendChild(title)
  card.appendChild(author)
  card.appendChild(status)

  // add card to card div
  container.appendChild(card)
}