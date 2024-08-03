export interface Card {
  name: string;
  code: string;
  image?: string;
  sound?: string;
  cards?: Card[];
}