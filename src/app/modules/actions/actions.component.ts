import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../core/interface/card';
import { SpeechSynthesisService } from '../../core/services/speech-synthesis.service';
import { ActionsService } from './actions.service';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CardComponent, CommonModule, RouterModule],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ActionsComponent  implements OnInit, OnDestroy {

  constructor(private service: ActionsService, private route: ActivatedRoute,
    private speechService: SpeechSynthesisService, private location: Location) {}
  action$: Observable<Card> = this.service.action$;

  subscription!: Subscription;

  showAlert() {
  }
  
  ngOnInit(): void {
    this.route.url.subscribe(segments => {
      const currentUrl = segments.map(segment => { 
        return segment.path}).join('/');
      if (currentUrl) {
        this.subscription = this.service.fetchActionByCode(currentUrl.split('/')[segments.length-1]).subscribe();
      } else {
        this.subscription = this.service.fetchActionByCode('actions').subscribe();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  say(card: Card) {
    this.speechService.play(card.name);
  }
  
  back() {
    this.location.back();
  }
}
