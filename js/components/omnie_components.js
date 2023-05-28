import html from "https://cdn.skypack.dev/solid-js/html";
import Nav from "./nav.js"
import OmnieSite from "./omnie/omnie_site.js";

const OmnieComponents = () => {
  return html`
    <${Nav} />
    <${OmnieSite} />
    `
}

export default OmnieComponents
