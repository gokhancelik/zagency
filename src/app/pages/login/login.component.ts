import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';
import { User } from '../../shared/models';

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

  constructor(fb: FormBuilder, public af: AngularFire, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      let _that = this;
      this.af.auth.login().then(data => {
        _that.loginSuccess(data, _that);
      });
      // your code goes here
      // console.log(values);
    }
  }
  public googleLogin(): void {
    let _that = this;
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(data => {
      _that.loginSuccess(data, _that);
    });
  }
  public facebookLogin(): void {
    let _that = this;
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
    }).then(data => {
      _that.loginSuccess(data, _that);
    });
  }
  loginSuccess(d: FirebaseAuthState, that: Login) {
    let userRef = that.af.database.object('/users/' + d.uid).$ref;
    if (!userRef.child('email'))
      userRef.update({ email: d.auth.email });
    // .set({
    //   provider: d.provider,
    //   name: d.auth.displayName,
    //   email: d.auth.email,
    //   company: ''
    // });
    that.router.navigate(['/tours']);
  }
}
