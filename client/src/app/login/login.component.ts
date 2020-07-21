import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:  LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  token: null;
  datas: any;
  emailUser: null
  passwUser: null

  data = {
    email: null,
    password: null
  }

  login =  () => {

    this.data.email = this.emailUser
    this.data.password = this.passwUser
    
    this.loginService.login(this.data)
    .subscribe(resp => {
      console.log(resp)
      if(!resp.transaction)
      { 
        return Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: `${resp.msg}!`,
          footer: '<button class="btn" routerLink="/usuario">¿Aún no tienes una cuenta? Registrate </button>'
          })
      }
      else {
        localStorage.setItem('token', resp.token)
        return this.router.navigate(['/menu'])
      }
    })
  }

  loginByEvent = (event) => {
    
    this.data.email = this.emailUser
    this.data.password = this.passwUser
    
    if(event.keyCode === 13){
      this.loginService.login(this.data)
      .subscribe(resp => {
        if(resp['transaction'])
        {
          localStorage.setItem('token', resp['token'])
          
          return this.router.navigate(['/estudiantes'])
        }
        else {
          return Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: `${this.datas.msg}!`,
          footer: '<a routerLink="/usuario">¿Aún no tienes una cuenta? Registrate </a>'
          })
        }
      })
    }
  }
}
