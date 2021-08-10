import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-juridicos-org',
  templateUrl: './datos-juridicos-org.component.html',
  styleUrls: ['./datos-juridicos-org.component.scss']
})
export class DatosJuridicosOrgComponent implements OnInit {
  fileEstatutoYAcuerdo: File
  fileCertificado: File

  constructor() { }

  ngOnInit(): void {
  }

  onFileEstatutoYAcuerdoChange(e) {
    console.log(e)
    this.fileEstatutoYAcuerdo = e.target.files[0]
    console.log(this.fileEstatutoYAcuerdo)
  }

  onFileCertificadoChange(e) {
    this.fileCertificado = e.target.files[0]
  }
}
