export interface Game {
  id: number;
  title: string;
  image: string;
  size: string;
  rating: number;
  language: string;
  releaseYear?: number;  // Optional since we're using a fallback in GameCard
}