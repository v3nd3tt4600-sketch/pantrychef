import { getCategories } from '../services/mealApi';
import { useFetch } from '../hooks/useFetch';
import CategoryCard from './CategoryCard';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import './CategorySection.css';

function CategorySection() {
  const { data, loading, error } = useFetch(getCategories);
  const categories = data || [];

  return (
    <section className="category-section">
      <h2>Browse by category</h2>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage message="We could not load the categories." />
      )}

      {!loading && !error && (
        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CategorySection;
