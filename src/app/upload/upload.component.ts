import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-upload',
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './upload.component.html',
  standalone: true,
  styleUrl: './upload.component.css'
})
export class UploadComponent {

  file: File | null = null;  // file can be null initially
  message = '';
  isSuccess = false;

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.name.endsWith('.java')) {
      this.file = selectedFile;
      this.message = '';
    } else {
      this.message = 'Please select a .java file!';
      this.isSuccess = false;
    }
  }

  uploadFile(): void {
    if (this.file) {  // Check if file is selected
      // Simulate file upload
      setTimeout(() => {
        // Here you can add logic to simulate success or error based on file validation
        if (this.file!.name.endsWith('.java')) {  // Use non-null assertion here
          this.message = 'File uploaded successfully!';
          this.isSuccess = true;
        } else {
          this.message = 'File upload failed!';
          this.isSuccess = false;
        }
      }, 1000);  // Simulate delay
    }
  }

}
