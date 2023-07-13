import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'catalog', component: CatalogComponent},
  {path:'details/:id', redirectTo: 'about'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
