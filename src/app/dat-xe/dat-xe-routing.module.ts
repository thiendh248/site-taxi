import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DatXeComponent } from './dat-xe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DatXeComponent,
      },
    ]),
  ],
})
export class DatXeRoutingModule {}
