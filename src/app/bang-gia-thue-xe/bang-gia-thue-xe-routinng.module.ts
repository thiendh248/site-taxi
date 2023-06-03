import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BangGiaThueXeComponent } from './bang-gia-thue-xe.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BangGiaThueXeComponent,
      },
    ]),
  ],
})
export class BangGiaThueXeRoutinngModule {}
