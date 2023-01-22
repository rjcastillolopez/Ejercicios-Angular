import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

interface User {
   username: string;
   password: string;
}

@Component({
   selector: "app-login",
   templateUrl: "./login.component.html",
   styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
   user: User = {
      username: "",
      password: "",
   };

   constructor(private authService: AuthService, private router: Router) {}

   ngOnInit(): void {}

   login() {
      if (this.authService.login(this.user.username, this.user.password)) {
         this.router.navigate(["/home"]);
      } else {
         alert("Invalid credentials");
      }
   }

   onSubmit(form: NgForm) {
      if (form.invalid) {
         return;
      }
      this.login();
   }
}
