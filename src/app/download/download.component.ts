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
    { name: 'File1.java', url: 'assets/files/File1.java' },
    { name: 'File2.java', url: 'assets/files/File2.java' },
    { name: 'File3.java', url: 'assets/files/File3.java' }
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
