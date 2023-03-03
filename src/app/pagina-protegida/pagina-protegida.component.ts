import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-pagina-protegida',
  templateUrl: './pagina-protegida.component.html',
  styleUrls: ['./pagina-protegida.component.css']
})
export class PaginaProtegidaComponent implements OnInit {
  
  constructor(
    private auth: AuthServiceService,
    private router: Router
  ){}
  ngOnInit(): void {
      
  }

  logout(){
    this.auth.logout();
    return this.router.navigate(["login"])
  }
}
