export class HeaderSection extends HTMLElement {
  constructor() {
    super();
  }

  //component is attached to DOM..
  connectedCallback() {
    const styles = document.createElement("style");
    const header = document.createElement("header");
    header.id = "header";

    this.appendChild(header);
    this.appendChild(styles);

    function loadCSS() {
      styles.textContent = headerStyle;
    }
    loadCSS();

    this.renderHeader();
  }

  renderHeader() {
    this.recipe = app.store.recipe;

    this.querySelector("#header").innerHTML = `
      <img src="/data/images/${this.recipe.image}" alt="${this.recipe.name}" />
      <h1>${this.recipe.name}</h1>
      <p>${this.recipe.description}</p>
    `;
  }
}
customElements.define("header-section", HeaderSection);

const headerStyle = `
  header {
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
  }

  h1 {
    margin-top: 0.8rem;
    margin-left: 3.2rem;
    font-family: "Young Serif";
    font-size: 3.6rem;
    line-height: 1;
    letter-spacing: 0;
    font-weight: 400;
    color: var(--color-dark-charcoal);
  }

  p {
    margin: 0;
    margin-left: 3.2rem;
    margin-right: 3rem;
    margin-top: -0.8rem;
    font-size: 1.6rem;
    font-family: "Outfit";
    line-height: 1.5;
    letter-spacing: 0;
    color: var(--color-wenge-brown);
  }

  img {
    width: 100%;
    display: block;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4rem;
      margin-top: 1rem;
      margin-left: 0;
    }

    p {
      margin: 0;
      margin-top: -1rem;
    }

    img {
      border-radius: 1.2rem;
    }

  }
  `;
