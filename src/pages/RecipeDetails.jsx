import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMealById } from '../services/mealApi';
import { getIngredients, getInstructionSteps } from '../utils/recipeHelpers';
import { useFetch } from '../hooks/useFetch';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import FavoriteButton from '../components/FavoriteButton';
import IngredientList from '../components/IngredientList';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import EmptyState from '../components/EmptyState';
import './RecipeDetails.css';

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { data: meal, loading, error } = useFetch(getMealById, id);
  useDocumentTitle(
    meal?.strMeal
      ? meal.strMeal
      : loading
        ? 'Loading recipe'
        : error
          ? 'Recipe error'
          : 'Recipe not found',
  );

  function handleBack() {
    // "default" means this was the first page opened, so there is no history to go back to
    if (location.key !== 'default') {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  // Derived data: calculated from `meal`, not stored in state
  const ingredients = meal ? getIngredients(meal) : [];
  const steps = meal ? getInstructionSteps(meal.strInstructions) : [];

  return (
    <section className="recipe-details">
      <button type="button" className="recipe-details__back" onClick={handleBack}>
        ← Back
      </button>

      {loading && <Loader />}

      {!loading && error && (
        <ErrorMessage message="We could not load this recipe. Check your connection and try again." />
      )}

      {!loading && !error && !meal && (
        <EmptyState
          title="Recipe not found"
          message="We couldn't find a recipe with that ID. It may have been removed."
        />
      )}

      {!loading && !error && meal && (
        <article className="recipe-details__article">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="recipe-details__image"
          />

          <div className="recipe-details__info">
            <h1>{meal.strMeal}</h1>

            <div className="recipe-details__tags">
              {meal.strCategory && (
                <span className="recipe-details__tag">{meal.strCategory}</span>
              )}
              {meal.strArea && (
                <span className="recipe-details__tag">{meal.strArea}</span>
              )}
            </div>

            <div className="recipe-details__actions">
              <FavoriteButton recipe={meal} showLabel />

              {meal.strYoutube && (
                <a
                  href={meal.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  ▶ Watch video
                </a>
              )}
            </div>

            <h2 className="recipe-details__heading">Ingredients</h2>
            <IngredientList ingredients={ingredients} />
          </div>

          <div className="recipe-details__instructions">
            <h2>Instructions</h2>
            {steps.map((step, index) => (
              <p key={index}>{step}</p>
            ))}
          </div>
        </article>
      )}
    </section>
  );
}

export default RecipeDetails;