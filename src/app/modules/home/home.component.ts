import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Card } from '../../../API';
import { CardApiService } from '../../core/services/card-api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements OnInit {
  isMenuOpen = false;
  cards: Card[] = [];
  isLoggedIn = false;

  constructor(private cardsService: CardApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("home");
    this.loadCards();
    this.setup();
  }

  async setup() {
    // await this.authService.isAuthenticated().then(authStatus => {
    //   console.log("authStatus: " + authStatus);
      // this.isLoggedIn = authStatus;
      this.isLoggedIn = this.authService.isAuthenticated();
      console.log("this.isLoggedIn: " + this.isLoggedIn);
    // });
  }

  onLogout() {
      this.authService.logout().then(isLoggedOut => {
      if (isLoggedOut) {
        console.log("You've logged out.");
        this.router.navigate(['/']);
      } else {
        console.log("Unable to log out.");
      }
    });
    // console.log("onLogout 1");
    // const isLoggedOut = this.authService.logout();
    // console.log("onLogout 2");
  }
  
  readText(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }

  async loadCards() {
    try {
      const { username } = await this.cardsService.getCurrentUser();
      const response = await this.cardsService.listCards(username);
      this.cards = response.data.listCards.items;
    } catch (error) {
      console.log('Error fetching cards', error);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}