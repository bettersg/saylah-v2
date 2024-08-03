import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { EditCardAlertComponent } from '../../components/edit-card-alert/edit-card-alert.component';

@Injectable({
  providedIn: 'root'
})
export class EditCardAlertService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  showAlert(name: string, url: string): void {
    // Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(EditCardAlertComponent)
      .create(this.injector);

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // Append DOM element to the body
    document.body.appendChild(domElem);

    // Set component inputs
    componentRef.instance.name = name;
    componentRef.instance.url = url;

    // Listen to the cancel event and destroy the component
    // Listen to the cancel event and destroy the component
    componentRef.instance.onCancel.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
  }
}
