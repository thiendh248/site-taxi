import {Component, OnInit} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'gioi-thieu',
  templateUrl: './gioi-thieu.component.html',
  styleUrls: ['./gioi-thieu.component.scss'],
})
export class GioiThieuComponent implements OnInit {
  mobileView: boolean = false;
  isOpenMenuBarMobile: boolean = false;
  constructor(private deviceDetector: DeviceDetectorService) {}

  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
  }
}
