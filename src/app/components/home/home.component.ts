import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatStepper, MatStep } from '@angular/material/stepper';
import { PayResponse } from 'src/app/interfaces/payResponse';
import { PayService } from 'src/app/services/pay.service';
import { configForm } from '../home/config/form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('step1') step1: MatStep;
  @ViewChild('step2') step2: MatStep;

  user: any;
  userForm: FormGroup;
  inputs: any = configForm;
  isPaid: boolean = false;
  payData: PayResponse;


  constructor(
    private payService: PayService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
    });
  }

  ngAfterViewInit(): void { }

  paid(event) {
    if (event) {
      this.user = this.userForm.value;
      this.paying();
    }
  }

  paying() {
    this.payService.getPay(this.user).subscribe(data => {
      console.log(data);
      if (data) {
        this.payData = data;
        this.isPaid = true;
      }
    });
  }

}
