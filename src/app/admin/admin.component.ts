import { layoutPaths } from './../theme/theme.constants';
import { BaImageLoaderService } from './../theme/services/baImageLoader/baImageLoader.service';
import { BaThemeSpinner } from './../theme/services/baThemeSpinner/baThemeSpinner.service';
import { BaThemePreloader } from './../theme/services/baThemePreloader/baThemePreloader.service';
import { ComponentsHelper } from 'ng2-bootstrap';
import { GlobalState } from './../global.state';
import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'admin-app',
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'), require('./app.scss')],
  template: `
   
        <ba-sidebar></ba-sidebar>
        <ba-page-top></ba-page-top>
        <div class="al-main">
          <div class="al-content">
            <ba-content-top></ba-content-top>
            <router-outlet></router-outlet>
          </div>
        </div>
        <footer class="al-footer clearfix">
          <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
          <div class="al-footer-main clearfix">
            <div class="al-copy">&copy; <a href="http://zyazilim.com.tr">zyazilim</a> 2016</div>
            <ul class="al-share clearfix">
              <li><i class="socicon socicon-facebook"></i></li>
              <li><i class="socicon socicon-twitter"></i></li>
              <li><i class="socicon socicon-google"></i></li>
              <li><i class="socicon socicon-github"></i></li>
            </ul>
          </div>
        </footer>
        <ba-back-top position="200"></ba-back-top>
    
    `
})
export class Admin {
  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
    private _imageLoader: BaImageLoaderService,
    private _spinner: BaThemeSpinner
  ) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
    this._fixModals();
    this._loadImages();

  }
  ngOnInit() {

  }
  public ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    BaThemePreloader.load().then((values) => {
      this._spinner.hide();
    });
  }
  private _fixModals(): void {
    ComponentsHelper.prototype.getRootViewContainerRef = function () {
      // https://github.com/angular/angular/issues/9293
      if (this.root) {
        return this.root;
      }
      let comps = this.applicationRef.components;
      if (!comps.length) {
        throw new Error('ApplicationRef instance not found');
      }
      try {
        /* one more ugly hack, read issue above for details */
        let rootComponent = this.applicationRef._rootComponents[0];
        this.root = rootComponent._component.viewContainerRef;
        return this.root;
      }
      catch (e) {
        throw new Error('ApplicationRef instance not found');
      }
    };
  }
  private _loadImages(): void {
    // register some loaders
    BaThemePreloader.registerLoader(this._imageLoader.load(layoutPaths.images.root + 'sky-bg.jpg'));
  }

}
