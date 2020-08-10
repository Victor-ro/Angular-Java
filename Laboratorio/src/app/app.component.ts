import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Laboratorio';

  //variável responsável pelas rotas 
  constructor(private router:Router){}

  //Metódos que serão responsáveis pelo redirecionamento de páginas
  Exames()
  {
    this.router.navigate(["exames"]);
  }
  Pacientes()
  {
    this.router.navigate(["pacientes"]);
  }
  Procedimentos()
  {
    this.router.navigate(["procedimentos"]);
  }
  CadastroPaciente()
  {
    this.router.navigate(["cadpaciente"]);
  }
}
