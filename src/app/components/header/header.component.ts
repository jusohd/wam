import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Lang } from '../../interfaces/lang';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() sidenav: any = new EventEmitter();
  options: Lang[] = [
    { label: 'ES', value: 'Castellano' },
    { label: 'ENG', value: 'Ingles' },
    { label: 'FR', value: 'Frances' },
  ]
  option: string;


  constructor() {  }

  ngOnInit(): void {
    this.option = 'Castellano';
  }

  toggleSide(){
    this.sidenav.emit(true);
  }

}
