import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { fetchUserAttributes, FetchUserAttributesOutput, updateUserAttributes, UpdateUserAttributesInput } from 'aws-amplify/auth';
import { signOut } from 'aws-amplify/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public authenticator: AuthenticatorService) { }

  userName = "No username provided";
  userEmail = "No email provided";
  userBirthdate = "No birthdate provided";
  userAttributes!: FetchUserAttributesOutput;

  isAuthenticated() {
    try {
      const user = this.authenticator.route;
      console.log("user: " + user);
      return user === "authenticated";
    } catch (error) {
      return false;
    }
  }

  fetchUserName() {
    if (this.authenticator.authStatus === 'authenticated') {
      this.userName = this.authenticator.user.username;
    }
  }

  getUserName(): string {
    if (this.userName === "No username provided") {
      this.fetchUserName();
    }
    return this.userName;
  }
  
  async fetchUserEmail() {
    try {
      const userAttributes = await fetchUserAttributes();
      this.userEmail = userAttributes.email ?? this.userEmail;
      return this.userEmail;
    } catch (error) {
      return this.userEmail;
    }
  }

  getUserEmail(): string {
    return this.userEmail;
  }

  async fetchBirthdate() {
    try {
      const userAttributes = await fetchUserAttributes();
      this.userBirthdate = userAttributes.birthdate ?? this.userBirthdate;
      return this.userBirthdate;
    } catch (error) {
      return this.userBirthdate;
    }
    
  }

  getBirthdate(): string {
    return this.userBirthdate;
  }

  async getUserAttributes() {
    try {
      const attributes = await fetchUserAttributes().then(
        userAttributes => {
          this.userAttributes = userAttributes;
        }
      );
      return this.userAttributes;
    } catch (error) {
      console.error('Error getting user attributes:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await signOut({ global: true });
      return true;
    } catch (error) {
      return false;
    }
  }

  async updateUserAttribute(userAttributes: any) {
    try {
      const input: UpdateUserAttributesInput = {
        userAttributes: userAttributes
      };
      const user = await updateUserAttributes(input).then(
        () => {
          console.log("profile updated");
        }
      );
    } catch (error) {
      console.error('Error updating user attributes:', error);
      throw error;
    }
  }
}
