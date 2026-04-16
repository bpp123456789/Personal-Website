export default function News(data) {
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

export function createNews() {
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

export function createNewsItems(news) {
  const list = document.querySelector(".newsList");
  list.innerHTML = "";
  for (let x in news) {
    let thing = document.createElement("li");
    const txt = document.createTextNode(news[x].date + " - " + news[x].title);
    thing.appendChild(txt);
    list.appendChild(thing);
  }
}
