fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const body = document.querySelector("body");
    body.appendChild(navBar(data));
    body.appendChild(renderMainPage(data));
    news(data);

    document.getElementById("home").addEventListener("click", function (e) {
      if (e.target && e.target.id === "home") {
        renderMainPage(window.appData);
      }
    });
  });

function navBar(data) {
  const nav = document.querySelector("header");
  nav.innerHTML = "";
  nav.appendChild(home("index.html"));
  nav.appendChild(otherLinks(data));

  return nav;

  function home(link) {
    const div = document.createElement("div");
    div.setAttribute("id", "home");
    div.appendChild(icon("fa-regular fa-house", link));
    div.appendChild(title(link));
    return div;
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

  function title(link) {
    const title = document.createElement("a");
    title.setAttribute("href", link);
    title.appendChild(p("William Petrik"));

    return title;
  }
}

function renderMainPage(data) {
  const main = document.createElement("main");
  main.innerHTML = "";
  main.appendChild(createProfile(data.profile));
  main.innerHTML += createAbout(data.about);
  main.innerHTML += createNews();
  main.appendChild(createHomeCards(data.cards));

  return main;
}

function news(data) {
  const search = document.querySelector(".search input");
  console.log(search);
  search.addEventListener("input", (e) => {
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.target.value);

    const filtered = data.news.filter(
      (newsitem) =>
        newsitem.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        newsitem.date.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filtered);
    createNewsItems(filtered);
  });

  createNewsItems(data.news);
}

function renderExperienceDetails(data) {
  const main = document.querySelector("main");
  main.innerHTML = "";
  for (let x in data.things) {
    main.innerHTML += renderItem(data.things[x]);
  }
}

function renderItem(data) {
  return `<div class="expCard">
  <img src=${data.Image} alt="SciSure Image"></img>
  <div class="desc">
    <h5>${data.Type}</h5>
    <h3>${data.Title}</h3>
    <h4>${data.Date}</h4>
    <p>${data.Description}</p>
  </div>
</div>`;
}

function createHomeCards(cards) {
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

function createProfile(profile) {
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

  function profileList(profile) {
    const ul = document.createElement("ul");
    for (let x in profile.items) {
      ul.appendChild(listItem(profile.items[x]));
    }
    return ul;
  }
}

function createNews() {
  return `
      <div class="news">
        <h4>News</h4>
        <div class="search">
          <input type="search" name='news' placeholder="Search News...">
        </div>
        <ul class="newsList">
        </ul>
      </div>`;
}

function createNewsItems(news) {
  const list = document.querySelector(".newsList");
  list.innerHTML = "";
  for (let x in news) {
    let thing = document.createElement("li");
    const txt = document.createTextNode(news[x].date + " - " + news[x].title);
    thing.appendChild(txt);
    list.appendChild(thing);
  }
}

function createAbout(about) {
  return `
  <div class="about">
  <h4>About</h4>
  <p>${about[0]}</p>
  <p>
    ${about[1]}
  </p>
</div>
    `;
}

function p(text) {
  const p = document.createElement("p");
  const tex = document.createTextNode(text);
  p.appendChild(tex);
  return p;
}

function icon(name, link) {
  const lin = document.createElement("a");
  lin.setAttribute("href", link);

  const icon = document.createElement("i");
  icon.setAttribute("class", name);
  lin.appendChild(icon);

  return lin;
}

function image(link, alt) {
  const img = document.createElement("img");
  img.setAttribute("src", link);
  img.setAttribute("alt", alt);
  return img;
}

function listItem(item) {
  const ite = document.createElement("li");
  const text = document.createTextNode(item);
  ite.appendChild(text);
  return ite;
}

function textLink(link, text) {
  const a = document.createElement("a");
  a.setAttribute("href", link);
  const t = document.createTextNode(text);
  a.appendChild(t);
  return a;
}

document.addEventListener("DOMContentLoaded", function () {
  navBar();
  renderMainPage(data);

  document.getElementById("navbar").addEventListener("click", function (e) {
    if (e.target && e.target.id === "homeLink") {
      renderMainPage(data);
    }
  });
});
