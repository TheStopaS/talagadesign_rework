import html from "https://cdn.skypack.dev/solid-js/html";
const ProjektyMain = () => {
  return html`
    <div class="title-container">
        <div class="title-background"><b>PROJEKTY</b></div>
        <div class="title-text-picture-container">
          <div class="title-text" onclick="location.href='projekty.html'">
          <h2><a href="#" class="primary">Projekty</a></h2>
            <h1>1</h1>
            <div class="title-description">
              <p>Galeria projektów i realizacji</p>
            </div>
            
          </div>
          <div class="title-picture" onclick="location.href='projekty.html'">
              <img src="../../images/main/projekty.png" alt="Solid logo" />
          </div>
      </div>
    </div>
  `
}

export default ProjektyMain



