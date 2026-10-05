# 🍳 PantryChef – Recipe Finder

Search recipes by name or by an ingredient you already have, browse by category, and save your favorites.

**Live demo:** https://v3nd3tt4600-sketch.github.io/pantrychef/

## Features
- Search by recipe name or main ingredient
- Browse recipes by category
- Recipe details with ingredients, instructions, and a video link
- Save favorites (stored in the browser with localStorage)
- "Surprise me" random recipe
- Loading, error, and empty states
- Responsive layout and keyboard-friendly navigation

## Built with
- React (Vite) and JavaScript
- React Router (dynamic routes and query strings)
- Context API for favorites state
- Custom hooks (`useFetch`, `useFavorites`, `useDocumentTitle`)
- [TheMealDB](https://www.themealdb.com) API
- Plain CSS, deployed on GitHub Pages

## Run locally
```bash
git clone https://github.com/v3nd3tt4600-sketch/pantrychef.git
cd pantrychef
npm install
npm run dev
```

## What I learned
- Fetching and normalizing real API data, including race conditions and error handling
- Sharing state with Context and persisting it with localStorage
- Extracting reusable logic into custom hooks
- Deploying a single-page app with client-side routing to GitHub Pages
