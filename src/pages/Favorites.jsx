import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import RecipeGrid from '../components/RecipeGrid';
import EmptyState from '../components/EmptyState';

function Favorites() {
  const { favorites } = useFavorites();
  useDocumentTitle('Favorites');

  return (
    <section>
      <h1>Your favorites</h1>

      {favorites.length === 0 ? (
        <>
          <EmptyState
            title="No favorites yet"
            message="Tap the heart on any recipe to save it here."
          />
          <Link to="/" className="btn">
            Find recipes
          </Link>
        </>
      ) : (
        <>
          <p>
            {favorites.length} saved{' '}
            {favorites.length === 1 ? 'recipe' : 'recipes'}
          </p>
          <RecipeGrid recipes={favorites} />
        </>
      )}
    </section>
  );
}

export default Favorites;