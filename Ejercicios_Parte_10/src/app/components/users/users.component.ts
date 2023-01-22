import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
   selector: "app-users",
   templateUrl: "./users.component.html",
   styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
   users?: any[];
   selectedUser?: any;

   constructor(private http: HttpClient) {}

   ngOnInit(): void {}

   getUsers() {
      this.http
         .get("https://jsonplaceholder.typicode.com/users")
         .subscribe((data) => {
            this.users = data as any[];
         });
   }
}
