import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GioiThieuComponent } from './gioi-thieu.component';
import { GioiThieuRoutingModule } from './gioi-thieu-routing.module';

@NgModule({
  imports: [RouterOutlet, RouterLink, GioiThieuRoutingModule],
  declarations: [GioiThieuComponent],
})
export class GioiThieuModule {}
