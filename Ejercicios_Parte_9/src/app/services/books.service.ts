import { Injectable } from "@angular/core";
import books_json from "../books.json";
import { Book } from "../models/book.model";

@Injectable({
   providedIn: "root",
})
export class BooksService {
   constructor() {}

   getBooks(limit?: number): Array<Book> | any {
      if (limit) {
         return books_json.books.slice(0, limit);
      }
      return books_json.books;
   }

   getGenres(): string[] {
      let genres: string[] = [];
      books_json.books.forEach((book: Book) => {
         if (!genres.includes(book.genre)) {
            genres.push(book.genre);
         }
      });
      return genres;
   }

   getBooksByGenre(genre: string): Array<Book> | any {
      return books_json.books.filter((book: Book) => book.genre === genre);
   }

   getBookById(id: number): Book | any {
      return books_json.books.find((book: Book) => book.id === id);
   }

   getBooksBySearch(search: string): Array<Book> | any {
      const books = books_json.books.filter((book: Book) => {
         return (
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
         );
      });
      return books;
   }
}
