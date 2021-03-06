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

export function insertClient(client) {
  return new Promise((resolve, reject) => {
    instance.post('/library/clients', client)
      .then(_ => resolve())
      .catch(e => reject(e))
  })
}

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

export function deleteLoan(loan) {
  return new Promise((resolve, reject) => {
    instance.delete(`/library/loans/${loan.id}`)
      .then(_ => resolve())
      .catch(err => reject(err))
  })
}

export function renewLoan(loan) {
  return new Promise((resolve, reject) => {
    instance.put(`/library/loans/renew/${loan.id}`, { ...loan })
      .then( _ => { resolve(); })
      .catch(err => {
        reject(err);
      });
  })
};

export function returnLoan(loan) {
  return new Promise((resolve, reject) => {
    instance.put(`/library/loans/return/${loan.id}`, { ...loan })
      .then( _ => { resolve(); })
      .catch(err => {
        reject(err);
      });
  })
};

export function listAllLoansToHireSearch(queryParam, content) {
  return new Promise((resolve, reject) => {
    instance.get(`/library/loans?${queryParam}=${content}`)
      .then(({data}) => {
        if (data.length === 0) resolve([]);
        const formattedList = data.map(loan =>
          ({
            id: loan.id,
            cliente : loan.client.name,
            livro : loan.book.name,
            emprestimo : loan.loanDay,
            retorno : loan.loanReturnDay,
            status: loan.loanStatus,
            idClient: loan.client.id,
            idBook: loan.book.id
          }));
        resolve(formattedList);
      })
      .catch(err => {
        reject(err);
      });
  })
};

export function listAllUsers(queryParam, content) {
  return new Promise((resolve, reject) => {
    instance.get(`/library/user?${queryParam}=${content}`)
      .then(({data}) => {
        if (data.length === 0) resolve([]);
        const formattedList = data.map(user =>
          ({
            id: user.id,
            nome : user.nome,
            email : user.email,
            senha : user.senha,
          }));
        resolve(formattedList);
      })
      .catch(err => {
        reject(err);
      });
  })
};

export function updateUsuario(usuario) {
  return new Promise((resolve, reject) => {
    instance.put(`/library/user/${usuario.id}`, { ...usuario })
      .then( _ => { resolve(); })
      .catch(err => {
        reject(err);
      });
  })
};

export function insertUsuario(usuario) {
  return new Promise((resolve, reject) => {
    instance.post('/library/user', usuario)
      .then(_ => resolve())
      .catch(e => reject(e))
  })
}

export function insertLoan(loan) {
  return new Promise((resolve, reject) => {
    instance.post(`/library/loans`, { ...loan })
      .then( _ => { resolve(); })
      .catch(err => {
        reject(err);
      });
  })
};

export function deleteUser(user) {
  return new Promise((resolve, reject) => {
    instance.delete(`/library/user/${user.id}`)
      .then(_ => resolve())
      .catch(err => reject(err))
  })
}

export default instance;
