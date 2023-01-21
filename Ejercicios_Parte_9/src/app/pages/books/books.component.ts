import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Book } from "../../models/book.model";
import { BooksService } from "../../services/books.service";

@Component({
   selector: "app-books",
   templateUrl: "./books.component.html",
   styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
   books?: Array<Book> | any;
   genres?: string[] | any;
   search: string = "";
   selectedBook?: Book | any = null;

   constructor(
      private booksService: BooksService,
      private route: ActivatedRoute
   ) {
      this.books = this.getBooks();
      this.genres = this.getGenres();
   }

   ngOnInit(): void {
      this.route.paramMap.subscribe((paramMap) => {
         const genre = paramMap.get("genre");
         if (genre) {
            this.getBooksByGenre(genre);
         }
         const id = paramMap.get("id");
         if (id) {
            this.getBook(+id);
         }
      });
   }

   getBooks() {
      return this.booksService.getBooks(12); // get 12 books only
   }

   getGenres() {
      return this.booksService.getGenres();
   }

   getBooksBySearch(search: string) {
      this.books = this.booksService.getBooksBySearch(search);
   }

   getBooksByGenre(genre: string) {
      this.books = this.booksService.getBooksByGenre(genre);
   }

   getBook(book_id: number) {
      if (!this.books) {
         return;
      }
      this.books.find((book: Book) => {
         if (book.id === book_id) {
            this.selectedBook = book;
         }
      });
   }
}
