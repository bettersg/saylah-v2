import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TeaserComponent } from '../../components/teaser/teaser.component';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavbarComponent, TeaserComponent, ReactiveFormsModule, CommonModule, FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      emailOrNumber: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      // Handle form submission
      console.log(this.contactForm.value);
    }
  }
}
