# PlanetRandomItems

PlanetRandomItems is a React-based e-commerce application that allows users to browse products, add items to their cart, and manage their cart. The state management for the cart is handled using Zustand, and the app uses Bootstrap components and CSS for styling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

## Features

- Browse a list of products fetched from an external API.
- Add items to the cart and manage the cart contents.
- Persistent cart state using Zustand and local storage.
- Responsive design with Bootstrap.
- Clear and user-friendly interface.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Zustand**: State management library.
- **Bootstrap**: CSS framework for responsive design.
- **React Bootstrap**: Bootstrap components for React.
- **React Icons**: Collection of popular icons.
- **React Router**: Library for routing in React applications.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krohdee/planet-random-items.git
   cd planet-random-items

2. Install the dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

The application should now be running at `http://localhost:3000`.

## Folder Structure
```
src/
  components/
    CartModal.css
    CartModal.js
    DescriptionModal.css
    DescriptionModal.js
    ItemCard.css
    ItemCard.js
    Navbar.css
    Navbar.js
  pages/
    Home.css
    Home.js
    Shop.css
    Shop.js
  store/
    useCartStore.js
  App.js
  index.js
  RouteSwitch.js
  index.css
```

- **components/**: Contains reusable UI components + CSS files.
- **pages/**: Contains the main pages of the application (Home, Shop) + CSS files.
- **store/**: Contains the Zustand store for state management.

## Usage

### Adding Items to the Cart

1. Browse the items listed on the Shop page.
2. Click the "Add to Cart" button on an item to add it to your cart.
3. The cart icon will display the number of items in the cart on larger screens.

### Managing the Cart

1. Click the cart icon to open the cart modal.
2. View the items in your cart or remove items.
3. The cart state is persistent and will be saved across page reloads.

