/* =================== Custom elements ==================== */
class Nav_bar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        
      `;
    }
}

/* ================= Defining all custom elemts ================ */

customElements.define('nav-bar',Nav_bar);