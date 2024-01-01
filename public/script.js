const books = [
  { title: 'AWAKENING THE THIRD EYE', author: 'Samuel Sagan', img: 'assets/img1.jpg' },
  { title: 'MODERN SPACES', author: 'Nicolas Grospierre', img: 'assets/img2.jpg' },
  { title: 'THE ALCHEMIST', author: 'Paulo Coelho', img: 'assets/img5.jpg' },
  { title: 'THINK AND GROW RICH', author: 'Napoleon Hill', img: 'assets/img6.jpg' },
  { title: '1984', author: 'George Orwell', img: 'assets/img4.jpg' },
  { title: 'Brave New World', author: 'Aldous Huxley', img: 'assets/img7.jpeg' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', img: 'assets/img8.jpg' },
  { title: '1984', author: 'George Orwell', img: 'assets/img3.jpg' },
  { title: 'Brave New World', author: 'Aldous Huxley', img: 'assets/img3.jpg' },
  { title: '1984', author: 'George Orwell', img: 'assets/img2.jpg' },
  { title: 'Brave New World', author: 'Aldous Huxley', img: 'assets/img3.jpg' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', img: 'assets/img1.jpg' }
];


const bookShelf = document.querySelector('#book-shelf');

function displayBooks() {
  books.forEach((book) => {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.innerHTML = `
        <img src="${book.img}" alt="${book.title}">
        <h2>${book.title}</h2>
        <p>by ${book.author}</p>
      `;
    bookShelf.appendChild(card);
  });
}
displayBooks();
// Get all the book titles
const titles = document.querySelectorAll('.book-card h3');

// Add a click event listener to each title
titles.forEach(title => {
  title.addEventListener('click', () => {
    // Find the description element for this book
    const description = title.nextElementSibling;

    // Toggle the "show" class on the description element
    description.classList.toggle('show');
  });
});

// Get the cart and the close button
const cart = document.querySelector('.cart');
const closeButton = cart.querySelector('.close-button');

// Add a click event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the cart
  cart.style.display = 'none';
});

//   const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', filterBooks);


function filterBooks() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();

  const books = document.querySelectorAll('.book-card');
  books.forEach(book => {
    const title = book.querySelector('h2').textContent.toLowerCase();
    const author = book.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
    const description = book.querySelector('p:nth-of-type(3)').textContent.toLowerCase();

    if (title.includes(searchTerm) || author.includes(searchTerm) || description.includes(searchTerm)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Get all of the book cards on the page
const bookCards = document.querySelectorAll(".book-card");

// Add an event listener to the search button
searchButton.addEventListener("click", () => {
  // Get the user's search input
  const searchQuery = searchInput.value.toLowerCase();

  // Loop through each book card
  bookCards.forEach((bookCard) => {
    // Get the book's title and author
    const title = bookCard.querySelector("h2").textContent.toLowerCase();
    const author = bookCard.querySelector("p:first-of-type").textContent.toLowerCase();

    // Check if the search query is in the title or author
    if (title.includes(searchQuery) || author.includes(searchQuery)) {
      // Show the book card
      bookCard.style.display = "block";
    } else {
      // Hide the book card
      bookCard.style.display = "none";
    }
  });
});
const addBookBtn = document.getElementById('add-book-btn');
const addBookModal = document.getElementById('add-book-modal');
const closeBtn = document.getElementsByClassName('close-button')[0];

addBookBtn.addEventListener('click', () => {
  addBookModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  addBookModal.style.display = 'none';
});
