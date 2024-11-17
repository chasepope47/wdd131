import { recipes } from './recipes.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const recipeSection = document.querySelector('.recipe-details');
  const { title, description, image, rating } = recipes[0];

  recipeSection.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
    <div class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
      ${'⭐'.repeat(rating)}${'☆'.repeat(5 - rating)}
    </div>
  `;
});
