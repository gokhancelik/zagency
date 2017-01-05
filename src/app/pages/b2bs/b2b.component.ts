import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'b2b-cmp',
    template: '<router-outlet></router-outlet>'
})
export class B2BComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}