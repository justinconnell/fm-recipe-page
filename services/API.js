const API = {
  url: "https://justinconnell.github.io/fm-recipe-page/data/recipe.json",
  fetchRecipe: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
