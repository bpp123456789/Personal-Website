import { icon, image, textLink } from "./Builders.js";

export function createProfile(profile) {
  const sec = document.createElement("div");
  sec.setAttribute("class", "profile");
  sec.appendChild(image(profile.image, "Billy in Florence"));
  const ul = profileList(profile);
  ul.setAttribute("class", "info");
  const a = document.createElement("li");
  a.innerHTML = "Email: ";
  const inside = textLink(`mailto:${profile.email}`, profile.email);
  a.appendChild(inside);
  ul.appendChild(a);

  const icons = document.createElement("li");
  const git = icon(profile.github.icon, profile.github.link);
  const linked = icon(profile.linkedin.icon, profile.linkedin.link);
  icons.appendChild(git);
  icons.appendChild(linked);
  ul.appendChild(icons);
  sec.appendChild(ul);
  return sec;
}

function profileList(profile) {
  const ul = document.createElement("ul");
  for (let x in profile.items) {
    ul.appendChild(listItem(profile.items[x]));
  }
  return ul;
}

function listItem(item) {
  const ite = document.createElement("li");
  const text = document.createTextNode(item);
  ite.appendChild(text);
  return ite;
}
