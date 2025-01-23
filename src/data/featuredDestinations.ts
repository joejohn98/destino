export interface FeaturedDestination {
  id: string;
  name: string;
  image: string;
  country: string;
  rating: number;
  description: string;
}

export const featuredDestinations: FeaturedDestination[] = [
  {
    id: "eiffel-tower",
    name: "Eiffel Tower",
    image: "https://i.postimg.cc/RZtZ8FTC/eiffel-Tower.jpg",
    country: "France",
    rating: 4.7,
    description:
      "Iconic iron lattice tower on the Champ de Mars in Paris, named after engineer Gustave Eiffel.",
  },
  {
    id: "grand-canyon",
    name: "Grand Canyon",
    image: "https://i.postimg.cc/Y9PcMNp5/grand-Canyon.jpg",
    country: "USA",
    rating: 4.9,
    description:
      "A grand canyon in the United States, known for its beauty and diversity.",
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    image: "https://i.postimg.cc/Pq0kFVGL/machu-picchu.jpg",
    country: "Peru",
    rating: 4.9,
    description:
      "Ancient Incan city set high in the Andes Mountains, a marvel of engineering and architecture.",
  },
  {
    id: "pyramids-of-giza",
    name: "Piramids of Giza",
    image: "https://i.postimg.cc/1t4fDjGf/pyramids-of-giza-2.jpg",
    country: "Egypt",
    rating: 4.8,
    description:
      "The pyramids of Giza are ancient wonders and symbols of Egypt.",
  },
];
