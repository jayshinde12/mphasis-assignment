import { Component, OnDestroy, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SignUpData } from '../sign-up-data';
import { SignupFormService } from '../signup-form.service';

@Component({
  selector: 'app-app-signup',
  templateUrl: './app-signup.component.html',
  styleUrls: ['./app-signup.component.scss']
})
export class AppSignupComponent implements OnInit, OnDestroy {
 signUpForm!: FormGroup;
  fullName: string = '';
  private thumbnailSubscription!: Subscription;
  private signUpSubscription!: Subscription;
  signUpData!: SignUpData;

  constructor(private formBuilder: FormBuilder,private signupFormService: SignupFormService) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, this.validatePassword]]
    });
    
    this.signUpForm.valueChanges.subscribe(value => {
      this.fullName = `${value.firstName} ${value.lastName}`;
    });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    const lastNameLength : number = this.signUpForm.value.lastName.length;
    this.thumbnailSubscription = this.signupFormService.getData(lastNameLength).subscribe(response => {
          const thumbnailUrl = response.thumbnailUrl;
          this.signUpData = {
            firstName: this.signUpForm.value.firstName,
            lastName: this.signUpForm.value.lastName,
            email: this.signUpForm.value.email,
            thumbnailUrl: thumbnailUrl
          };
      });

      this.signUpSubscription = this.signupFormService.postData(this.signUpData).subscribe(() => {
        // reset the form here
        this.signUpForm.reset();
      });
  }
  validatePassword(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    const firstName = control.parent?.get('firstName')?.value;
    const lastName = control.parent?.get('lastName')?.value;

    // Check minimum length
    if (password.length < 8) {
      return { minLength: true };
    }

    // Check lower and uppercase letters
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      return { letters: true };
    }

    // Check for first or last name in the password
    if (firstName && password.toLowerCase().includes(firstName.toLowerCase())) {
      return { containsFirstName: true };
    }

    if (lastName && password.toLowerCase().includes(lastName.toLowerCase())) {
      return { containsLastName: true };
    }

    return null;
  }
  
  ngOnDestroy() {
    if (this.thumbnailSubscription) {
      this.thumbnailSubscription.unsubscribe();
    }
    if (this.signUpSubscription) {
      this.signUpSubscription.unsubscribe();
    }
  }
}
