import SearchBar from './SearchBar';
import './Hero.css';

function Hero({ onSearch, children }) {
  return (
    <section className="hero">
      <h1 className="hero__title">What's in your pantry?</h1>
      <p className="hero__subtitle">
        Search by recipe name or by an ingredient you already have, and find
        something delicious to cook tonight.
      </p>
      <SearchBar onSearch={onSearch} />
      {children && <div className="hero__extra">{children}</div>}
    </section>
  );
}

export default Hero;