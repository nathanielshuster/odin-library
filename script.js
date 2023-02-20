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
  card.dataset.index = myLibrary.indexOf(book)

  // create data elements
  const title = document.createElement("h3")
  title.classList.add("title")
  title.textContent += book.title
  const author = document.createElement("p")
  author.classList.add("author")
  author.textContent += `By: ${book.author}`

  // create data element div
  const dataDiv = document.createElement("div")
  dataDiv.classList.add("data-div")

  //add data to data div
  dataDiv.appendChild(title)
  dataDiv.appendChild(author)

  // create card buttons
  const readButton = createReadButton(book)

  const removeButton = document.createElement("button")
  removeButton.textContent = "Delete"
  removeButton.classList.add("delete-button")
  removeButton.onclick = removeBook

  // create card button div
  const buttonDiv = document.createElement("div")
  buttonDiv.classList.add("button-div")

  // add buttons to button div
  buttonDiv.appendChild(readButton)
  buttonDiv.appendChild(removeButton)

  // add elements to card
  card.appendChild(dataDiv)
  card.appendChild(buttonDiv)

  // add card to card div
  container.appendChild(card)
}

function removeBook(e) {
  let index = e.target.parentElement.parentElement.dataset.index
  myLibrary.splice(Number(index), 1)
  let card = document.querySelector(`[data-index = '${index}']`)
  card.remove()
}

function updateStatus(e) {
  let index = e.target.parentElement.parentElement.dataset.index
  let book = myLibrary[Number(index)]

  let button = e.target
  if (e.target.textContent === "Read") {
    button.textContent = "Unread"
    book.read = "Unread"
  } else {
    button.textContent = "Read"
    book.read = "Read"
  }
}

function createReadButton(book) {
  const button = document.createElement("button")
  button.classList.add("read-button")
  button.onclick = updateStatus

  if (book.read === "Read") {
    button.textContent = "Read"
    return button
  } else {
    button.textContent = "Unread"
    return button
  }
}