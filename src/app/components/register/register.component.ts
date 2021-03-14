import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;
  registerUserData = { 
    first_name:"",
    last_name:"",
    email:"",
    username: "",
     password: "",
      confirmPassword: "" };
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.registerFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['',[Validators.email,Validators.required]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
    let register_parent = document.getElementById("Register").parentElement;
        
        register_parent.classList.add("header");
  }

  registerUser() {
    console.log("on register method", this.registerUserData);
    this.authenticationService.register(this.registerFormGroup.value)
      .subscribe(
        res => console.log("here are result from register", res),
        err => console.log("there was an error with registration")
      );
  }

}
