let myLibrary = [
  {
    title: "No Longer Human",
    author: "Osamu Dazai",
    read: "Yes"
  }
];

function Book(title, author, read) {
  this.title = title
  this.author = author
  this.read = "Yes"
  
  if (read === "No") {
    this.read = "No"
  }
}

function addBookToLibrary(input) {
  
}

function displayBooks() {
  const cardDiv = document.querySelector(".cards");

  myLibrary.forEach(book => {
    // create new card
    const card = document.createElement("div")

    // create data elements
    const title = document.createElement("h3")
    title.textContent += book.title
    const author = document.createElement("p")
    author.textContent += book.author
    const read = document.createElement("p")
    read.textContent += book.read

    // add data elements to card
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(read)

    // add card to card div
    cardDiv.appendChild(card)
  });
}

displayBooks();