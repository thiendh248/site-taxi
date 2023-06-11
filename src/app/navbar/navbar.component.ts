import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { TranslateService } from '@ngx-translate/core';
import { SessionStorageService } from 'ngx-webstorage';
export const LANGUAGES: string[] = ['en', 'vi'];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  mobileView: boolean = false;
  isOpenMenuBarMobile: boolean = false;

  currentLanguage = 'vi';
  languages = LANGUAGES;

  constructor(
    private deviceDetector: DeviceDetectorService,
    private sessionStorageService: SessionStorageService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
    this.isOpenMenuBarMobile = false;
  }

  onHideMenuBarMobile() {
    const body = document.body;
    this.isOpenMenuBarMobile = !this.isOpenMenuBarMobile;
    if (this.isOpenMenuBarMobile) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }
  }

  changeLanguage(languageKey: string): void {
    this.currentLanguage = languageKey;
    this.sessionStorageService.store('locale', languageKey);
    this.translateService.use(languageKey);
  }
}
