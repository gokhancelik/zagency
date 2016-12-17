import { Component, ViewEncapsulation, Input } from '@angular/core';

import './ckeditor.loader.ts';

@Component({
  selector: 'ckeditor-component',
  encapsulation: ViewEncapsulation.None,
  template: require('./ckeditor.html'),
  styles: [require('./ckeditor.scss')]
})

export class Ckeditor {
  @Input() ckeditorContent: string = '';
  @Input() title: string = '';
  @Input() config = {
    uiColor: '#F0F3F4',
    height: '400'
  };

  constructor() {
  }
}
