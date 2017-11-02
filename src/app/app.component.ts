import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Title } from '@angular/platform-browser'; 

import * as components from './components/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gaharu Gading Agrofarm';

  constructor(private titleSrv:Title, private dialog: MatDialog){}

  ngOnInit(){
    this.titleSrv.setTitle(this.title);
    let data = new Object({
      title: `Under Construction`,
      content:`Oops... We\'re working hard to deliver better content. <br/><br/> Thanks for your patience.`,
      close:'Close'
    });
    console.log(data);
    this.dialog.open(components.DialogComponent,
      {width:'500px',data});
  }
}
