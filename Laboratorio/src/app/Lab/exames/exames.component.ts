import { Exames } from './../../Modelo/Exames';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import que da acesso a parte de serviços para que possa usar ServiceService
import{ServiceService} from '../../Service/service.service'
@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

    //variável para pegar as informações
    exames:Exames[] ;
      //variável de Service com nome de http para fazer a solicitação
    //variável de Router com nome de router para fazer a rota
    constructor(private http:ServiceService, private router:Router ) { }
  
    //Metódo principal onde inicía quando é chamado
    ngOnInit(){
       //aqui seria buscado os valores em exames através do service na variavel http 
      this.http.getExames().subscribe(res=>this.exames=res);
    }
        //chamando metódo para o botão de cadastrar exame
    CadastroExame()
    {
      this.router.navigate(["cadexame"]);
    }
}
