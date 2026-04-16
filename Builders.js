export function icon(name, link) {
  const lin = document.createElement("a");
  lin.setAttribute("href", link);

  const icon = document.createElement("i");
  icon.setAttribute("class", name);
  lin.appendChild(icon);

  return lin;
}

export function p(text) {
  const p = document.createElement("p");
  const tex = document.createTextNode(text);
  p.appendChild(tex);
  return p;
}

export function image(link, alt) {
  const img = document.createElement("img");
  img.setAttribute("src", link);
  img.setAttribute("alt", alt);
  return img;
}

export function textLink(link, text) {
  const a = document.createElement("a");
  a.setAttribute("href", link);
  const t = document.createTextNode(text);
  a.appendChild(t);
  return a;
}
