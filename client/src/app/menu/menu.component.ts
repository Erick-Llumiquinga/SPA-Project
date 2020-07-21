import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  status: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  checkValidate = () => {
    let token = localStorage.getItem('token')

    if(token != undefined){
      this.status = true
      location.reload()  
    }
  }

  logOut = () =>{
    return localStorage.removeItem("token");
  }

}
