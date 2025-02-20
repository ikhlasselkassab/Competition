import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    //this.checkLocalStorageAndLogin();
  }

  checkLocalStorageAndLogin(): void {
    const storedCredentials = localStorage.getItem('credentials');
    if (storedCredentials) {
      this.credentials = JSON.parse(storedCredentials);
      this.login();
    } else {
      this.router.navigate(['/Login']);
    }
  }

  login(): void {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        localStorage.setItem('credentials', JSON.stringify(this.credentials));
        this.router.navigate(['/ScoreBoard']);
      },
      (error) => {
        console.error('Login failed', error);
        localStorage.removeItem('credentials');
        this.router.navigate(['/Login']);
      }
    );
  }

  onSubmit(): void {
    this.login();

  }

}
