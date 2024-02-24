export class InstructionsSection extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const styles = document.createElement("style");
    const section = document.createElement("section");
    section.id = "instructions";

    this.appendChild(section);
    this.appendChild(styles);

    function loadCSS() {
      styles.textContent = instructionsStyles;
    }
    loadCSS();

    this.renderInstructions();
  }

  renderInstructions() {
    this.instructions = app.store.recipe.instructions;

    this.querySelector("#instructions").innerHTML = `
    <h2>Instructions</h2>
    <ol id="instructionList"></ol>
    `;

    for (let instr of this.instructions) {
      const liInstruction = document.createElement("li");

      liInstruction.innerHTML = `
        <strong>${instr.instuction}:</strong> ${instr.description}
      `;

      this.querySelector("#instructionList").appendChild(liInstruction);
    }
  }
}

customElements.define("instructions-section", InstructionsSection);

const instructionsStyles = `
  #instructions {
    margin-top: -0.2rem;
    margin-left: 3.2rem;
    border-bottom: solid 2px var(--color-white-coffee);
  }

  #instructionList {
    margin: 2.4rem 0;
    margin-left: 0.4rem;
  }

  #instructions > ol > li {
    padding-left: 1.6rem;
    padding-bottom: 0.8rem;
  }

  ol > li::marker {
    color: var(--color-brandy-red);
    font-weight: bold;
  }

  @media (min-width: 768px) {

    #instructions {
      padding: 0;
      margin-left: 0;
    }

    #instructionList {
      margin-left: 0.4rem;
    }
  }
`;
