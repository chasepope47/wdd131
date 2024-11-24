import recipes from './recipes.mjs';

function randomRecipe() {
  const index = Math.floor(Math.random() * recipes.length);
  return recipes[index];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? `<span aria-hidden="true">⭐</span>` : `<span aria-hidden="true">☆</span>`;
  }
  html += '</span>';
  return html;
}

function recipeTemplate(recipe) {
  return `
    <img src="${recipe.image}" alt="${recipe.name}" />
    <div class="recipe-details">
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <ul class="tags">${tagsTemplate(recipe.tags)}</ul>
      ${ratingTemplate(recipe.rating)}
      <p><strong>Cook Time:</strong> ${recipe.cookTime}</p>
    </div>
  `;
}

function renderRecipe(recipe) {
  const recipeSection = document.querySelector('.recipe');
  recipeSection.innerHTML = recipeTemplate(recipe);
}

function searchRecipes(query) {
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) ||
    recipe.description.toLowerCase().includes(query) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query))
  );
  return filteredRecipes;
}

function handleSearch(event) {
  event.preventDefault();
  const query = document.querySelector('#search').value.toLowerCase();
  const results = searchRecipes(query);
  if (results.length > 0) {
    renderRecipe(results[0]);
  } else {
    document.querySelector('.recipe').innerHTML = `<p>No recipes found for "${query}".</p>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderRecipe(randomRecipe());
  document.querySelector('.search-form').addEventListener('submit', handleSearch);
});
