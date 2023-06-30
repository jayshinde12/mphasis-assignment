import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppSignupComponent } from './app-signup.component';
import { SignupFormService } from '../signup-form.service';

describe('AppSignupComponent', () => {
  let component: AppSignupComponent;
  let fixture: ComponentFixture<AppSignupComponent>;
  let signupFormService: SignupFormService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppSignupComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [SignupFormService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSignupComponent);
    component = fixture.componentInstance;
    signupFormService = TestBed.inject(SignupFormService);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the signUpForm with required form controls', () => {
    expect(component.signUpForm.get('firstName')).toBeTruthy();
    expect(component.signUpForm.get('lastName')).toBeTruthy();
    expect(component.signUpForm.get('email')).toBeTruthy();
    expect(component.signUpForm.get('password')).toBeTruthy();
  });
  
});
