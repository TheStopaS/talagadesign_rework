import html from "https://cdn.skypack.dev/solid-js/html";
const UslugiMain = () => {
  return html`
    <div class="title-container">
        <div class="title-background"><b>USŁUGI</b></div>
        <div class="title-text-picture-container title-text-picture-container-left">
          <div class="title-text" onclick="location.href='uslugi.html'">
            <h2>Usługi</h2>
            <h1>2</h1>
            <div class="title-description">
              <p>Realizowana oferta projektowa</p>
            </div>
            
          </div>
          <div class="title-picture" onclick="location.href='uslugi.html'">
              <img src="../../images/main/uslugi.jpg" alt="Solid logo" />
          </div>
      </div>
    </div>
  `
}

export default UslugiMain



