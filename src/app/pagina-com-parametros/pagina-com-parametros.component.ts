import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-com-parametros',
  templateUrl: './pagina-com-parametros.component.html',
  styleUrls: ['./pagina-com-parametros.component.css']
})
export class PaginaComParametrosComponent implements OnInit{
  constructor(
    private route: ActivatedRoute
  ){}
  
    id: number | null = null;
    idade: number | null = null;
    nome: string | null= "";
  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {this.id = Number(params.get("id"))})
      this.route.queryParamMap.subscribe(params => {
        this.idade = Number(params.get("idade"))
        this.nome = params.get("nome")
      })
  }

}
