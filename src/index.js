import card from "./card.js";

document.addEventListener("alpine:init", () => {
  Alpine.store("card", card());

  Alpine.store("cardModal", {
    on: false,

    toggle() {
      this.on = !this.on;
    },
  });
});
