export default () => ({
  title: "",
  description: "",
  status: "to do",
  cards: [],

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
});
