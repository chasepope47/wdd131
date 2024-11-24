import recipes from './recipes.mjs';

// Verify recipes are imported
console.log("Loaded recipes from recipes.mjs:", recipes);

function randomRecipe() {
  const index = Math.floor(Math.random() * recipes.length);
  return recipes[index];
}

function searchRecipes(query) {
  console.log("Search query:", query);
  console.log("Recipes available for search:", recipes);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query) || 
    recipe.description.toLowerCase().includes(query) || 
    recipe.tags.some(tag => tag.toLowerCase().includes(query))
  );

  console.log("Filtered recipes:", filteredRecipes);
  return filteredRecipes;
}

// Event listener for the search form
document.querySelector('.search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const query = document.getElementById('search').value.trim().toLowerCase(); // Get the search query
  const results = searchRecipes(query); // Call the search function

  // Here you would typically update the UI to show the results
  displayResults(results);
});

// Function to display search results
function displayResults(results) {
  const resultsContainer = document.getElementById('results'); // Assume you have a container for results
  resultsContainer.innerHTML = ''; // Clear previous results

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No recipes found.</p>'; // Message if no results
    return;
  }

  results.forEach(recipe => {
    const recipeElement = document.createElement('div');
    recipeElement.classList.add('recipe');
    recipeElement.innerHTML = `
      <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <img src="${recipe.image}" alt="${recipe.name}">
      <p>Tags: ${recipe.tags.join(', ')}</p>
    `;
    resultsContainer.appendChild(recipeElement); // Append each recipe to the results container
  });
}

// Example of manually testing the search function
console.log("Search test for 'apple crisp':", searchRecipes("apple crisp"));