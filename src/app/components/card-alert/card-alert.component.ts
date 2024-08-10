import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Card, CreateCardInput, UpdateCardInput } from '../../../API';
import { CardMapperService } from '../../core/service/card-mapper.service';
import { AuthService } from '../../core/services/auth.service';
import { CardApiService } from '../../core/services/card-api.service';
import { ImgurService } from '../../core/services/imgur.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { CardAlertService } from '../../core/services/card-alert.service';

@Component({
  selector: 'app-card-alert',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './card-alert.component.html',
  styleUrl: './card-alert.component.scss'
})
export class CardAlertComponent implements OnInit, OnDestroy {
  @Input() id: string = '';  // Assuming you also need an ID for updates
  @Input() name: string = '';
  @Input() url: string = '';
  @Input() sound = '';
  action = 'Create';
  @Output() onExit = new EventEmitter<void>();
  isSubmitted: boolean = false;

  showAlert = true;
  selectedFile: File | null = null;

  constructor(
    private imgurService: ImgurService,
    private cardApiService: CardApiService,
    private cardMapperService: CardMapperService,
    private authService: AuthService,
    private location: Location,
    private router: Router,
    private cardAlertService: CardAlertService
  ) {}
  ngOnDestroy(): void {
    this.router.navigate(['/edit']);
  }

  ngOnInit(): void {
    if (this.name === '' && this.url === '') {
      this.action = 'Create';
    } else {
      this.action = 'Update';
    }
  }

  saveGroup(): void {
    console.log("save group: " + this.isSubmitted);
    this.isSubmitted = true;

    console.log("save group: " + this.isSubmitted);
    if (this.url === '' || this.name === '') {
      // If the URL is not provided, the form should not be submitted
      alert('Name/Image is required.');
      this.isSubmitted = false;
      return;
    }

    if (this.action === 'Create') {
      this.createCard();
    } else {
      this.updateCard();
    }
  }

  updateCard() {
    console.log("this.id: " + this.id + ", this.authService.getUserName(): " + this.authService.getUserName()
      + ", this.name: " + this.name + ", this.url: " + this.url + ", this.sound: " + this.sound);
    const cardInput: UpdateCardInput = this.cardMapperService.mapToUpdateCardInput(
      this.id, // Ensure ID is passed
      this.name,
      this.url,
      this.sound,
      "card",
      this.name,
      this.authService.getUserName(),
      "null",
      "null",
    );
    this.cardApiService.updateCard(cardInput)
      .then(result => {
        alert('Successfully updated card!');
        this.cardAlertService.clearItems();
        this.cardAlertService.populateItems();
      })
      .catch(err => {
        alert('Something went wrong - please try again: ' + JSON.stringify(err));
      })
      .finally(() => {
        this.isSubmitted = false;
        this.onExit.emit();
      });
  }

  createCard() {
    const cardInput: CreateCardInput = this.cardMapperService.mapToCreateCardInput(
      this.name,
      this.name,
      "card",
      this.url,
      this.sound,
      this.authService.getUserName(),
      "null",
      "null",
      // this.sound,
    );
    this.cardApiService.createCard(cardInput)
      .then(result => {
        alert('Successfully created card!');
        // this.cardAlertService.addItem()
        this.cardAlertService.clearItems();
        this.cardAlertService.populateItems();
      })
      .catch(err => {
        alert('Something went wrong - please try again: ' + JSON.stringify(err));
      })
      .finally(() => {
        this.isSubmitted = false;
        this.onExit.emit();
      });
  }

  cancel(): void {
    this.showAlert = false;
    this.isSubmitted = false;
    this.onExit.emit();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.uploadImage();
  }

  uploadImage(): void {
    if (this.selectedFile) {
      this.imgurService.uploadImage(this.selectedFile).subscribe(
        (response: any) => {
          alert('Successfully uploaded image: ' + JSON.stringify(response));
          this.url = response.data.link;
        },
        (error: any) => {
          alert('Error uploading image: ' + JSON.stringify(error));
          this.url = ''; // Reset URL if upload fails
        }
      );
    }
  }

  removeImage(): void {
    this.url = '';
    this.selectedFile = null;
  }
}