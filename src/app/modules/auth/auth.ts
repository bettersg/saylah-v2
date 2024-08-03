export interface Header {
  logo: string;
  title?: string;
  subtitle?: string;
  navLinks: NavLink[];
}
export interface Footer {
  contactInfo: string;
  privacyPolicy: string;
  termsOfService: string;
  socialMediaLinks: SocialMediaLink[];
}

export interface NavLink {
  name: string;
  url: string;
}

export interface SocialMediaLink {
  platform: string;
  url: string;
}

export interface SignInSignUpPage {
  header: Header;
  signUpForm: SignUpForm;
  signInForm: SignInForm;
  socialMediaSignIn: SocialMediaSignIn[];
  footer: Footer;
}

export interface SignUpForm {
  email: string;
  password: string;
  confirmPassword: string;
  signUpButton: string;
}

export interface SignInForm {
  email: string;
  password: string;
  signInButton: string;
}

export interface SocialMediaSignIn {
  platform: string;
  signInUrl: string;
}

export const authData: SignInSignUpPage = {
      header: {
        title: 'Welcome to SayLah',
        subtitle: 'Sign in or Sign up to get the latest news updates',
        logo: 'assets/img/betterwordlogo@0.5x.png',
        navLinks: []
      },
      signUpForm: {
        email: '',
        password: '',
        confirmPassword: '',
        signUpButton: 'Proceed'
      },
      signInForm: {
        email: '',
        password: '',
        signInButton: 'Sign In'
      },
      socialMediaSignIn: [
        {
          platform: 'Google',
          signInUrl: 'https://accounts.google.com/signin'
        },
        // {
        //   platform: 'Facebook',
        //   signInUrl: 'https://www.facebook.com/login'
        // },
        // {
        //   platform: 'Twitter',
        //   signInUrl: 'https://twitter.com/login'
        // }
      ],
      footer: {
        contactInfo: 'Contact us at support@dailynewsound.com',
        socialMediaLinks: [
          { platform: 'Twitter', url: 'https://twitter.com/bettersg' },
          { platform: 'Facebook', url: 'https://facebook.com/bettersg' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/company/bettersg' }
        ],
        privacyPolicy: "",
        termsOfService: ""
      }
    };