import { Link, NavLink } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import './Header.css';

function getLinkClass({ isActive }) {
  return isActive ? 'header__link header__link--active' : 'header__link';
}

function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon" aria-hidden="true">
            🍳
          </span>
          PantryChef
        </Link>

        <nav className="header__nav" aria-label="Main navigation">
          <NavLink to="/" end className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/favorites" className={getLinkClass}>
            Favorites
            {favorites.length > 0 && (
              <span
                className="header__badge"
                aria-label={`${favorites.length} saved`}
              >
                {favorites.length}
              </span>
            )}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;