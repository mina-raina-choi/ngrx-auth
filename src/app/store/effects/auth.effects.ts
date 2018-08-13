import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
    constructor(
        private actions: Actions,
        private authService: AuthService,
        private router: Router
    ) { }
}