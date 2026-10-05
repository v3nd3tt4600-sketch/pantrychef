import './IngredientList.css';

function IngredientList({ ingredients }) {
  return (
    <ul className="ingredient-list">
      {ingredients.map((item, index) => (
        <li key={`${item.name}-${index}`} className="ingredient-list__item">
          <span className="ingredient-list__measure">{item.measure}</span>
          <span className="ingredient-list__name">{item.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default IngredientList;