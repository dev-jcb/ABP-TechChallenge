import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsComponent } from './cms.component';
import { CmsViewerComponent } from './cms-viewer/cms-viewer.component';

const routes: Routes = [
  { path: '', component: CmsComponent },
  { path: ':slug', component: CmsViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CmsRoutingModule { }
