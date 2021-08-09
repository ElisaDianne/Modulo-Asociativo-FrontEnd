import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-juridicos-org',
  templateUrl: './datos-juridicos-org.component.html',
  styleUrls: ['./datos-juridicos-org.component.scss']
})
export class DatosJuridicosOrgComponent implements OnInit {
  fEstatutoYAcuerdo: File

  constructor() { }

  ngOnInit(): void {
  }

  onFileEstatutoYAcuerdoChange(e) {
    console.log(e)
    this.fEstatutoYAcuerdo = e.target.files[0]
    console.log(this.fEstatutoYAcuerdo)
  }
}
