import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadexame',
  templateUrl: './cadexame.component.html',
  styleUrls: ['./cadexame.component.css']
})
export class CadexameComponent implements OnInit {

  //propriedade para rotas
  constructor(private router:Router ) {}

  ngOnInit(): void {
  }
  //método que chama a aba de exames novamente
  Exames()
  {
    this.router.navigate(["exames"]);
  }
}
