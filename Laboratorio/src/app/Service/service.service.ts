import { Pacientes } from './../Modelo/Pacientes';
import { Exames } from './../Modelo/Exames';
import { Procedimentos } from './../Modelo/Procedimentos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  //variável de HttpClient com nome de http para fazer os serviços de HTTP
  constructor(private http:HttpClient) { }

 //URLs para pegar informações na API
  Urlpaciente='http://localhost:8080/lab/paciente';
  Urlexame='http://localhost:8080/lab/exame';
  Urlprocedimentos='http://localhost:8080/lab/procedimento';
        
  //chamando metódo para pegar as informações que contém na API Rest através da URL
  getPacientes()
  { 
    return this.http.get<Pacientes[]>(this.Urlpaciente);
  }
  getExames()
  { 
    return this.http.get<Exames[]>(this.Urlexame);
  }
  getProcedimentos()
  { 
    return this.http.get<Procedimentos[]>(this.Urlprocedimentos);
  }
}
