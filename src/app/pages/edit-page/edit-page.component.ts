import { Component } from '@angular/core';
import { EditComponent } from '../../modules/edit/edit.component';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [
    EditComponent
  ],
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})
export class EditPageComponent {

}
