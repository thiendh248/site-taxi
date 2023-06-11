import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Xe Hội An - Đà Nẵng';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('vi'); // Ngôn ngữ mặc định
  }
  ngOnInit(): void {}
}
