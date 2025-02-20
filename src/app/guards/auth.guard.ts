import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // const storedCredentials = localStorage.getItem('credentials');
    // if (storedCredentials) {
    //   return true;
    // } else {
    //   this.router.navigate(['/Login']);
    //   return false;
    // }
    return true;
  }
}
