import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatXeRoutingModule } from './dat-xe-routing.module';
import { DatXeComponent } from './dat-xe.component';

@NgModule({
  imports: [RouterOutlet, RouterLink, DatXeRoutingModule],
  declarations: [DatXeComponent],
})
export class DatXeModule {}
