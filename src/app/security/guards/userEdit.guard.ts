import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";

@Injectable()
export class CanActivateUserEdit implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.getUserInfo()
      .map(authInfo => authInfo && (authInfo.user.id == route.params["id"]
      ||authInfo.role.name=='companyadmin' || authInfo.role.name=='superadmin'))
      .take(1)
      .do(allowed => {
        console.log(allowed)
        if (!allowed) {
          this.router.navigate(['/login']);
        }
      });

  }
}