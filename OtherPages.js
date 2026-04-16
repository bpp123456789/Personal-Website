export function renderExperienceDetails(page) {
  const main = document.querySelector("main");
  main.innerHTML = `
      <div class="search">
        <input class="expInput" type="search" name="experience" placeholder="Search Experience..." />
      </div>
      <div class="results"></div>
    `;

  const search = main.querySelector(".search input");
  const resultsContainer = main.querySelector(".results");
  const experienceItems = page.things; // page is already filtered!

  resultsContainer.innerHTML = "";
  experienceItems.forEach((item) => {
    resultsContainer.innerHTML += renderItem(item);
  });

  search.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    const filtered = experienceItems.filter(
      (expItem) =>
        expItem.Title.toLowerCase().includes(query) ||
        expItem.Organization.toLowerCase().includes(query) ||
        expItem.Description.toLowerCase().includes(query)
    );
    resultsContainer.innerHTML = "";
    filtered.forEach((item) => {
      resultsContainer.innerHTML += renderItem(item);
    });
  });
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
