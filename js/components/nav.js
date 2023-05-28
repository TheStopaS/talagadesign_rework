import html from "https://cdn.skypack.dev/solid-js/html";

const Nav = () => {
  return html`<nav>
  <ul>
    <li><a href="index.html" class="secondary"><h3><b>MARIA TALAGA</b></h3></a></li>
  </ul>
  <ul>
    <li><a href="omnie.html" class="secondary outline" role="button">O mnie</a></li>
    <li><a href="projekty.html" class="nav-projekty-icon secondary" data-tooltip="Projekty" data-placement="bottom">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="37" height="30" x="5.5" y="9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35 9v23.5H12v-17l23 .101M42.466 32.5H35"/><circle cx="29" cy="21.601" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 21.601H5.5M22.9 32.5c0-6.02-4.88-10.9-10.9-10.9"/>
    </svg></a></li>
    <li><a href="uslugi.html" class="nav-uslugi-icon secondary" data-tooltip="Usługi" data-placement="bottom">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.156 37.362c6.68-13.423 19.09-20.588 21.402-19.13c1.695 1.163 2.664 14.505-2.994 27.211"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3.928 16.296c.941-1.794 1.966-3.5 3.047-3.532c1.046-.031 4.825 5.95 7.35 14.23"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.055 21.79c-.077-3.153-1.346-7.198-2.25-7.41c-1.4-.33-4.828 2.17-6.566 4.619m17.497 16.633c3.586.864 8.41 3.82 8.338 4.327a6.136 6.136 0 0 1-2.287 2.64"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M34.426 38.013c4.015-4.242 4.752-9.273 4.293-9.864s-4.535-.73-8.93-.114m-13.797-2.756s1.92-1.624 2.595-1.388c.693.243 3.48 10.338.499 21.04"/></svg>
  </a></li>
    <li><a href="kontakt.html" class="nav-kontakt-icon secondary" data-tooltip="Kontakt" data-placement="bottom"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M13.39 12.15v26.39H7.06A2.56 2.56 0 0 1 4.5 36V16.82m30.11-4.67v26.39h6.33A2.56 2.56 0 0 0 43.5 36V16.82"/><path fill="none" stroke="currentColor" stroke-miterlimit="10" d="M24 31.45L43.5 17v-3.6a3.94 3.94 0 0 0-6.28-3.16L24 20.06l-13.22-9.82A3.94 3.94 0 0 0 4.5 13.4V17Z"/></svg>
  </a></li>
</ul>
</nav>
<div class="chat-box">
<button class="primary">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect width="26.648" height="22.207" x="14.463" y="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.621"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.916 13.575H9.51a2.621 2.621 0 0 0-2.622 2.621v24.753a1.048 1.048 0 0 0 1.79.742l5.91-5.91h16.328a2.621 2.621 0 0 0 2.62-2.62V16.196a2.621 2.621 0 0 0-2.62-2.621Z"/></svg>
</button>
</div>
`
}

export default Nav



