import card from "./card.js";

document.addEventListener("alpine:init", () => {
  Alpine.data("card", card);
});
