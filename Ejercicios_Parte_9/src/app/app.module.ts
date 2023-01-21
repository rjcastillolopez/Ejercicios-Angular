import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { BooksComponent } from "./pages/books/books.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./pages/about/about.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormsModule } from "@angular/forms";

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ContactComponent,
      BooksComponent,
      NotFoundComponent,
      BlogComponent,
      NavbarComponent,
      FooterComponent,
      AboutComponent,
      HeaderComponent,
   ],
   imports: [BrowserModule, AppRoutingModule, FormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
