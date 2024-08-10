import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardAlertService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  showAlert(name: string, url: string, component: any): void {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    // NOTE: Please make sure you are using both fields name, and url when creating new popup
    const instance = componentRef.instance as { name: string; url: string; onCancel: any };

    instance.name = name;
    instance.url = url;

    instance.onCancel.subscribe(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
  }
}
