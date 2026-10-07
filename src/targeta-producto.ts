import estilo from "./targeta-producto.css?inline";
export class TargetaProducto extends HTMLElement {
  static observedAttributes = ["producto-id", "nombre", "precio", "imagen", "existencia"];
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.pintar();
  }
  private pintar() {
    const id = this.getAttribute("producto-id") ?? "";
    const nombre = this.getAttribute("nombre") ?? "";
    const precio = this.getAttribute("precio") ?? "";
    const imagen = this.getAttribute("imagen") ?? "";
    const existencia = Number(this.getAttribute("existencia"));
    const agotado = existencia === 0 ? "agotado" : "";

    this.shadowRoot!.innerHTML = `
    <style>${estilo}</style>
    <article class="tarjeta">
        <img src="${imagen}" alt="${nombre}">
        <div class="cuerpo">
            <h3>${nombre}</h3>
            <p class="precio">$${precio}</p>
            <p class="existencia">8${existencia}</p>
            <boton-app>Agregar al carrito</boton-app>
        </div>
    </article>`;
  }
}
customElements.define("targeta-producto", TargetaProducto);
