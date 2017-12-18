import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Observable';

import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate,
                            CanActivateChild {

    constructor(
        private authService: AuthService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.loggedIn;
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.loggedIn;
    }
}