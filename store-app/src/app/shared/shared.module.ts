import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LoaderSmallComponent } from './loader-small/loader-small.component';

@NgModule({
  declarations: [LoaderComponent, LoaderSmallComponent],
  imports: [CommonModule],
  exports: [LoaderComponent, LoaderSmallComponent],
})
export class SharedModule {}
