import {Component, Inject, PLATFORM_ID} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgClass, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {UploadAPI} from '../config';
import {response} from 'express';

@Component({
  selector: 'app-upload',
  imports: [
    NgClass,
    NgIf,
    FormsModule
  ],
  templateUrl: './upload.component.html',
  standalone: true,
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  file: string = "import java.util.*;\n\npublic class Strategy implements Playable{\n\n\tpublic Strategy(){}\n\n}";
  message = '';
  isSuccess = false;
  constructor(
    private http: HttpClient,
  ) {}
  resetFile():void{
    this.file="import java.util.*;\n\npublic class Strategy implements Playable{\n\n\tpublic Strategy(){}\n\n}";
  }
  uploadFile(): void {
    if (!this.file) {
      console.log("ERROR: No file content provided");
      return;
    }

    const formData = new FormData();
    formData.append('code', this.file);
    formData.append('credentials',<string> localStorage.getItem('credentials'))
    this.http.post<{ success: boolean; message: string }>(UploadAPI, formData)
      .subscribe({
        next: (response) => {
          this.message = response.message;
          this.isSuccess = response.success;
        },
        error: (error) => {console.log(error)
          this.message = error.statusMessage;
          this.isSuccess = false;
        }
      });
  }

}
