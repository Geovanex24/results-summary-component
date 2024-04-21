//HTML References
const categoriesDiv = document.querySelector(".summary-card__categories");
/**
 * Get all categories from data.json
 */
const getCategories = async () => {
  try {
    const response = await fetch("./assets/data/data.json");
    const categories = await response.json();
    for (const category of categories) {
      createCategory(category);
    }
  } catch (error) {
    console.error("Error loading JSON file", error);
  }
};

getCategories();

const createCategory = ({ category, score }) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.className = `category category--${category.toLowerCase()}`;
  categoryDiv.innerHTML = `
    <h3 class="category__title">${category}</h3>
    <p class="category__score">${score} <span>/ 100</span></p>
  `;
  categoriesDiv.append(categoryDiv);
};
