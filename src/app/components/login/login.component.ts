import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '@app/_services';
import { CookieService } from 'ngx-cookie-service';

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
        private coockieService:CookieService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
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
            this.coockieService.set("token",res);
            this.loading = true;
            this.router.navigate(['/']);
            this.loading = false;
         },
            (err)=>{
                this.error=err;
                this.loading = false;});
    }
}
