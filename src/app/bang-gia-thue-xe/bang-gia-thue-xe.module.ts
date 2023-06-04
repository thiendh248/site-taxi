import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BangGiaThueXeComponent } from './bang-gia-thue-xe.component';
import { BangGiaThueXeRoutinngModule } from './bang-gia-thue-xe-routinng.module';
import { NgIf } from '@angular/common';

@NgModule({
  imports: [RouterOutlet, RouterLink, BangGiaThueXeRoutinngModule, NgIf],
  declarations: [BangGiaThueXeComponent],
  exports: [BangGiaThueXeComponent],
})
export class BangGiaThueXeModule {}
