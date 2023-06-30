import { TestBed } from '@angular/core/testing';
import { SignUpData } from './sign-up-data';
import { SignupFormService } from './signup-form.service';
import { of } from 'rxjs';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SignupFormService', () => {
  let service: SignupFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignupFormService]
    });
    service = TestBed.inject(SignupFormService);
  });

  it('should return data for the given lastNameLength', () => {
    const lastNameLength = 5;
    const expectedUrl = 'https://jsonplaceholder.typicode.com/photos/5';
    const dummyData = { /* dummy response data */ };
  
    spyOn(service['http'], 'get').and.returnValue(of(dummyData));
  
    service.getData(lastNameLength).subscribe(response => {
      expect(response).toEqual(dummyData);
      expect(service['http'].get).toHaveBeenCalledWith(expectedUrl);
    });
  });

  it('should send the signUpData to the server', () => {
    const signUpData = { 
    firstName: 'Jay',
    lastName: 'Shinde',
    email: 'jayshinde@gmail.com',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97'
    };
    const expectedUrl = 'https://jsonplaceholder.typicode.com/users';
  
    spyOn(service['http'], 'post').and.returnValue(of({}));
  
    service.postData(signUpData).subscribe(() => {
      expect(service['http'].post).toHaveBeenCalledWith(expectedUrl, signUpData);
    });
  });
});
