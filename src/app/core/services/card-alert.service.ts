import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { CardAlertComponent } from '../../components/card-alert/card-alert.component';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card } from '../../../API';
import { CardApiService } from './card-api.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CardAlertService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private cardsService: CardApiService,
    private authService: AuthService
  ) {}

  // Create a BehaviorSubject with an initial value (empty array)
  private cardsSubject: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>([]);
  // Create an Observable from the BehaviorSubject
  public cards$: Observable<Card[]> = this.cardsSubject.asObservable();

  // Function to add an item to the array
  addItem(item: Card): void {
    // Get the current value of the array
    const currentItems = this.cardsSubject.value;
    // Add the new item to the array
    const updatedItems = [...currentItems, item];
    // Update the BehaviorSubject with the new array
    this.cardsSubject.next(updatedItems);
  }

  // Function to clear all items
  clearItems(): void {
    // Update the BehaviorSubject with an empty array
    this.cardsSubject.next([]);
  }

  populateItems(): void {
    this.cardsService.listCards(this.authService.getUserName()).then((response) => {
      this.cardsSubject.next(response.data.listCards.items);
    });
  }

  showAlert(name: string, url: string, id: string, sound: string): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(CardAlertComponent)
      .create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    // NOTE: Please make sure you are using both fields name, and url when creating new popup
    const instance = componentRef.instance as { name: string; url: string; id: string, sound: string, onExit: any };

    instance.name = name;
    instance.url = url;
    instance.id = id;
    instance.sound = sound;

    instance.onExit.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
  }
}
