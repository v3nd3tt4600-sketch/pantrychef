import RecipeCard from './RecipeCard';
import './RecipeGrid.css';

function RecipeGrid({ recipes }) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeGrid;