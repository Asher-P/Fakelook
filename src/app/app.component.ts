import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/common/user';

import { AuthenticationService } from './_services';


@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User ;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        //*need to implimante a logout method*
        //this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}