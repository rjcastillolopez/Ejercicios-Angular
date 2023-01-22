import { Injectable } from "@angular/core";
import {
   HttpRequest,
   HttpHandler,
   HttpEvent,
   HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class JsonInterceptor implements HttpInterceptor {
   constructor() {}

   intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
   ): Observable<HttpEvent<unknown>> {
      const jsonRequest = request.clone({
         setHeaders: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
      });
      return next.handle(jsonRequest);
   }
}
