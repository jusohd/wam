import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'wam';
  panelOpenState = false;
  option: string;

  ngOnInit(): void {    
    this.option = 'Castellano';
  }

  closePanel(lang: string){
    this.option = lang;
    this.panelOpenState = false
  }
}

