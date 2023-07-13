import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FeatureRoutingModule } from './feature-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    CatalogComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
