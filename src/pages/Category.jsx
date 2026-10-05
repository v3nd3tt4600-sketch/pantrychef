import { Link, useParams } from 'react-router-dom';
import { getMealsByCategory } from '../services/mealApi';
import { useFetch } from '../hooks/useFetch';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import RecipeGrid from '../components/RecipeGrid';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';

function Category() {
  const { name } = useParams();
  useDocumentTitle(`${name} recipes`);

  const { data, loading, error } = useFetch(getMealsByCategory, name);
  const meals = data || [];

  return (
    <section>
      <h1>{name} recipes</h1>

      {!loading && !error && meals.length > 0 && (
        <p>{meals.length} recipes found</p>
      )}

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage message="We could not load recipes for this category." />
      )}

      {!loading && !error && meals.length === 0 && (
        <EmptyState
          title="No recipes found"
          message="This category is empty or doesn't exist."
        />
      )}

      {!loading && !error && meals.length > 0 && <RecipeGrid recipes={meals} />}

      <Link to="/" className="btn">
        ← All categories
      </Link>
    </section>
  );
}

export default Category;
