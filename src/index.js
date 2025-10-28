import card from "./card.js";

document.addEventListener("alpine:init", () => {
  Alpine.store("card", card());

  Alpine.store("filteredCards", { status: "all" });

  Alpine.store("modifyModal", {
    on: false,

    toggle() {
      this.on = !this.on;
    },

    open(index) {
      console.log(index);
      const card = Alpine.store("card");
      card.editIndex = index;
      console.log(card.editIndex);
      card.title = card.cards[index].title;
      card.description = card.cards[index].description;
      card.status = card.cards[index].status;
      this.on = true;
    },

    close() {
      const card = Alpine.store("card");
      card.reset();
      this.on = false;
    },
  });

  Alpine.store("cardModal", {
    on: false,

    toggle() {
      this.on = !this.on;
    },
  });
});
