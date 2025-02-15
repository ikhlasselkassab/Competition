import { Routes } from '@angular/router';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import {UploadComponent} from './upload/upload.component';
import {DownloadComponent} from './download/download.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  { path: 'ScoreBoard', component: ScoreboardComponent },
  { path: 'Upload', component: UploadComponent},
  { path: 'Examples', component: DownloadComponent},
  { path: 'Login', component: LoginComponent},
  { path: '', redirectTo: 'ScoreBoard', pathMatch: 'full' },
  { path: '**', redirectTo: 'ScoreBoard' }
];
