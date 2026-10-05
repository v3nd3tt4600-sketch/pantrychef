import { useFavorites } from '../hooks/useFavorites';
import './FavoriteButton.css';

function FavoriteButton({ recipe, showLabel = false, className = '' }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(recipe.idMeal);

  const classes = [
    'favorite-btn',
    active ? 'favorite-btn--active' : '',
    showLabel ? 'favorite-btn--labeled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type="button"
      className={classes}
      onClick={() => toggleFavorite(recipe)}
      aria-pressed={active}
      aria-label={
        active
          ? `Remove ${recipe.strMeal} from favorites`
          : `Add ${recipe.strMeal} to favorites`
      }
    >
      <span aria-hidden="true">{active ? '♥' : '♡'}</span>
      {showLabel && <span>{active ? 'Saved' : 'Save to favorites'}</span>}
    </button>
  );
}

export default FavoriteButton;
