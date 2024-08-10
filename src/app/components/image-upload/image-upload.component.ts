import { Component } from '@angular/core';
import { ImgurService } from '../../core/services/imgur.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.scss'
})
export class ImageUploadComponent {

  selectedFile: File | null = null;
  imageUrl: string | null = null;

  constructor(private imgurService: ImgurService) { }

  onFileSelected(event: any): void {
    console.log("onFileSelected");
    this.selectedFile = event.target.files[0];
  }

  onUpload(): void {
    console.log("onUpload");
    if (this.selectedFile) {
      this.imgurService.uploadImage(this.selectedFile).subscribe(
        (response: any) => {
          this.imageUrl = response.data.link;
        },
        (error: any) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }
}
