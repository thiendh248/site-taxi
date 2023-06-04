import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  mobileView: boolean = false;

  constructor(private deviceDetector: DeviceDetectorService) {}
  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
    const banner = document.getElementById('banner');
    banner!.style.backgroundImage = "url('./content/images/banner.jpeg')";
  }
}
