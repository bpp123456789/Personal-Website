export function createHomeCards(cards) {
  const sec = document.createElement("section");
  sec.setAttribute("class", "cards");
  for (let x in cards) {
    sec.innerHTML += homeCard(cards[x]);
  }
  return sec;
}

function homeCard(card) {
  return `<a class="card" href=${card.link}>
      <img src=${card.image} alt=${card.alt}/>
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    </a>`;
}
