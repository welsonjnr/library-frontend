import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8080"
});

export function listAllBooksToHire() {
  return new Promise((resolve, reject) => {
    instance.get("/library/books/find/page")
      .then( ({ data }) => {
        if (data.content.length === 0) resolve([]);
        const formattedList = data.content.map(book =>
          ({
          id: book.id,
          título: book.name,
          edição: book.edition,
          autor: book.author,
          quantidade: book.amount,
          status: book.category.name
        }));

        resolve(formattedList);
      })
      .catch(err => {
        reject(err);
      });

  //   instance.get("/library/books/find/page")
  //     .then(({data}) => resolve(data))
  //     .catch(err => reject(err));
  })
};

export default instance;
