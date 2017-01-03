import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";

 @Injectable()
export  class CanActivateCompanyEdit implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
 
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
      console.log(route.params);
      return true;
    }
  }