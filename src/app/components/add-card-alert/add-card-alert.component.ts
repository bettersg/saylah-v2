import { Component } from '@angular/core';
import { EditCardAlertComponent } from '../edit-card-alert/edit-card-alert.component';

@Component({
  selector: 'app-add-card-alert',
  standalone: true,
  imports: [
    EditCardAlertComponent
  ],
  templateUrl: './add-card-alert.component.html',
  styleUrl: './add-card-alert.component.scss'
})
export class AddCardAlertComponent {

  name: string = '';
  url: string = '';
}
