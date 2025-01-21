export interface Destination {
    id: number;
    name: string;
    description: string;
    image: string;
    ratings: number;
    reviews: number;
    location: string;
    openingHours: string;
    ticketPrice: string;
    website: string;
  }
  
  export interface Country {
    id: number;
    name: string;
    image: string;
    destinations: Destination[];
  }
  
  export interface Continent {
    id: number;
    name: string;
    image: string;
    countries: Country[];
  }
  
  export interface TravelData {
    continents: Continent[];
  }