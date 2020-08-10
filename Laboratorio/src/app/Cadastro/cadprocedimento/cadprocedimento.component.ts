import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadprocedimento',
  templateUrl: './cadprocedimento.component.html',
  styleUrls: ['./cadprocedimento.component.css']
})
export class CadprocedimentoComponent implements OnInit {

    //propriedade para rotas
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    //método que chama a aba de procedimentos novamente
  Procedimentos()
  {
    this.router.navigate(["procedimentos"]);
  }
}
