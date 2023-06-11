import {Component, OnInit, TemplateRef} from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
// import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  mobileView: boolean = false;
  isModalOpen = false;


  constructor(private deviceDetector: DeviceDetectorService,
  ) {}
  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
    const banner = document.getElementById('banner');
    banner!.style.backgroundImage = "url('./content/images/banner.jpeg')";
  }


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
