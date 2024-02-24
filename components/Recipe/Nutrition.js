export class NutritionSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const styles = document.createElement("style");
    const section = document.createElement("section");
    section.id = "nutrition";

    this.appendChild(section);
    this.appendChild(styles);

    function loadCSS() {
      styles.textContent = nutritionStyles;
    }
    loadCSS();

    this.renderNutrion();
  }

  renderNutrion() {
    const nutritionInfo = app.store.recipe.nutrition;

    this.querySelector("#nutrition").innerHTML = `
    <h2>Nutrition</h2>
    <table>
      <caption>The table below shows nutritional values per serving without the additional fillings.</caption>
      <tbody>
        <tr>
          <td>Calories</td>
          <td>${nutritionInfo.calories}</td>
        </tr>
        <tr>
          <td>Carbs</td>
          <td>${nutritionInfo.carbs}</td>
        </tr>
        <tr>
          <td>Protein</td>
          <td>${nutritionInfo.protein}</td>
        </tr>
        <tr>
          <td>Fat</td>
          <td>${nutritionInfo.fat}</td>
        </tr>
      </tbody>
    </table>
    `;
  }
}
customElements.define("nutrition-section", NutritionSection);

const nutritionStyles = `
  table {
    width: 100%;
    border-collapse: collapse;
    
  }

  caption {
    text-align: left;
    font-size: 1.6rem;
    font-family: "Outfit";
    line-height: 1.5;
    letter-spacing: 0;
    color: var(--color-wenge-brown);
    margin: 2.4rem 0;
  }

  td {
    font-size: 1.6rem;
    font-family: "Outfit";
    line-height: 1.5;
    letter-spacing: 0;
    color: var(--color-wenge-brown);
    border-bottom: solid 1px var(--color-white-coffee);
  }

  td:first-of-type {
    padding-left: 3.2rem;
  }

  td:last-of-type {
    width: 50%;
    padding-left: 1rem;
    font-weight: bold;
    color: var(--color-brandy-red);
  }

  tr > td {
    padding: 12px 0;
  }

  tr:first-of-type > td {
    padding-top: 0;
    padding-bottom: 10px;
  }

  tr:last-of-type {
    border-bottom: hidden;
  }
  #nutrition {
    margin: 0 3.2rem;
    margin-top: -0.2rem;
  }

  @media (min-width: 768px) {
    #nutrition {
      margin: 0;
      margin-top: -0.2rem;
    }
    caption {
      text-align: left;
      margin: 2.4rem 0;
    }

    tr:last-of-type > td {
      padding-bottom: 0;
    }
  }
`;
