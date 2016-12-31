import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import { User } from '../../shared/models';
import { AuthService } from '../../security/auth.service';
@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: any): void {
    this.submitted = true;
    if (this.form.valid) {
      let _that = this;
      this.authService.login(values.email, values.password).subscribe(data => {
        _that.loginSuccess(data, _that);
      });
      // your code goes here
      // console.log(values);
    }
  }
  public googleLogin(): void {
    let _that = this;
    this.authService.loginWithGoogle().subscribe(data => {
      _that.loginSuccess(data, _that);
    });
  }
  public facebookLogin(): void {
    let _that = this;
    this.authService.loginWthFacebook().subscribe(data => {
      _that.loginSuccess(data, _that);
    });
  }
  public tweeterLogin(): void {
    let _that = this;
    this.authService.loginWithTwitter().subscribe(data => {
      _that.loginSuccess(data, _that);
    });
  }
  loginSuccess(d: FirebaseAuthState, that: Login) {
    that.router.navigate(['/users/list']);
  }
}
