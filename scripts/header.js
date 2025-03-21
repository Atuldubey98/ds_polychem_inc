const headerLinksList = document.getElementsByClassName("header__link");
const currentLocation = window.origin + window.location.pathname;
let found = false;
for (const headerLink of headerLinksList) {
  if (headerLink.href === currentLocation) {
    headerLink.classList.add("header__linkSelected");
    found = true;
  }
  if (!found) {
    headerLinksList[0].classList.add("header__linkSelected");
  }
}
