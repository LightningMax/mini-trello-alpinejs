export default () => ({
  title: "",
  description: "",
  status: "to do",
  cards: [],
  search: "",

  addCard() {
    this.cards.push({
      title: this.title,
      description: this.description,
      status: this.status,
    });
  },

  modifyCard(index) {
    this.cards.splice(index, 1);
  },

  get filteredCards() {
    return this.cards.filter((card) => card.title.startsWith(this.search));
  },
});
