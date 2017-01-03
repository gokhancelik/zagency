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

    return this.authService.getUserInfo()
      .map(authInfo => authInfo && authInfo.user.company == route.params["id"])
      .take(1)
      .do(allowed => {
        console.log(allowed)
        if (!allowed) {
          this.router.navigate(['/login']);
        }
      });

  }
}