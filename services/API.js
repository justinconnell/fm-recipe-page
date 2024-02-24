const API = {
  url: "/data/recipe.json",
  fetchRecipe: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
