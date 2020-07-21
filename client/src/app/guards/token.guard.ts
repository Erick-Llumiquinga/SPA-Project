import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import  { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

   constructor ( private router : Router ) {

   }  

  canActivate()
  {
    const auth  = localStorage.getItem("token");
    if(auth == null) {
      console.log("no estas logeado");
     this.router.navigate(['/']);
      return false;
    }
      return true;
  }
  
}
