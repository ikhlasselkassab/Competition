import {Component, Inject, Input, OnInit, PLATFORM_ID, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, switchMap} from 'rxjs';
import {isPlatformBrowser, NgClass, NgFor, NgIf} from '@angular/common';

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
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent implements OnInit {
  @Input() scoreboard: any[] = [];
  flashClasses: { [key: number]: string } = {};


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
    this.applyFlashEffect();
  }
  applyFlashEffect() {
    this.scoreboard.forEach((team) => {
      if (team.deltaRank > 0) {
        this.flashClasses[team.id] = 'flash-green'; // Flash green
      } else if (team.deltaRank < 0) {
        this.flashClasses[team.id] = 'flash-red'; // Flash red
      }

      // Remove class after 2 seconds
      setTimeout(() => {
        this.flashClasses[team.id] = '';
      }, 2000);
    });
  }


  getDeltaClass(team: any): string {
    if (team.deltaRank > 0) {
      return 'green-background'; // Green if deltaRank is positive
    } else if (team.deltaRank < 0) {
      return 'red-background'; // Red if deltaRank is negative
    }
    return ''; // No color if deltaRank is 0
  }
}
