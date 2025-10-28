export default () => ({
  title: "",
  description: "",
  status: "to do",
  cards: Alpine.$persist([]).as("card_list"),
  search: "",
  editIndex: null,

  addCard() {
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
    return this.cards.filter((card) => card.title.startsWith(this.search));
  },

  deleteCard(indexToDelete) {
    this.cards.splice(indexToDelete, 1);
    if (!confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
      return;
    }
    this.activeFilter = "all";
  },
});
