import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'dat-xe',
  templateUrl: './dat-xe.component.html',
  styleUrls: ['./dat-xe.component.scss'],
})
export class DatXeComponent implements OnInit {
  mobileView: boolean = false;

  constructor(
    private deviceDetector: DeviceDetectorService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.mobileView = this.deviceDetector.isMobile();
  }
  orderForm = this.fb.group({
    name: [''],
    phone: [''],
    email: [''],
    pickUpPoint: [''],
    Destination: [''],
    typeCar: [''],
    typeOptions: [''],
    pickUpDate: [''],
    note: [''],
  });
}
