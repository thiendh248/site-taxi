import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatXeRoutingModule } from './dat-xe-routing.module';
import { DatXeComponent } from './dat-xe.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BangGiaThueXeModule } from '../bang-gia-thue-xe/bang-gia-thue-xe.module';

@NgModule({
  imports: [
    RouterOutlet,
    RouterLink,
    DatXeRoutingModule,
    ReactiveFormsModule,
    BangGiaThueXeModule,
    FormsModule,
  ],
  declarations: [DatXeComponent],
})
export class DatXeModule {}
