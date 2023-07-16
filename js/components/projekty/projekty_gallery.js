import html from "https://cdn.skypack.dev/solid-js/html";
import { createSignal, onMount, For } from "https://cdn.skypack.dev/solid-js";
const ProjektGallery = () => {
  return html`
  <main class="container projekty">
        <article  >
          <header >
            <img src="assets/projekty/0.png" loading="lazy" alt="Solid logo" />
          </header>
            <h3>Wizualizacje Wnętrz</h3>
            <p>
              Profesjonalne wizualizacje pomieszczeń i aranżacji wnętrz.
              Znajdziesz tutaj inspirujące obrazy z różnych realizacji które
              przeprowadziłam. Przeglądając tę galerię, możesz zobaczyć, jak za
              pomocą wizualizacji można odmienić wnętrza, uwypuklić ich
              potencjał i nadać im unikalny styl.
            </p>
            <footer>
            <button class="contrast" onclick="location.href='projekty_wnetrza.html'">Obejrzyj wnętrza</button>
            </footer>
        </article>
        <article>
        <header >
        <img
              src="assets/projekty/001 render2.jpg"
              loading="lazy"
              alt="Solid logo"
            />
            </header>
            <h3>Wizualizacje Produktowe</h3>
            <p>
              Znajdziesz tu realistyczne wizualizacje mebli oraz ciekawych
              dodatków do wnętrz. Wizualizacje produktów pozwalają pokazać
              detale, tekstury i funkcjonalności przedmiotów. Zobacz jak moje
              wizualizacje mogą wspomóc państwa marketing i sprzedaż.
            </p>
            <footer>
            <button class="contrast">Obejrzyj produkty</button>
            </footer>
        </article>
        <article  >
        <header >
            <img
              src="assets/projekty/001 render2.jpg"
              loading="lazy"
              alt="Solid logo"
            />
        </header >
            <h3>Maria Talaga & inPOINT</h3>
            <p>
              Wspólne projekty i osiągnięcia we współpracy z biurem 
              <a href="https://inpoint-wnetrza.pl/"><u>inPOINT</u></a
              >. Znajdziesz tu wizualizacje wnętrz, produktów i innych
              projektów, które powstały dzięki naszemu wspólnemu zaangażowaniu i
              pasji. Przeglądając tę galerię, możesz zobaczyć efekty naszej owocnej współpracy.
            </p>
            <footer>
            <button class="contrast">Obejrzyj nasze projekty</button>
        </footer>
        </article>

</main>
  `;
};

export default ProjektGallery;
