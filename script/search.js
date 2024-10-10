function searchBooks() {
    const query = document.getElementById('search').value.toLowerCase();
    const results = document.getElementById('results');
    results.innerHTML = '';
    let count = 0;

    bookList.forEach(book => {
        if (count < 5 && (book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query))) {
            const li = document.createElement('li');
            li.textContent = `${book.title} by ${book.author}`;
            li.onclick = () => showBookInfo(book);
            results.appendChild(li);
            count++;
        }
    });

    results.style.display = query && count > 0 ? 'block' : 'none';
}

function showResults() {
    const results = document.getElementById('results');
    results.style.display = 'block';
}

function showBookInfo(book) {
    document.getElementById('focusImg').src = book.img;
    document.querySelector('.bookTitle').textContent = book.title;
    document.querySelector('.bookAuthor').textContent = book.author;
    document.querySelector('.bookGenre').textContent = `Thể loại: ${book.genre}`;
    document.querySelector('.bookPrice').textContent = `Giá tiền: ${book.price}`;
    document.getElementById('booksInfo').style.display = 'flex';
}
