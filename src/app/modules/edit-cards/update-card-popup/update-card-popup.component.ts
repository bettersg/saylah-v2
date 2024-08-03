import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Card } from '../../../../API';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-card-popup',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './update-card-popup.component.html',
  styleUrl: './update-card-popup.component.scss'
})
export class UpdateCardPopupComponent implements OnChanges {

  form!: FormGroup;

  @Input()
  card: Card | null = null;

  initialCard: Card | null = null;

  @Output()
  updateCard: EventEmitter<Card | null> = new EventEmitter<Card | null>();

  constructor(private fb: FormBuilder) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.card) {
        this.form = this.fb.group({
          id: [this.card.id],
          name: [this.card.name, Validators.required],
          code: [this.card.code, Validators.required],
          type: [this.card.type, Validators.required],
          image: [this.card.image,
            // Validators.required
          ],
          sound: [this.card.sound,
            // Validators.required
          ],
      });
      this.form.controls['name'].valueChanges.subscribe(value => {
        this.form.controls['code'].setValue(value.toLowerCase().replace(/\s+/g, '-'));
      });
  
      this.initialCard = this.form.value;
    }
  }

  save() {

    if (this.form.valid) {

      const changes = this.form.value;

      this.updateCard.next(changes);
    }

  }

  exit() {
    
    this.updateCard.next(this.initialCard);
    
  }
}
