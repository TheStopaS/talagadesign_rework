import html from "https://cdn.skypack.dev/solid-js/html";
import Nav from "./nav.js"
import KontaktForm from "./kontakt/kontakt_form.js";

const KontaktComponents = () => {
  return html`
    <${Nav} />
    <${KontaktForm} />
    `
}

export default KontaktComponents
