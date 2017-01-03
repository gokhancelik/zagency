import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";

@Injectable()
export class CanActivateCompanyEdit implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    this.authService.getUserInfo().take(1).do(allowed => {
      console.log(allowed)
    });
    return this.authService.getUserInfo()
      .map(authInfo => authInfo[0] && authInfo[0].company == route.params["id"])
      //.map(authInfo => authInfo)
      .take(1)
      .do(allowed => {
        console.log(allowed)
        if (!allowed) {
          this.router.navigate(['/login']);
        }
      });

  }
}