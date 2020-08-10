import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamesComponent } from './Lab/exames/exames.component';
import { PacientesComponent } from './Lab/pacientes/pacientes.component';
import { ProcedimentosComponent } from './Lab/procedimentos/procedimentos.component';
import { CadexameComponent } from './Cadastro/cadexame/cadexame.component'
import { CadpacienteComponent } from './Cadastro/cadpaciente/cadpaciente.component';
import {CadprocedimentoComponent} from './Cadastro/cadprocedimento/cadprocedimento.component';


const routes: Routes = [
  //todos os componentes que será utilizados em rotas (para utilizar aquilo de clicar no botão e aparecer outra tela)
  {path: 'exames', component:ExamesComponent},
  {path: 'pacientes', component:PacientesComponent},
  {path: 'procedimentos', component:ProcedimentosComponent},
  {path: 'cadexame', component:CadexameComponent},
  {path: 'cadpaciente', component:CadpacienteComponent},
  {path: 'cadprocedimento', component:CadprocedimentoComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
