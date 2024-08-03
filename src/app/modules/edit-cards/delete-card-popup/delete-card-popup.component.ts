import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-card-popup',
  standalone: true,
  imports: [],
  templateUrl: './delete-card-popup.component.html',
  styleUrl: './delete-card-popup.component.scss'
})
export class DeleteCardPopupComponent {

  @Output() deleteConfirmed = new EventEmitter<boolean>();

  confirm() {
    this.deleteConfirmed.emit(true);
  }

  cancel() {
    this.deleteConfirmed.emit(false);
  }
}
