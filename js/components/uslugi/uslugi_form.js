import html from "https://cdn.skypack.dev/solid-js/html";
import {createSignal,onCleanup,onMount} from "https://cdn.skypack.dev/solid-js";

const UslugiForm = () => {

  onMount(() => {
    const serviceTypes = document.querySelectorAll('input[name="service-type"]');
const projectScale = document.getElementById('project-scale');
const areaInput = document.getElementById('area');
const result = document.getElementById('result');

function calculatePrice() {
  let price = 0;

  for (const serviceType of serviceTypes) {
    if (serviceType.checked) {
      price += serviceType.value * projectScale.value * areaInput.value;
    }
  }

  result.textContent = 'Szacowana cena: $' + price;
}

for (const serviceType of serviceTypes) {
  serviceType.addEventListener('change', calculatePrice);
}

projectScale.addEventListener('change', calculatePrice);
areaInput.addEventListener('input', calculatePrice);
  });





    return html`
<div class="uslugi-form-container">
<div class="uslugi_form">
<h2>Kalkulator wyceny projektów</h2>
<form id="pricing-form">
<div class="grid">
  <div class="grid-item">
<label for="project-scale">Skala projektu:</label>
<select id="project-scale">
<option value="1">Mały - obejmuje pojedyncze pomieszczenie</option>
<option value="2">Średni - obejmuje mieszkanie lub niewielką przestrzeń komercyjną</option>
<option value="3">Duży - obejmuje dom lub większą przestrzeń komercyjną</option>
<option value="3">Developer - obejmuje większe skale projektów, takie jak budynki mieszkalne, apartamentowce, obiekty komercyjne, biurowce itp.</option>
</select>
</div>
<div class="grid-item">
<label for="area">Powierzchnia (m²):</label>
<input type="number" id="area" name="area" min="0" value="0">
</div>
</div>
<label for="service-type">Podstawowy projekt zawiera:</label>

<ol>
  <li>Układ funkcjonalny wnętrza (do 3 wersji)</li>
  <li>Moodboardy</li>
  <li>Fotorealistyczne wizualizacje 3D aranżacji przestrzeni</li>
  <li>Zestawienie materiałów i elementów wyposażenia</li>
</ol>
<hr>
  <label for="service-type">Dodatkowe usługi projektowe:</label>
  <hr>
  <input type="checkbox" name="service-type" value="1"> Rysunki wykonawcze (rzuty, rozwinięcie ścian, punkty oświetleniowe, hydrauliczne, projekty mebli na wymiar)<br>
  <input type="checkbox" name="service-type" value="2"> Projektowanie oświetlenia<br>
  <input type="checkbox" name="service-type" value="4"> Tworzenie planów i rysunków technicznych<br>
  <input type="checkbox" name="service-type" value="5"> Nadzór nad realizacją projektu<br>
  <hr>
  <hr>
  <label for="service-type">Inne usługi:</label>
  <hr>
  <input type="checkbox" name="service-type" value="0"> Konsultacja projektowa<br>
  <input type="checkbox" name="service-type" value="1"> Moodboard<br>
  <input type="checkbox" name="service-type" value="2"> Wizualizacja wnętrza<br>
  <input type="checkbox" name="service-type" value="4"> Wizualizacja produktu<br>
  <input type="checkbox" name="service-type" value="5"> Rysunek techniczny<br>
  <hr>
</form>
<div id="result">Szacowana cena: $0</div>
<br>
<div id="disclaimer">
  <p>* Należy pamiętać, że ceny podane w tym kalkulatorze są jedynie szacunkowe, a rzeczywista wycena jest dostosowana do indywidualnych potrzeb klienta oraz wymagań projektu.</p>
</div>
</div>


<div class="title-picture">
              <img src="assets/kontakt/kontakt.jpg" alt="Solid logo" />
          </div>
</div>
</div>

`
}

export default UslugiForm