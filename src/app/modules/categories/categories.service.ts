import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, shareReplay, tap } from 'rxjs';
import { Card } from '../../core/interface/card';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }

  category: BehaviorSubject<Card> = new BehaviorSubject({} as Card);
  category$: Observable<Card> = this.category.asObservable();

  categories: BehaviorSubject<Card[]> = new BehaviorSubject([] as Card[]);
  categories$: Observable<Card[]> = this.categories.asObservable();

  found: boolean = false;
  defaultCategory = { name: "Category", code: "category"};

  fetchCategories(): Observable<Card[]> {
    return this.http.get<Card[]>('assets/json/sample-categories.json')
      .pipe(
        shareReplay(),
        tap(categories => {
            this.categories.next(categories);
          })
      );
  }

  fetchCategoryByCode(code: string) {
    return this.http.get<Card>('assets/json/sample-categories.json')
      .pipe(
        map(data => this.search(data, code)),
        tap(() => this.found = false),
      );
  }

  search(data: Card, code: string): Card {
    if (data.code === code && !this.found) {
      this.found = true;
      this.category.next(data);
      return data;
    } else {
      if (data.cards && data.cards.length > 0) {
        for (let card of data.cards) {
          this.search(card, code);
        }
      }
    }
    return this.defaultCategory;
  }

}
