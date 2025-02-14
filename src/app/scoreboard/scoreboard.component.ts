import {Component, Inject, OnInit, PLATFORM_ID,OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, switchMap} from 'rxjs';
import {isPlatformBrowser, NgFor, NgIf} from '@angular/common';
import ScoreBoardAPI from "../config"

const DURATION = 5000;
const API_URL = ScoreBoardAPI;

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
export class ScoreboardComponent implements OnInit, OnDestroy {
  scoreboard: any[] = [];
  private refreshInterval: any;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.refreshScoreboard();
      this.refreshInterval = setInterval(() => this.refreshScoreboard(), DURATION);
    }
  }

  ngOnDestroy(): void {
    if (this.refreshInterval) {
      clearInterval(this.refreshInterval);
    }
  }

  private refreshScoreboard(): void {
    this.http.get<any[]>(API_URL).subscribe(
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
