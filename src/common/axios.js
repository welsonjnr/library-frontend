import axios from 'axios';

const instance = axios.create({
  baseURL: "https://studium-library.herokuapp.com/"
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

export function insertBook(book) {
  return new Promise((resolve, reject) => {
    instance.post('/library/books', book)
      .then(_ => resolve())
      .catch(e => reject(e))
  })
}

export function updateBook(book) {
  return new Promise((resolve, reject) => {
    instance.put(`/library/books/${book.id}`, { ...book })
      .then( _ => { resolve(); })
      .catch(err => {
        reject(err);
      });
  })
};

export function deleteBook(book) {
  return new Promise((resolve, reject) => {
    instance.delete(`/library/books/${book.id}`)
      .then(_ => resolve())
      .catch(err => reject(err))
  })
}

export function listAllClientsToHireSearch(queryParam, content) {
  return new Promise((resolve, reject) => {
    instance.get(`/library/clients?${queryParam}=${content}`)
      .then(({data}) => {
        if (data.length === 0) resolve([]);
        const formattedList = data.map(client =>
          ({
            id: client.id,
            nome: client.name,
            cpf: client.cpf,
            email: client.email,
            status: client.status,
            curso: client.course,
            instituição: client.institution,
            periodo: client.period
          }));

        resolve(formattedList);
      })
      .catch(err => {
        reject(err);
      });
  })
};

export function updateClient(client) {
  return new Promise((resolve, reject) => {
    instance.put(`/library/clients/${client.id}`, { ...client })
      .then( _ => { resolve(); })
      .catch(err => {
        reject(err);
      });
  })
};

export function deleteClient(client) {
  return new Promise((resolve, reject) => {
    instance.delete(`/library/clients/${client.id}`)
      .then(_ => resolve())
      .catch(err => reject(err))
  })
}

export default instance;
