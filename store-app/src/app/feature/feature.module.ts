import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { OnMouseHoverDirective } from './on-mouse-hover.directive';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AboutComponent,
    CatalogComponent,
    OnMouseHoverDirective,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
