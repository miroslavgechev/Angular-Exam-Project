import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CatalogComponent } from './catalog/catalog.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { OnMouseHoverDirective } from './on-mouse-hover.directive';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AboutComponent,
    CatalogComponent,
    OnMouseHoverDirective,
    DetailsComponent,
    CartComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, FeatureRoutingModule, SharedModule],
})
export class FeatureModule {}
