import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRandomMeal } from '../services/mealApi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';

function Home() {
  const navigate = useNavigate();
  const [surpriseLoading, setSurpriseLoading] = useState(false);
  const [surpriseError, setSurpriseError] = useState(false);

  useDocumentTitle();

  function handleSearch(query, type) {
    const params = new URLSearchParams({ q: query, type });
    navigate(`/search?${params.toString()}`);
  }

  async function handleSurprise() {
    setSurpriseLoading(true);
    setSurpriseError(false);

    try {
      const meal = await getRandomMeal();

      if (meal) {
        navigate(`/recipe/${meal.idMeal}`);
      } else {
        setSurpriseError(true);
      }
    } catch (err) {
      console.error(err);
      setSurpriseError(true);
    } finally {
      setSurpriseLoading(false);
    }
  }

  return (
    <>
      <Hero onSearch={handleSearch}>
        <button
          type="button"
          className="hero__surprise"
          onClick={handleSurprise}
          disabled={surpriseLoading}
        >
          {surpriseLoading ? 'Finding a recipe...' : '🎲 Surprise me'}
        </button>

        {surpriseError && (
          <p className="hero__error" role="alert">
            We couldn't get a random recipe. Please try again.
          </p>
        )}
      </Hero>
      <CategorySection />
    </>
  );
}

export default Home;