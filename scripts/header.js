const headerLinksList = document.getElementsByClassName("header__link");
const currentLocation = window.origin + window.location.pathname;
for (const headerLink of headerLinksList) {
  if (headerLink.href === currentLocation) {
    headerLink.classList.add("header__linkSelected");
  }
}
