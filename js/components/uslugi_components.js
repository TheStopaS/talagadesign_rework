import html from "https://cdn.skypack.dev/solid-js/html";
import Nav from "./nav.js"
import UslugiForm from "./uslugi/uslugi_form.js";

const UslugiComponents = () => {
  return html`
    <${Nav} />
    <${UslugiForm} />
    `
}

export default UslugiComponents
