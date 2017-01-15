import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'client-app',
    templateUrl: 'client.component.html',
    styles: [require('normalize.css'),
    require('./sass/style.scss'),
    require('./sass/responsive.scss'),
     require('./sass/custom.scss')]
})
export class ClientComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}