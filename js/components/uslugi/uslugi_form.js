import html from "https://cdn.skypack.dev/solid-js/html";
import {
  createSignal,
  onCleanup,
  onMount,
} from "https://cdn.skypack.dev/solid-js";

const UslugiForm = () => {
  onMount(() => {
    const serviceTypes = document.querySelectorAll(
      'input[name="service-type"]'
    );
    const projectScale = document.getElementById("project-scale");
    const areaInput = document.getElementById("area");
    const result = document.getElementById("result");

    function calculatePrice() {
      let price = 1;

      for (const serviceType of serviceTypes) {
        if (serviceType.checked) {
          price += serviceType.value * projectScale.value * areaInput.value;
        }
      }

      result.textContent = "Szacowana cena: " + price + " zł";
    }

    for (const serviceType of serviceTypes) {
      serviceType.addEventListener("change", calculatePrice);
    }

    projectScale.addEventListener("change", calculatePrice);
    areaInput.addEventListener("input", calculatePrice);
  });

  const [projectScaleImage, setprojectScaleImage] = createSignal("assets/uslugi/small_project.jpg");

  function print() {
    console.log("test");
  }

  return html`
<main class="container">
  <article class="grid">
        <form id="pricing-form">
        <h2>Kalkulator wyceny projektów</h2>
          <div class="grid">
            <div class="grid-item-big">
              <h4>Skala projektu:</h4>
              <select id="project-scale">
              <option value="100">Mały - obejmuje pojedyncze pomieszczenie</option>
              <option value="120">Średni - obejmuje mieszkanie lub niewielką przestrzeń komercyjną</option>
              <option value="135">Duży - obejmuje dom lub większą przestrzeń komercyjną</option>
              <option value="150">Developer - obejmuje większe skale projektów, takie jak budynki mieszkalne, apartamentowce, obiekty komercyjne, biurowce itp.</option>
              </select>
            </div>
            <div class="grid-item-small">
              <h4>Powierzchnia (m²):</h4>
              <input type="number" id="area" name="area" min="0" value="0">
            </div>
          </div>
            <h4>Podstawowy projekt zawiera:</h4>
            <ol>
              <li>Układ funkcjonalny wnętrza (do 3 wersji)</li>
              <li>Moodboardy</li>
              <li>Fotorealistyczne wizualizacje 3D aranżacji przestrzeni</li>
              <li>Zestawienie materiałów i elementów wyposażenia</li>
            </ol>
            <h4 >Dodatkowe usługi projektowe:</h4>
            <div  class="grid">
              <div>
                <input type="checkbox" name="service-type" value="1.1"> Rysunki wykonawcze<br>
                <input type="checkbox" name="service-type" value="1.1"> Projektowanie oświetlenia<br>
                <input type="checkbox" name="service-type" value="1.1"> Tworzenie planów i rysunków technicznych<br>
              </div >
              <div>
                <input type="checkbox" name="service-type" value="1.1"> Nadzór nad realizacją projektu<br>
                <input type="checkbox" name="service-type" value="1.1"> Projektowanie mebli na wymiar<br>
                <input type="checkbox" name="service-type" value="1.1"> Dodatkowe układy funkcjonalne<br>
              </div >
            </div>
            <h4 >Pojedyncze usługi:</h4>
            <div  class="grid">
              <div>
                <input type="checkbox" name="service-type" value="0"> Konsultacja projektowa<br>
                <input type="checkbox" name="service-type" value="1"> Moodboard<br>
                <input type="checkbox" name="service-type" value="2"> Wizualizacja wnętrza<br>
              </div >
              <div>
              <input type="checkbox" name="service-type" value="4"> Wizualizacja produktu<br>
              <input type="checkbox" name="service-type" value="5"> Rysunek techniczny<br>
              <input type="checkbox" name="service-type" value="6"> Rysunek koncepcyjny<br>
              </div >
            </div>
            <h4 id="result">Szacowana cena: 0 zł</h4>

<small>* Należy pamiętać, że ceny podane w tym kalkulatorze są jedynie szacunkowe, a rzeczywista wycena jest dostosowana do indywidualnych potrzeb klienta oraz wymagań projektu.</small >
  
</form>

<div class="picture"><img src=${projectScaleImage()} alt="Solid logo" /></div>
</article>
</main>

`;
};

export default UslugiForm;
