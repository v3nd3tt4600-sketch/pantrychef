import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard({ category }) {
  const { strCategory, strCategoryThumb } = category;

  return (
    <Link
      to={`/category/${encodeURIComponent(strCategory)}`}
      className="category-card"
    >
      <img
        src={strCategoryThumb}
        alt=""
        className="category-card__image"
        loading="lazy"
      />
      <span className="category-card__name">{strCategory}</span>
    </Link>
  );
}

export default CategoryCard;
