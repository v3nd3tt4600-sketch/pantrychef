# PantryChef Testing Checklist

## Automated checks

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.

## Manual regression checks

- [ ] Start the app with `npm run dev` and open `http://localhost:5173/`.
- [ ] Confirm Home shows categories after the loading indicator clears.
- [ ] Navigate between Home, search results, a category, a recipe, Favorites, and an unknown URL; confirm the page scrolls to the top after each navigation.
- [ ] Confirm each route updates the browser-tab title. Recipe details should use the loaded recipe name.
- [ ] Search by name for `chicken` and by ingredient for `salmon`; confirm the result mode and recipes match.
- [ ] Search for `zzzzzz` and open `/search` directly; confirm the no-results and start-search states.
- [ ] Click a category and recipe, then use Back; confirm the previous category is restored.
- [ ] Open `/recipe/52772` and `/recipe/99999999`; confirm the recipe and not-found states.
- [ ] Use “Surprise me”; confirm it opens a recipe, disables while loading, and reports an error if the request fails.
- [ ] Save and remove recipes from Favorites; confirm the saved count and list update.
- [ ] At a narrow viewport, confirm the search form, surprise action, cards, and recipe details fit without horizontal scrolling.
- [ ] Navigate the controls with a keyboard and confirm focus remains visible; enable reduced motion and confirm transitions are minimized.
- [ ] Optionally change `categories.php` to `categoriez.php` in `src/services/mealApi.js`, verify Home shows its category error, and restore `categories.php` immediately.
- [ ] Search `pasta`, go Back, then search `beef`; confirm only the latest query's results are shown.