import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientesComponent } from './Lab/pacientes/pacientes.component';
import { ProcedimentosComponent } from './Lab/procedimentos/procedimentos.component';
import { ExamesComponent } from './Lab/exames/exames.component'; 
import {FormsModule} from '@angular/forms'
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { CadpacienteComponent } from './Cadastro/cadpaciente/cadpaciente.component';
import { CadexameComponent } from './Cadastro/cadexame/cadexame.component';
import { CadprocedimentoComponent } from './Cadastro/cadprocedimento/cadprocedimento.component';

//declarações para o Angular reconhecer como componente
@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    ProcedimentosComponent,
    ExamesComponent,
    CadpacienteComponent,
    CadexameComponent,
    CadprocedimentoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
