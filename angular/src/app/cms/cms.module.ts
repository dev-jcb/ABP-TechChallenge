import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CmsComponent } from './cms.component';
import { CmsRoutingModule } from './cms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { CmsViewerComponent } from './cms-viewer/cms-viewer.component';

@NgModule({
  declarations: [CmsComponent],
  imports: [
    CmsRoutingModule,
    CmsViewerComponent,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    QuillModule.forRoot()
  ],
})
export class CmsModule {}
