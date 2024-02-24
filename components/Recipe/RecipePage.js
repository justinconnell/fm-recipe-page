// load child web components
import { HeaderSection } from "./HeaderSection.js";
import { PreparationSection } from "./PreparationSection.js";
import { IngredientsSection } from "./IngredientsSection.js";
import { InstructionsSection } from "./InstructionsSection.js";
import { NutritionSection } from "./Nutrition.js";

export class RecipePage extends HTMLElement {
  constructor() {
    super();
  }

  //component is attached to DOM..
  connectedCallback() {
    const container = document.createElement("div");
    container.id = "container";

    const styles = document.createElement("style");
    this.appendChild(container);
    this.appendChild(styles);

    function loadCSS() {
      styles.textContent = recipeStyles;
    }
    loadCSS();

    this.renderRecipe();
  }

  renderRecipe() {
    this.querySelector("#container").innerHTML = `
      <article id="recipe">
        <header-section></header-section>
        <preparation-section></preparation-section>
        <ingredients-section></ingredients-section>
        <instructions-section></instructions-section>
        <nutrition-section></nutrion-section>
      </article>
    `;
  }
}
customElements.define("recipe-page", RecipePage);

const recipeStyles = `
  h2 {
    font-family: "Young Serif";
    font-size: 2.8rem;
    line-height: 1;
    letter-spacing: 0;
    font-weight: 400;
    color: var(--color-brandy-red);
  }

  ul,
  ol {
    list-style-position: outside;
    padding: 0 2rem;
    font-size: 1.6rem;
    font-family: "Outfit";
    line-height: 1.5;
    letter-spacing: 0;
    color: var(--color-wenge-brown);
    margin-bottom: 0;
  }

  ul > li {
    padding-bottom: 0.8rem;
    padding-left: 2rem;
    
  }

  ul > li::marker {
    font-size: smaller;
    color: var(--color-brandy-red);
  }

  #container {
    width: 37.5rem;
  }

  article {
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
    background-color: var(--color-white);
  }

  @media (min-width: 768px) {
    #container {
      width: 73.6rem;
    }

    article {
      border-radius: 1.8rem;
      padding: 4rem;
    }
  }
  `;
