import html from "https://cdn.skypack.dev/solid-js/html";
const KontaktForm = () => {
    return html`

<div class="contact-form-container">
<div class="contact-form">
<h2>Porozmawiajmy</h2>
<div class="grid">

    <!-- Markup example 1: input is inside label -->
    <label for="myemail">
      Email
      <h4>mariatalagadesign@gmail.com</h4>
    </label>

    <label for="myphone">
      Numer telefonu
      <h4>+48 667 872 028</h4>
    </label>

  </div>

    <p>Lub skorzystaj z formularza kontaktowego</p>
  <div class="grid">

    <!-- Markup example 1: input is inside label -->
    <label for="firstname">
      Imię
      <input type="text" id="firstname" name="firstname" placeholder="Wpisz imię" required>
    </label>

    <label for="lastname">
      Nazwisko
      <input type="text" id="lastname" name="lastname" placeholder="Wpisz nazwisko" required>
    </label>

  </div>

  <!-- Markup example 2: input is after label -->
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" placeholder="Email address" required>
 
  <label for="formtextarea">
      Wiadomość
      <textarea name="" id="" cols="20" rows="5"></textarea>
    </label>
  

  <!-- Button -->
  <button class="contrast" type="submit">Wyślij </button>
</div>
<div class="title-picture">
              <img src="assets/kontakt/kontakt.jpg" alt="Solid logo" />
          </div>
</div>
`
}

export default KontaktForm