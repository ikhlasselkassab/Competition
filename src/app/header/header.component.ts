import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() teamName: string = "Team"
  ngOnInit():void{
    this.teamName=JSON.parse(<string>localStorage.getItem('credentials')).username;
  }
}
