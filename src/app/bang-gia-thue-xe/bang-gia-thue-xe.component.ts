import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'bang-gia-thue-xe',
  templateUrl: 'bang-gia-thue-xe.component.html',
  styleUrls: ['./bang-gia-thue-xe.component.scss'],
})
export class BangGiaThueXeComponent implements OnInit {
  mobileView: boolean = false;

  constructor(private deviceDetector: DeviceDetectorService) {}
  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
  }
}
