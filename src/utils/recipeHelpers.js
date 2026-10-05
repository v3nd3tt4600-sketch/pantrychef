export function getIngredients(meal) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (name && name.trim() !== '') {
      ingredients.push({
        name: name.trim(),
        measure: measure ? measure.trim() : '',
      });
    }
  }

  return ingredients;
}

export function getInstructionSteps(instructions) {
  if (!instructions) return [];

  return instructions
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line !== '');
}