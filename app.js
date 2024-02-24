import Store from "./services/Store.js";
import { loadData } from "./services/Recipe.js";
import { RecipePage } from "./components/Recipe/RecipePage.js";

window.app = {};
app.store = Store;

//wait for the DOM to finish loading...
window.addEventListener("DOMContentLoaded", async () => {
  await loadData();
  let recipePage = document.createElement("recipe-page");
  const rootElement = document.querySelector("main");
  rootElement.innerHTML = "";
  rootElement.appendChild(recipePage);
  window.scrollY = 0;
  window.scrollX = 0;
});
