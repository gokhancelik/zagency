import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'admin-root',
    template: `
    <main [ngClass]="{'menu-collapsed': isMenuCollapsed}" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
    <div id="preloader">
        <div></div>
    </div>
    `
})
export class AdminRootComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}