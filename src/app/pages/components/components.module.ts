import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { ZAImageCropperComponent } from './components/imageCropper';
//import { TreeComponent } from 'ng2-tree/index';

import { routing } from './components.routing';
import { Components } from './components.component';
//import { TreeView } from './components/treeView/treeView.component';
import { ImageCropperComponent } from 'ng2-img-cropper';
// TODO: tree component?
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Components,
    //TreeView,
    //TreeComponent,
    ImageCropperComponent,
    ZAImageCropperComponent
  ],
  exports: [ZAImageCropperComponent]

})
export default class ComponentsModule { }
