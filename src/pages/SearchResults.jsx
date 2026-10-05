import { Link, useSearchParams } from 'react-router-dom';
import {
  searchMealsByName,
  searchMealsByIngredient,
} from '../services/mealApi';
import { useFetch } from '../hooks/useFetch';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import RecipeGrid from '../components/RecipeGrid';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';

function SearchResults() {
  const [searchParams] = useSearchParams();

  const query = (searchParams.get('q') || '').trim();
  const type = searchParams.get('type') === 'ingredient' ? 'ingredient' : 'name';
  useDocumentTitle(
    query
      ? `${type === 'ingredient' ? 'Ingredient search' : 'Search'}: ${query}`
      : 'Search',
  );

  const searchFn =
    type === 'ingredient' ? searchMealsByIngredient : searchMealsByName;

  const { data, loading, error } = useFetch(searchFn, query, { skip: !query });
  const meals = data || [];

  let content;

  if (!query) {
    content = (
      <EmptyState
        title="Start a search"
        message="Type a recipe name or an ingredient on the home page."
      />
    );
  } else if (loading) {
    content = <Loader />;
  } else if (error) {
    content = (
      <ErrorMessage message="We could not load recipes. Check your connection and try again." />
    );
  } else if (meals.length === 0) {
    content = (
      <EmptyState
        title="No recipes found"
        message={`We couldn't find anything for "${query}". Try a different word or switch the search type.`}
      />
    );
  } else {
    content = <RecipeGrid recipes={meals} />;
  }

  return (
    <section>
      <h1>Search results</h1>

      {query && (
        <p>
          Showing {type} results for <strong>"{query}"</strong>
          {!loading && !error && meals.length > 0 && ` (${meals.length} found)`}
        </p>
      )}

      {content}

      <Link to="/" className="btn">
        New search
      </Link>
    </section>
  );
}

export default SearchResults;