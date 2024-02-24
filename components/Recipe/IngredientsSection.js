export class IngredientsSection extends HTMLElement {
  constructor() {
    super();
  }

  //component is attached to DOM..
  connectedCallback() {
    const styles = document.createElement("style");
    const section = document.createElement("section");
    section.id = "ingredients";

    this.appendChild(section);
    this.appendChild(styles);

    function loadCSS() {
      styles.textContent = ingredientsStyle;
    }
    loadCSS();

    this.renderIngredients();
  }

  renderIngredients() {
    this.ingredients = app.store.recipe.ingredients;

    this.querySelector("#ingredients").innerHTML = `
    <h2>Ingredients</h2>
    <ul id="ingredientList">
    </ul>
    `;

    for (let ingredient of this.ingredients) {
      const liIngredient = document.createElement("li");

      liIngredient.innerHTML = ingredient;

      this.querySelector("#ingredientList").appendChild(liIngredient);
    }
  }
}
customElements.define("ingredients-section", IngredientsSection);

const ingredientsStyle = `
  #ingredients {
    margin: 0 3.2rem;
    margin-top: 0;
    padding-bottom: 2.4rem;
    border-bottom: solid 2px var(--color-white-coffee);
  }

  #ingredientList {
      margin-top: 2.4rem;
    }

  #ingredients > ul > li {
    padding-left: 2rem;
  }

  @media (min-width: 768px) {

    #ingredients {
      padding: 0;
      margin: 0;
    }

    #ingredientList {
      margin: 2.4rem 0;
    }
  }
  `;
