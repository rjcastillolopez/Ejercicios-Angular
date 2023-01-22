import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
   providedIn: "root",
})
export class AuthService {
   private testUser: User = {
      firstName: "John",
      lastName: "Doe",
      username: "test",
      email: "test@gmail.com",
      password: "password",
   };

   constructor() {}

   login(email: string, password: string) {
      if (
         email === this.testUser.email &&
         password === this.testUser.password
      ) {
         localStorage.setItem("isLoggedIn", "true");
         return true;
      }
      return false;
   }

   logout() {
      localStorage.removeItem("isLoggedIn");
   }

   isLoggedIn() {
      return localStorage.getItem("isLoggedIn") === "true";
   }

   getCurrentUser() {
      return this.testUser;
   }
}
