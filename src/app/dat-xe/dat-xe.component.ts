import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'dat-xe',
  templateUrl: './dat-xe.component.html',
  styleUrls: ['./dat-xe.component.scss'],
})
export class DatXeComponent {
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
  constructor(private fb: FormBuilder) {}
}
