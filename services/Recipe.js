import API from "./API.js";

export async function loadData() {
  app.store.recipe = await API.fetchRecipe();
}
