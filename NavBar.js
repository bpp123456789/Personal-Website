import { p, icon } from "./Builders.js";
import { renderExperienceDetails } from "./OtherPages.js";

export default function NavBar(data) {
  const header = document.querySelector("header");
  header.appendChild(home("index.html"));
  header.appendChild(otherLinks(data));
}

function home(link) {
  const div = document.createElement("div");
  div.setAttribute("id", "home");
  div.appendChild(icon("fa-regular fa-house", link));
  div.appendChild(title(link));
  return div;
}

function title(link) {
  const title = document.createElement("a");
  title.setAttribute("href", link);
  title.appendChild(p("William Petrik"));

  return title;
}

function otherLinks(data) {
  const div = document.createElement("div");
  div.appendChild(createButton("Experience", "btn1", 1, data));
  div.appendChild(createButton("Projects", "btn2", 2, data));
  div.appendChild(createButton("Leadership", "btn3", 3, data));
  return div;
}

function createButton(text, id, pageId, data) {
  const btn = document.createElement("button");
  btn.id = id;
  btn.textContent = text;
  btn.onclick = function () {
    renderExperienceDetails(data.pages.find((p) => p.id === pageId));
  };
  return btn;
}
