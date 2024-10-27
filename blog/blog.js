// Array of article data
const articles = [
	{
	  id: 1,
	  title: "Messi: A Boy Who Became A Star",
	  date: "2017",
	  description: "This is the inspiring children's story of Lionel Messi, a boy who became a star. Born in a poor family, the small boy faced many obstacles in life, including a medical condition that prevented him from growing. But he decided to follow his dream, worked hard, and overcame all obstacles to become one of the best soccer players in history.",
	  imgSrc: "Messi_A_Boy_Who_Became_A_Star.jpg",
	  imgAlt: "Book cover of Messi A Boy Who Became A Star",
	  ages: "10-14",
	  genre: "Biography",
	  stars: "⭐⭐⭐⭐"
	},
	{
	  id: 2,
	  title: "The Art of War",
	  date: "2022",
	  description: "Originally written in the 5th century, 'The Art of War' is a masterpiece of military strategy and Chinese philosophy that has influenced countless leaders, both on the battlefield and in the boardroom. The exhortations and advice from 'The Art of War' have echoed throughout the centuries as pieces of timeless wisdom, no matter the foe you may be facing.",
	  imgSrc: "The_Art_Of_War.jpg",
	  imgAlt: "Book cover of The Art of War",
	  ages: "15+",
	  genre: "Philosophy",
	  stars: "⭐⭐⭐⭐⭐"
	}
  ];
  
  // Function to generate articles
  function generateArticles() {
	const articleList = document.getElementById("article-list");
  
	// Clear any existing content
	articleList.innerHTML = "";
  
	// Loop through each article in the array
	articles.forEach((article) => {
	  // Create the article element
	  const articleElement = document.createElement("article");
	  articleElement.classList.add("review-item");
  
	  // HTML content for each article
	  articleElement.innerHTML = `
		<div class="book-meta">
		  <p><strong>Date:</strong> ${article.date}</p>
		  <p><strong>Age:</strong> ${article.ages}</p>
		  <p><strong>Genre:</strong> ${article.genre}</p>
		  <p><strong>Rating:</strong> ${article.stars}</p>
		</div>
		<div class="book-content">
		  <h2>${article.title}</h2>
		  <img src="${article.imgSrc}" alt="${article.imgAlt}">
		  <p>${article.description}</p>
		  <a href="#">Read More...</a>
		</div>
	  `;
  
	  // Append the article to the article list
	  articleList.appendChild(articleElement);
	});
  }
  
  // Call the function to display articles on page load
  document.addEventListener("DOMContentLoaded", generateArticles);
  