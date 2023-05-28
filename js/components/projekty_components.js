import html from "https://cdn.skypack.dev/solid-js/html";
import Nav from "./nav.js"
import ProjektGallery from "./projekty/projekty_gallery.js";

const ProjektyComponents = () => {
  return html`
    <${Nav} />
    <${ProjektGallery} />
    `
}

export default ProjektyComponents
