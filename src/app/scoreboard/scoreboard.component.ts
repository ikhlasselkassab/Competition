import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, switchMap} from 'rxjs';
import {isPlatformBrowser, NgFor, NgIf} from '@angular/common';

const DURATION = 5000; // Refresh interval in milliseconds
const API_URL = 'http://192.168.1.52:5000/getScoreBoard';

interface Player {
  deltaRank: number;
  drawCount: number;
  id: number;
  loseCount: number;
  name: string;
  rank: number;
  score: number;
  totalPlayed: number;
  winCount: number;
}

@Component({
  selector: 'app-scoreboard',
  imports: [NgFor],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent implements OnInit {
  scoreboard: any[] = [];

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.http.get<any[]>('http://192.168.1.52:5000/getScoreBoard').subscribe(
        (data) => {
          console.log('Données reçues :', data);
          this.scoreboard = data;
        },
        (error) => {
          console.error('Erreur de requête API:', error);
        }
      );
    }
  }
}
