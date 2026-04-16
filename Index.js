import NavBar from "./NavBar.js";
import { renderMainPage } from "./MainPage.js";
import News from "./News.js";

fetch("data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    NavBar(data);
    renderMainPage(data);
    News(data);
  });

document.addEventListener("DOMContentLoaded", function () {
  renderMainPage(data);

  document.getElementById("navbar").addEventListener("click", function (e) {
    if (e.target && e.target.id === "homeLink") {
      renderMainPage(data);
    }
  });
});
