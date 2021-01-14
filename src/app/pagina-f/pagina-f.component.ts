import { Component} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-pagina-f',
  templateUrl: './pagina-f.component.html',
  styleUrls: ['./pagina-f.component.scss']
})
export class PaginaFComponent {
  ActAgro = new FormControl();
  disableSelect = new FormControl();
  value = 'Otro';
  constructor() { }

  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 100) + ' Mujeres';
    }
    return value;
  }

}
