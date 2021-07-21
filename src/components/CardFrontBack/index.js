import CardGame from "../CardGame";

function CardFrontBack() {
  return /*html*/ `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("logo-javascript", "Logo do JavaScript")}
            ${CardGame("logo-css", "Logo do CSS")}
            ${CardGame("logo-html", "Logo do HTML")}
        </article>
    `;
}
export default CardFrontBack;
