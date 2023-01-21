import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { BooksComponent } from "./pages/books/books.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
   {
      path: "",
      pathMatch: "full",
      redirectTo: "/home",
   },
   {
      path: "home",
      component: HomeComponent,
   },
   {
      path: "about",
      component: AboutComponent,
   },
   {
      path: "blog",
      component: BlogComponent,
   },
   {
      path: "books",
      component: BooksComponent,
   },
   {
      path: "books/:id",
      component: BooksComponent,
   },
   {
      path: "books/genre/:genre",
      component: BooksComponent,
   },
   {
      path: "contact",
      component: ContactComponent,
   },
   {
      path: "**",
      component: NotFoundComponent,
   },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
