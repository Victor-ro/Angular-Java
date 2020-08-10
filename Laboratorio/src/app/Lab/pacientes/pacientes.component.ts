import { Router } from '@angular/router';
import { Pacientes } from './../../Modelo/Pacientes';
import { Component, OnInit } from '@angular/core';
//import que da acesso a parte de serviços para que possa usar ServiceService
import{ServiceService} from '../../Service/service.service'
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
    //variável para pegar as informações
  pacientes:Pacientes[];
      //variável de Service com nome de http para fazer a solicitação
    //variável de Router com nome de router para fazer usar as rotas
  constructor(private http:ServiceService, private router:Router ) { }

    
    //Metódo principal que inicía quando é chamado
  ngOnInit(){
       //aqui seria buscado os valores em pacientes através do service na variavel http 
    this.http.getPacientes().subscribe(res=>this.pacientes=res);
  }
  CadastroPaciente()
  {
    //chamando metódo para o botão de cadastrar paciente
    this.router.navigate(["cadpaciente"]);
  }

}
