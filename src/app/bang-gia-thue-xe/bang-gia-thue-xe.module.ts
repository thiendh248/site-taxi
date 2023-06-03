import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BangGiaThueXeComponent } from './bang-gia-thue-xe.component';
import { BangGiaThueXeRoutinngModule } from './bang-gia-thue-xe-routinng.module';

@NgModule({
  imports: [RouterOutlet, RouterLink, BangGiaThueXeRoutinngModule],
  declarations: [BangGiaThueXeComponent],
})
export class BangGiaThueXeModule {}
