import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { GlobalState } from '../../../global.state';
import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop implements OnInit {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;
  private auth: FirebaseAuthState;
  constructor(private _state: GlobalState, private af: AngularFire) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public ngOnInit() {
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }
  public logout() {
    this.af.auth.logout();
  }
  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }
}
