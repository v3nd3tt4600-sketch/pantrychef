import { useEffect, useState } from 'react';
import { FavoritesContext } from './FavoritesContext';

const STORAGE_KEY = 'pantrychef-favorites';

function loadFavorites() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Could not read favorites from localStorage', err);
    return [];
  }
}

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(loadFavorites);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.error('Could not save favorites to localStorage', err);
    }
  }, [favorites]);

  function isFavorite(id) {
    return favorites.some((item) => item.idMeal === id);
  }

  function toggleFavorite(meal) {
    setFavorites((current) => {
      const exists = current.some((item) => item.idMeal === meal.idMeal);

      if (exists) {
        return current.filter((item) => item.idMeal !== meal.idMeal);
      }

      return [
        ...current,
        {
          idMeal: meal.idMeal,
          strMeal: meal.strMeal,
          strMealThumb: meal.strMealThumb,
          strCategory: meal.strCategory || '',
        },
      ];
    });
  }

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesProvider;
