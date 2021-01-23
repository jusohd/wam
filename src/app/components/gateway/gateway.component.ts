import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.scss']
})

export class GatewayComponent implements OnInit {
  @Output() paid: any = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pay() {
    this.paid.emit(true);
  }

}
