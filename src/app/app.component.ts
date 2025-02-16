import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {HttpClient} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'competition';
}
