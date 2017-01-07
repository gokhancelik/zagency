import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth.service";
@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {
            this.authService.getUserInfo().subscribe(console.log);
        return this.authService.getUserInfo()
            .map(authInfo => authInfo && (
            authInfo.user.company != null))
            .take(1)
            .do(allowed => {
                if (!allowed) {
                    this.router.navigate(['/login']);
                }
            });
    }
}