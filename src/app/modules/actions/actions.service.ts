import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay, tap, map } from 'rxjs';
import { Card } from '../../core/interface/card';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private http: HttpClient) { }

  action: BehaviorSubject<Card> = new BehaviorSubject({} as Card);
  action$: Observable<Card> = this.action.asObservable();

  actions: BehaviorSubject<Card[]> = new BehaviorSubject([] as Card[]);
  actions$: Observable<Card[]> = this.actions.asObservable();

  found: boolean = false;
  defaultAction = { name: "Action", code: "action"};

  fetchActions(): Observable<Card[]> {
    return this.http.get<Card[]>('assets/json/sample-actions.json')
      .pipe(
        shareReplay(),
        tap(actions => {
            this.actions.next(actions);
          })
      );
  }

  fetchActionByCode(code: string) {
    return this.http.get<Card>('assets/json/sample-actions.json')
      .pipe(
        map(data => this.search(data, code)),
        tap(() => this.found = false),
      );
  }

  search(data: Card, code: string): Card {
    if (data.code === code && !this.found) {
      this.found = true;
      this.action.next(data);
      return data;
    } else {
      if (data.cards && data.cards.length > 0) {
        for (let card of data.cards) {
          this.search(card, code);
        }
      }
    }
    return this.defaultAction;
  }
}
