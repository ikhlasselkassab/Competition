import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ScoreboardComponent} from './scoreboard/scoreboard.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [ScoreboardComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'competition';
}
