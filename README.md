# Destino - Travel Destination Explorer

A modern, feature-rich travel destination explorer built with React, TypeScript, and Tailwind CSS. Destino helps travelers discover and learn about destinations worldwide, with detailed information about continents, countries, and specific locations.

## Features

- Dark/Light theme support
- Fully responsive design
- Hierarchical navigation (Continents → Countries → Destinations)
- Detailed destination information including:
  - Opening hours
  - Ticket prices
  - Ratings and reviews
  - Location details
  - Website links
- Featured destinations showcase
- Toast notifications for user feedback
- Modern, clean UI with Tailwind CSS
- Global coverage of destinations

## Project Structure

```
src/
├── components/          # Reusable UI components
│   |── common/          # Common components used across pages
│   │   ├── BackButton.tsx
│   │   ├── FeatureCard.tsx
│   │   └── FeaturedDestinationCard.tsx
│   ├── features/       # Feature-specific components
│   │   └── FeaturedDestinationCard.tsx
│   ├── layout/         # Layout components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
├── context/
│   └── ThemeContext.tsx # Theme management (dark/light)
├── data/
│   ├── index.ts       # Shared data and configurations
│   └── featuredDestinations.ts # Featured destination data
├── pages/              # Application pages
│   ├── Homepage.tsx    # Landing page with featured content
│   ├── ContinentsPage.tsx
│   ├── CountriesPage.tsx
│   ├── DestinationDetailPage.tsx
│   └── DestinationsPage.tsx
├── types/              # TypeScript type definitions
│   └── index.ts       # Shared interface definitions
└── App.tsx             # Main application component
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Router DOM v6
- React Hot Toast
- Lucide React (Icons)
- Vite (Build tool)

## Data Structure

The application uses a hierarchical data structure:

- Continents contain multiple countries
- Countries contain multiple destinations
- Each destination includes:
  - Basic info (name, description, image)
  - Practical details (opening hours, ticket prices)
  - User feedback (ratings, reviews)
  - Location and contact information

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository

```bash
git clone https://github.com/joejohn98/destino.git
cd destino
```

2. Install dependencies

```bash
npm install
```

## Development

To start the development server:

```bash
npm run dev
```

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Code Quality

The project includes:

- ESLint for code linting
- TypeScript for type safety
- Tailwind CSS for styling
- PostCSS for CSS processing

To run linting:

```bash
npm run lint
```

## Component Details

### Pages

- `Homepage`: Landing page with featured destinations and key features
- `ContinentsPage`: Overview of available continents
- `CountriesPage`: Countries within a selected continent
- `DestinationsPage`: Destinations within a selected country
- `DestinationDetailPage`: Comprehensive destination information

### Core Components

- `Navbar`: Navigation with theme toggle
- `Footer`: Site footer with links and information
- `BackButton`: Navigation helper
- `FeatureCard`: Displays app features
- `FeaturedDestinationCard`: Showcases popular destinations

### Context

- `ThemeContext`: Manages application-wide theme preferences

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
