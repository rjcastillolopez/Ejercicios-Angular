import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./components/users/users.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JsonInterceptor } from "./interceptors/json.interceptor";
import { FormsModule } from "@angular/forms";

@NgModule({
   declarations: [AppComponent, UsersComponent],
   imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
   providers: [
      {
         provide: HTTP_INTERCEPTORS,
         useClass: JsonInterceptor,
         multi: true,
      },
   ],
   bootstrap: [AppComponent],
})
export class AppModule {}
