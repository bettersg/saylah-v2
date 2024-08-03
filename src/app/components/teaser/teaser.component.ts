import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';

@Component({
  selector: 'app-teaser',
  standalone: true,
  imports: [],
  templateUrl: './teaser.component.html',
  styleUrl: './teaser.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeaserComponent {

  @Input()
  title = "Exciting Updates Coming Soon!";

  @Input()
  body = "We're working hard behind the scenes to bring you something special! Stay tuned as we prepare to unveil exceiting updates and new features. In the meantime, thank you for your patience and continues support. We can't wait to share what we have in store with you."

  @Input()
  topic = "coming-soon";

}
