import { Router } from '@angular/router';
import { ServiceService } from './../../Service/service.service';
import { Procedimentos } from './../../Modelo/Procedimentos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedimentos',
  templateUrl: './procedimentos.component.html',
  styleUrls: ['./procedimentos.component.css']
})
export class ProcedimentosComponent implements OnInit {
    //variável para pegar as informações
  procedimentos:Procedimentos[];
        //variável de Service com nome de http para fazer a solicitação
    //variável de Router com nome de router para fazer a rota
  constructor(private http:ServiceService, private router:Router ) { }
//Metódo principal que inicía quando é chamado
  ngOnInit(){
        
               //aqui seria buscado os valores em procedimento através do service na variavel http 
    this.http.getProcedimentos().subscribe(res=>this.procedimentos=res);
  }
  CadastroProcedimento()
  {
        //chamando metódo para o botão de cadastrar procedimento
    this.router.navigate(["cadprocedimento"]);
  }
}
