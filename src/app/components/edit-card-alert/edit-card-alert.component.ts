import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './edit-card-alert.component.html',
  styleUrl: './edit-card-alert.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditCardAlertComponent {
  @Input() name: string = '';
  @Input() url: string = '';
  @Output() onCancel = new EventEmitter<void>();

  showAlert = true;

  saveGroup(): void {
    // Save logic here
  }

  cancel(): void {
    this.showAlert = false;
    this.onCancel.emit();
  }

  uploadImage(): void {
    // Logic to upload image from device
  }

  removeImage(): void {
    this.url = '';
  }
}