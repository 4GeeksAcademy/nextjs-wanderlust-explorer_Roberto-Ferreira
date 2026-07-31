export type Category = "Adventure" | "Culture" | "Food" | "Wellness" | "Nature";

export interface Destination {
  city: string;
  country: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: Category;
  destination: Destination | string;
  price: number;
  rating: number;
  imageUrl: string;
}