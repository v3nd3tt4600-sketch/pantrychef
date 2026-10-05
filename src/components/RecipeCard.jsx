import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import './RecipeCard.css';

function RecipeCard({ recipe }) {
  const { idMeal, strMeal, strMealThumb, strCategory } = recipe;

  return (
    <article className="recipe-card">
      <Link to={`/recipe/${idMeal}`} className="recipe-card__link">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="recipe-card__image"
          loading="lazy"
        />
        <div className="recipe-card__body">
          <h3 className="recipe-card__title">{strMeal}</h3>
          {strCategory && (
            <span className="recipe-card__category">{strCategory}</span>
          )}
        </div>
      </Link>

      <FavoriteButton recipe={recipe} className="recipe-card__favorite" />
    </article>
  );
}

export default RecipeCard;