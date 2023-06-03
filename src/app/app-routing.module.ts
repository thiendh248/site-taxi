import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'home',
          component: ContainerComponent,
        },
        {
          path: 'bang-gia-thue-xe',
          loadChildren: () =>
            import('./bang-gia-thue-xe/bang-gia-thue-xe.module').then(
              (m) => m.BangGiaThueXeModule
            ),
        },
        {
          path: 'gioi-thieu',
          loadChildren: () =>
            import('./gioi-thieu/gioi-thieu.module').then(
              (m) => m.GioiThieuModule
            ),
        },
        {
          path: 'dat-xe',
          loadChildren: () =>
            import('./dat-xe/dat-xe.module').then((m) => m.DatXeModule),
        },
      ],
      { enableTracing: false }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
