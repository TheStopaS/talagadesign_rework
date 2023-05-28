import html from "https://cdn.skypack.dev/solid-js/html";
const KontaktMain = () => {
  return html`
    <div class="title-container">
        <div class="title-background"><b>KONTAKT</b></div>
        <div class="title-text-picture-container">
          <div class="title-text" onclick="location.href='kontakt.html'">
          <a href="kontakt.html"><h2>Kontakt</h2></a>
            <h1>3</h1>
            <div class="title-description">
              <p>Skorzystaj z formularza kontaktowego</p>
            </div>
            
          </div>
          <div class="title-picture" onclick="location.href='kontakt.html'">
              <img src="../../images/main/kontakt.jpg" alt="Solid logo" />
          </div>
      </div>
    </div>
  `
}

export default KontaktMain



