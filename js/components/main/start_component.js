import html from "https://cdn.skypack.dev/solid-js/html";
const MainPage = () => {
  return html`
    <br>
    <main class="container home">
      <div class="grid">
        <div class="home-description column">
          <h4>No.1</h4>
          <h1>Projekty</h1>
          <h3>Galeria projektów i realizacji</h3>
          <p>Phasellus fringilla neque a ante consectetur, eget varius tellus molestie. Curabitur maximus egestas tristique. Suspendisse potenti. Sed posuere convallisPhasellus fringilla neque a ante consectetur, eget varius tellus molestie. Curabitur maximus egestas tristique. Suspendisse potenti. Sed posuere convallis</p>
          <br>
          <a href="projekty.html" role="button" class="contrast">Przejdź do galerii projektów</a>
        </div>
        <div class="home-picture column" onclick="location.href='projekty.html'">
              <img src="assets/main/projekty.png" alt="Solid logo" />
              </div>
      </div>
      <hr>
      <div class="grid">
      
        <div class="home-description column">
          <h4>No.2</h4>
          <h1>Usługi</h1>
          <h3>Zestawienie oferowanych usług</h3>
          <p>Phasellus fringilla neque a ante consectetur, eget varius tellus molestie. Curabitur maximus egestas tristique. Suspendisse potenti. Sed posuere convallisPhasellus fringilla neque a ante consectetur, eget varius tellus molestie. Curabitur maximus egestas tristique. Suspendisse potenti. Sed posuere convallis</p>
          <br>
          <a href="uslugi.html" role="button" class="contrast">Przejdź do usług</a>
        </div>
        <div class="home-picture column" onclick="location.href='uslugi.html'">
              <img src="assets/main/projekty.png" alt="Solid logo" />
              </div>
      </div>
      <hr>
      <div class="grid">
        <div class="home-description column">
          <h4>No.3</h4>
          <h1>Kontakt</h1>
          <h3>Skorzystaj z formularza kontaktowego</h3>
          <p>Phasellus fringilla neque a ante consectetur, eget varius tellus molestie. Curabitur maximus egestas tristique. Suspendisse potenti. Sed posuere convallisPhasellus fringilla neque a ante consectetur, eget varius tellus molestie. Curabitur maximus egestas tristique. Suspendisse potenti. Sed posuere convallis</p>
          <br>
          <a href="kontakt.html" role="button" class="contrast">Przejdź do kontatku</a>
        </div>
        <div class="home-picture column" onclick="location.href='kontakt.html'">
              <img src="assets/main/projekty.png" alt="Solid logo" />
              </div>
      </div>
    </main>
  `;
};

export default MainPage;
