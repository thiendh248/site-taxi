import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'ngbd-modal-content',
  standalone: true,
  template: `
    <div class="modal-header">
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <img
        *ngIf="name === 'kakaotalk'"
        src="../../content/images/QR_kakaotalk.jpg"
        style="width: 100%"
        alt=""
      />
      <img
        *ngIf="name === 'whatsapp'"
        src="../../content/images/QR_whatsapp.jpg"
        style="width: 100%"
        alt=""
      />
    </div>
  `,
  imports: [NgIf],
})
export class NgbdModalContent {
  @Input() name: 'kakaotalk' | 'whatsapp' = 'kakaotalk';

  constructor(public activeModal: NgbActiveModal) {}
}
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  mobileView: boolean = false;

  constructor(
    private deviceDetector: DeviceDetectorService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
    const banner = document.getElementById('banner');
    banner!.style.backgroundImage = "url('./content/images/banner.jpeg')";
  }

  openModal(name: string) {
    const modalRef = this.modalService.open(NgbdModalContent, {
      centered: true,
    });
    modalRef.componentInstance.name = name;
  }
}
