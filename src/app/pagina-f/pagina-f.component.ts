import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-pagina-f',
  templateUrl: './pagina-f.component.html',
  styleUrls: ['./pagina-f.component.scss']
})
export class PaginaFComponent implements OnInit {
  ActAgro = new FormControl();
  disableSelect = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
