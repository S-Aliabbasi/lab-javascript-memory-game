class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let i;
    let j;
    let temp = 0;
    if (this.cards) {
      for (i = 0; i < this.cards.length - 1; i++) {
        j = Math.floor(Math.random() * (this.cards.length - 1 - i) + i);
        temp = this.cards[j];
        this.cards[j] = this.cards[i];
        this.cards[i] = temp;
      }
      return this.cards;
    }
    return undefined;
  }

  checkIfPair(card1, card2) {
    if (card1 == card2) {
      this.pairsGuessed += 1;
      this.pairsClicked += 1;
      return true;
    }
    this.pairsClicked += 1;
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed * 2 == this.cards.length) {
      return true;
    } else return false;
  }
}
