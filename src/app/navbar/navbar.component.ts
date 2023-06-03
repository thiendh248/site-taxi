import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  mobileView: boolean = false;
  isOpenMenuBarMobile: boolean = false;
  constructor(private deviceDetector: DeviceDetectorService) {}

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
}
