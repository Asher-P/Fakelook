import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService, UserService } from '@app/_services';
import { CookieService } from 'ngx-cookie-service';
import User from 'src/common/user';

@Component({styleUrls:["./login.css"] ,templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService:UserService,
        private coockieService:CookieService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        let login_parent = document.getElementById("Login").parentElement;
        login_parent.classList.add("header");
    }


    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        console.log(this.loginForm.value);
        this.authenticationService.login(this.loginForm.value).subscribe(res=>{
            console.log(res);
            const {user,token} = res;//JSON.parse(res);
            this.userService.setUser(user);
            this.coockieService.set("token",token);
            this.loading = true;
            this.router.navigate(['/']);
            this.loading = false;
         },
            (err)=>{
                this.error="Email or Password is worng";
                this.loading = false;});
    }
}
