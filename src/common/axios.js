import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8080"
});

export function listAllBooksToHire() {
  return new Promise((resolve, reject) => {
    instance.get("/library/books/find/page")
      .then(({data}) => {
        if (data.content.length === 0) resolve([]);
        const formattedList = data.content.map(book =>
          ({
            id: book.id,
            título: book.name,
            edição: book.edition,
            autor: book.author,
            quantidade: book.amount,
            categoria: book.category.name,
            status: book.bookStatus
          }));

        resolve(formattedList);
      })
      .catch(err => {
        reject(err);
      });
  })
};

export function listAllBooksToHireSearch(queryParam, content) {
  return new Promise((resolve, reject) => {
    instance.get(`/library/books?${queryParam}=${content}`)
      .then(({data}) => {
        if (data.length === 0) resolve([]);
        const formattedList = data.map(book =>
          ({
            id: book.id,
            título: book.name,
            edição: book.edition,
            autor: book.author,
            quantidade: book.amount,
            categoria: book.category,
            status: book.bookStatus
          }));

        resolve(formattedList);
      })
      .catch(err => {
        reject(err);
      });
  })
};

export function updateBook(book) {
  return new Promise((resolve, reject) => {
    instance.put(`/library/books/${book.id}`, { ...book })
      .then( _ => { resolve(); })
      .catch(err => {
        reject(err);
      });
  })
};

export default instance;
