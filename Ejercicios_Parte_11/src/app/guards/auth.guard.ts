import { Injectable } from "@angular/core";
import {
   ActivatedRouteSnapshot,
   CanActivate,
   RouterStateSnapshot,
   UrlTree,
} from "@angular/router";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { Observable } from "rxjs";

@Injectable({
   providedIn: "root",
})
export class AuthGuard implements CanActivate {
   constructor(private authService: AuthService, private router: Router) {}

   canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      console.log(this.authService.isLoggedIn());
      if (!this.authService.isLoggedIn()) {
         alert("You are not logged in");
         return this.router.navigate(["/login"]).then(() => false);
      }
      return true;
   }
}
