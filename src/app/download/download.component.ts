import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-download',
  imports: [
    NgForOf
  ],
  templateUrl: './download.component.html',
  standalone: true,
  styleUrl: './download.component.css'
})
export class DownloadComponent {
  files = [
    { name: 'exemple1.zip', url: 'assets/examples/example1.zip' },
    { name: 'Option.java', url: 'assets/examples/game/Option.java' },
    { name: 'Playable.java', url: 'assets/examples/game/Playable.java' },
    { name: 'Strategy.java', url: 'assets/examples/game/Strategy.java' }
  ];

  downloadFile(fileUrl: string) {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop() || 'downloadedFile';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


}
