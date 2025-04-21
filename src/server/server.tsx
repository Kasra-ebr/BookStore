import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001/',
});

export async function getBooks() {
  const { data } = await client('/books');
  return data
}



export async function getBookById(id : string | null) {
  const { data } = await client(`/books/${id}`);
  return data
}

