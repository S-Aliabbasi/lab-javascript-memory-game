class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    let i;
    let j;
    let temp = 0;
    if (cards) {
      for (i = 0; i < 23; i++) {
        j = Math.floor(Math.random() * (23 - i) + i);
        temp = cards[j];
        cards[j] = cards[i];
        cards[i] = temp;
      }
      return this.cards;
    }
    return undefined;
  }

  checkIfPair(card1, card2) {
    if (
      card1.getAttribute("data-card-name") ==
      card2.getAttribute("data-card-name")
    ) {
      this.pairsGuessed += 1;
      this.pairsClicked += 1;
      document.getElementById("pairs-guessed").innerHTML = this.pairsGuessed;
      document.getElementById("pairs-clicked").innerHTML = this.pairsClicked;
      return true;
    }
    this.pairsClicked += 1;
    document.getElementById("pairs-clicked").innerHTML = this.pairsClicked;
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed == 12) {
      return true;
    } else return false;
  }
}
