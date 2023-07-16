//Autor: Piotr Chmielowiec
import html from "https://cdn.skypack.dev/solid-js/html";
import Nav from "./nav.js";
import MainPage from "./main/start_component.js";
const App = () => {
  return html`
    <${Nav} />
    <${MainPage} />
  `;
};

export default App;
