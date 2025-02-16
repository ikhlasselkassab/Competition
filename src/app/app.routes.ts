import { Routes } from '@angular/router';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import {UploadComponent} from './upload/upload.component';
import {DownloadComponent} from './download/download.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'ScoreBoard', component: ScoreboardComponent, canActivate: [AuthGuard] },
  { path: 'Upload', component: UploadComponent, canActivate: [AuthGuard] },
  { path: 'Examples', component: DownloadComponent, canActivate: [AuthGuard] },
  { path: 'Login', component: LoginComponent },
  { path: '', redirectTo: 'ScoreBoard', pathMatch: 'full' },
  { path: '**', redirectTo: 'ScoreBoard' }
];

