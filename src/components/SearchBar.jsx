import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('name');

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedQuery = query.trim();
    if (trimmedQuery === '') return;

    onSearch(trimmedQuery, searchType);
  }

  const placeholder =
    searchType === 'name'
      ? 'Search recipes, e.g. Lasagne'
      : 'Search by main ingredient, e.g. chicken';

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__toggle" role="group" aria-label="Search by">
        <button
          type="button"
          className={
            searchType === 'name'
              ? 'search-bar__option search-bar__option--active'
              : 'search-bar__option'
          }
          aria-pressed={searchType === 'name'}
          onClick={() => setSearchType('name')}
        >
          Recipe name
        </button>
        <button
          type="button"
          className={
            searchType === 'ingredient'
              ? 'search-bar__option search-bar__option--active'
              : 'search-bar__option'
          }
          aria-pressed={searchType === 'ingredient'}
          onClick={() => setSearchType('ingredient')}
        >
          Ingredient
        </button>
      </div>

      <div className="search-bar__row">
        <input
          type="search"
          className="search-bar__input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          aria-label="Search recipes"
          autoComplete="off"
          required
        />
        <button type="submit" className="search-bar__submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;