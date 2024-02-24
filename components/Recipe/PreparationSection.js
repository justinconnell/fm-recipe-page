export class PreparationSection extends HTMLElement {
  constructor() {
    super();
  }

  //component is attached to DOM..
  connectedCallback() {
    const styles = document.createElement("style");
    const section = document.createElement("section");
    section.id = "preparation";

    this.appendChild(section);
    this.appendChild(styles);

    function loadCSS() {
      styles.textContent = preparationStyles;
    }
    loadCSS();

    this.renderPreparation();
  }

  renderPreparation() {
    this.prepTime = app.store.recipe.timeMinutes;

    const cooking = +this.prepTime.cooking;
    const prep = +this.prepTime.preparation;
    const totalTime = cooking + prep;

    this.querySelector("#preparation").innerHTML = `
    <h3>Preparation time</h3>
    <ul>
      <li><strong>Total:</strong> Aproximately ${totalTime} minutes</li>
      <li><strong>Preparation:</strong> ${prep} minutes</li>
      <li><strong>Cooking:</strong> ${cooking} minutes</li>
    </ul>
    `;
  }
}
customElements.define("preparation-section", PreparationSection);

const preparationStyles = `
  h3 {
    margin: 0;
    margin-bottom: 1.6rem;
    font-family: "Outfit";
    font-size: 2rem;
    line-height: 1;
    letter-spacing: 0;
    font-weight: 600;
    color: var(--color-dark-raspberry);
  }

  #preparation > ul > li::marker {
    color: var(--color-dark-raspberry);
  }

  #preparation {
    background-color: var(--color-snow);
    border-radius: 1.2rem;
    padding: 2.4rem;
    padding-bottom: 1.6rem;
    margin: 0 3.2rem;
  }

  @media (min-width: 768px) {
    #preparation {
      padding: 2.8rem 2.8rem 0 2.8rem;
      margin: 0;
    }

    #preparation > ul {
      padding-bottom: 2rem;
    }
  }

`;
