//Autor: Piotr Chmielowiec
import html from "https://cdn.skypack.dev/solid-js/html";
import Nav from "./nav.js"
import ProjektyMain from "./main/main_projekty.js";
import UslugiMain from "./main/main_uslugi.js";
import KontaktMain from "./main/main_kontakt.js";

const App = () => {
  return html`
    <${Nav} />
    <${ProjektyMain} />
    <${UslugiMain} />
    <${KontaktMain} />
    `
}

export default App
