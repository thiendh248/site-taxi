import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  mobileView: boolean = false;

  constructor(private deviceDetector: DeviceDetectorService) {}
  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
  }
}
