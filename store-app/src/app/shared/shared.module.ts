import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LoaderSmallComponent } from './loader-small/loader-small.component';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';

@NgModule({
  declarations: [LoaderComponent, LoaderSmallComponent, ElapsedTimePipe],
  imports: [CommonModule],
  exports: [LoaderComponent, LoaderSmallComponent, ElapsedTimePipe],
})
export class SharedModule {}
