import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-pagina-g',
  templateUrl: './pagina-g.component.html',
  styleUrls: ['./pagina-g.component.scss']
})
export class PaginaGComponent implements OnInit {
  ActAgro = new FormControl();
  disableSelect = new FormControl();
  value = 'Otro';
  constructor() { }

  ngOnInit(): void {
  }

}
