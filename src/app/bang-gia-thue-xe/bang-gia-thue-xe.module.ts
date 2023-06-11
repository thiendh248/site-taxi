import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BangGiaThueXeComponent } from './bang-gia-thue-xe.component';
import { BangGiaThueXeRoutinngModule } from './bang-gia-thue-xe-routinng.module';
import { NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    RouterOutlet,
    RouterLink,
    BangGiaThueXeRoutinngModule,
    NgIf,
    TranslateModule,
  ],
  declarations: [BangGiaThueXeComponent],
  exports: [BangGiaThueXeComponent],
})
export class BangGiaThueXeModule {}
