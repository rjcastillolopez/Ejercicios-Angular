import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule } from "@angular/forms";
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
   declarations: [AppComponent, LoginComponent, HomeComponent, NavbarComponent, NotFoundComponent],
   imports: [BrowserModule, AppRoutingModule, FormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
