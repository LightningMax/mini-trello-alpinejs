export default () => ({
  title: "",
  description: "",
  status: "to do",
  cards: Alpine.$persist([]).as("card_list"),
  search: "",
  editIndex: null,

  addCard() {
    if (!this.title.trim()) {
      alert("Please fill in title before adding a card.");
      return;
    }

    this.cards.push({
      index: this.cards.length - 1,
      title: this.title,
      description: this.description,
      status: this.status,
    });
    this.title = "";
    this.description = "";
    this.status = "to do";
  },

  modifyCard() {
    if (this.editIndex != null) {
      this.cards[this.editIndex].title = this.title;
      this.cards[this.editIndex].description = this.description;
      this.cards[this.editIndex].status = this.status;
      this.reset();
    }
  },

  reset() {
    this.title = "";
    this.description = "";
    this.status = "to do";
    this.editIndex = null;
  },

  get filteredCards() {
    const status = Alpine.store("filteredCards").status;
    let filtered = this.cards;

    if (status !== "all") {
      filtered = filtered.filter((card) => card.status === status);
    }

    if (this.search.trim() !== "") {
      filtered = filtered.filter((card) =>
        card.title.toLowerCase().includes(this.search.toLowerCase())
      );
    }

    return filtered;
  },

  get count() {
    console.log(this.filteredCards.length);
    return this.filteredCards.length;
  },

  deleteCard(indexToDelete) {
    if (confirm("Are you sure you want to remove the task ?")) {
      this.cards.splice(indexToDelete, 1);
      return;
    }
  },
});
