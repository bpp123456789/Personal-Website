export function createAbout(about) {
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
