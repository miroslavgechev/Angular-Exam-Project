import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { OnMouseHoverDirective } from './on-mouse-hover.directive';



@NgModule({
  declarations: [
    AboutComponent,
    CatalogComponent,
    OnMouseHoverDirective
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
