import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadpaciente',
  templateUrl: './cadpaciente.component.html',
  styleUrls: ['./cadpaciente.component.css']
})
export class CadpacienteComponent implements OnInit {

    //propriedade para rotas
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
      //método que chama a aba de pacientes novamente
  Pacientes()
  {
    this.router.navigate(["pacientes"]);
  }
}
