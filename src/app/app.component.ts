import {Component, inject, NgModule} from '@angular/core';
import {Router, RouterOutlet, RouterModule} from '@angular/router';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {HttpClient} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet,NgIf,RouterModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  private router = inject(Router);
  title = 'competition';
  loggedIn():boolean{
    return !this.router.url.startsWith("/Login")
  }
}
