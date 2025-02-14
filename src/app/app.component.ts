import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [ScoreboardComponent,HttpClientModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'competition';
}
