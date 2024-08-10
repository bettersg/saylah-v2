import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgurService {
  private clientId = 'e9d82bbffe30a17'; // Replace with your actual Client ID
  private apiUrl = 'https://api.imgur.com/3';

  constructor(private http: HttpClient) { }

  uploadImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);

    const headers = new HttpHeaders({
      'Authorization': `Client-ID ${this.clientId}`
    });

    return this.http.post(`${this.apiUrl}/image`, formData, { headers });
  }
}
