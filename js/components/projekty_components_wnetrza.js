import html from "https://cdn.skypack.dev/solid-js/html";
import Nav from "./nav.js"
import ProjektGalleryWnetrza from "./projekty/projekty_gallery_wnetrza.js";

const ProjektyComponentsWnetrza = () => {
  return html`
    <${Nav} />
    <${ProjektGalleryWnetrza} />
    `
}

export default ProjektyComponentsWnetrza
