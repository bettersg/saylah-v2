import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../../../API';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { generateId } from '../../../core/fn/uuid';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-card-popup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './create-card-popup.component.html',
  styleUrl: './create-card-popup.component.scss'
})
export class CreateCardPopupComponent {

  form!: FormGroup;

  @Input()
  card: Card | null = null;

  initialCard: Card | null = null;

  @Output()
  createCard: EventEmitter<Card | null> = new EventEmitter<Card | null>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [generateId()],
      name: ["", Validators.required],
      code: ["", Validators.required],
      type: ["", Validators.required],
      image: ["",
        // Validators.required
      ],
      sound: ["", 
        // Validators.required
      ],
    });

    this.form.controls['name'].valueChanges.subscribe(value => {
      this.form.controls['code'].setValue(value.toLowerCase().replace(/\s+/g, '-'));
    });

    this.initialCard = this.form.value;
  }


  save() {

    if (this.form.valid) {
      const changes = this.form.value;
  
      console.log("save: " + JSON.stringify(changes));
  
      this.createCard.next(changes);
    }

  }

  exit() {
    console.log("create card popup component");
    this.createCard.next(null);
    
  }
}