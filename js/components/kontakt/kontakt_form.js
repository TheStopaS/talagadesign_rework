import html from "https://cdn.skypack.dev/solid-js/html";
const KontaktForm = () => {
  return html `
    <main class="container kontakt">
      <article class="grid">

      <div class="contact-form">
        
        <h2>Porozmawiajmy</h2>
        <div class="grid">
          <div>
          <h4>Email:</h4>
            <p>mariatalagadesign@gmail.com</p>
          </div>
          <div>
          <h4>Numer telefonu:</h4>
            <p>+48 667 872 028</p>
          </div>
        </div >
        <h4>Formularz kontaktowy:</h4>
        <form action="https://formsubmit.co/mrstopas@gmail.com" method="POST">
        <div class="grid">
          <label for="firstname">
            Imię i nazwisko
            <input
              type="text"
              id="firstname"
              name="name"
              placeholder="Wpisz imię"
              required
            />
          </label>

          <label for="lastname">
            Email
            <input
            type="email"
          id="email"
          name="email"
          placeholder="Email address"
          required
            />
          </label>
        </div>


        <label for="formtextarea">
          Wiadomość
          <textarea name="message" id="" cols="20" rows="10"></textarea>
        </label>
        <input type="hidden" name="_next" value="http://127.0.0.1:5500/kontakt.html">
       
        <!-- Button -->
        <button class="contrast" type="submit">Wyślij</button>
      </div>
      </form>
      <div class="picture">
        <img src="assets/kontakt/kontakt.jpg" alt="Solid logo" />
      </div>
      </article>
</main>
  `;
};

export default KontaktForm;