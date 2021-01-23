import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  @Input() form: any = {};
  @Input() userForm: FormGroup;
  @Output() formValue: any = new EventEmitter();

  inputs: string[];
  btns: string[];

  constructor() { }

  ngOnInit(): void {
    this.inputs = Object.keys(this.form) || [];
  }

  submitForm() {
    this.formValue.emit();
  }

}
