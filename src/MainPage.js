import { createProfile } from "./Profile.js";
import { createAbout } from "./About.js";
import { createNews } from "./News.js";
import { createHomeCards } from "./HomeCards.js";

export function renderMainPage(data) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.appendChild(createProfile(data.profile));
  main.innerHTML += createAbout(data.about);
  main.innerHTML += createNews();
  main.appendChild(createHomeCards(data.cards));
}
