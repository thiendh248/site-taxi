import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GioiThieuComponent } from './gioi-thieu.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GioiThieuComponent,
      },
    ]),
  ],
})
export class GioiThieuRoutingModule {}
