import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent } from '../container/container.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  mobileView: boolean = false;

  constructor(
    private deviceDetector: DeviceDetectorService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
  }

  openModal(name: string) {
    const modalRef = this.modalService.open(NgbdModalContent, {
      centered: true,
    });
    modalRef.componentInstance.name = name;
  }
}
