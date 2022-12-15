import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { ProductoMainComponent } from './producto-main/producto-main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductoDetailComponent,
    ProductoFormComponent,
    ProductoMainComponent,
  ],
  exports: [
    ProductoDetailComponent,
    ProductoFormComponent,
    ProductoMainComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class ProductoModule {}
