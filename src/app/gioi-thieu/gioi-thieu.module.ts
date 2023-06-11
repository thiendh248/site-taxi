import { NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GioiThieuComponent } from './gioi-thieu.component';
import { GioiThieuRoutingModule } from './gioi-thieu-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [RouterOutlet, RouterLink, GioiThieuRoutingModule, TranslateModule],
  declarations: [GioiThieuComponent],
})
export class GioiThieuModule {}
