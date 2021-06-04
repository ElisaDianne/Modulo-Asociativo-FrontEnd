import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-b',
  templateUrl: './pagina-b.component.html',
  styleUrls: ['./pagina-b.component.scss']
})
export class PaginaBComponent implements OnInit {
  isShow:boolean=false;
  isShow2:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  toogleTag(){
    this.isShow=!this.isShow;
    this.isShow2=!this.isShow2;
  } 

}
