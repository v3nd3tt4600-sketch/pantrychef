const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Generic helper: fetches an endpoint and returns the parsed JSON (or null if empty)
async function fetchJson(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  // Some "no match" responses come back empty, so read as text first
  const text = await response.text();
  if (!text) return null;

  return JSON.parse(text);
}

// Meals helper: always returns an array of meals
async function fetchMeals(endpoint) {
  const data = await fetchJson(endpoint);
  return data && Array.isArray(data.meals) ? data.meals : [];
}

export function searchMealsByName(name) {
  return fetchMeals(`search.php?s=${encodeURIComponent(name)}`);
}

export function searchMealsByIngredient(ingredient) {
  // The API expects underscores for spaces: "chicken breast" -> "chicken_breast"
  const formatted = ingredient.trim().replace(/\s+/g, '_');
  return fetchMeals(`filter.php?i=${encodeURIComponent(formatted)}`);
}

export async function getMealById(id) {
  const meals = await fetchMeals(`lookup.php?i=${encodeURIComponent(id)}`);
  return meals[0] || null;
}

export async function getCategories() {
  const data = await fetchJson('categories.php');
  return data && Array.isArray(data.categories) ? data.categories : [];
}

export function getMealsByCategory(category) {
  return fetchMeals(`filter.php?c=${encodeURIComponent(category)}`);
}

export async function getRandomMeal() {
  const meals = await fetchMeals('random.php');
  return meals[0] || null;
}