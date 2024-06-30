class StackService {
	private pile: any[] = [];

	constructor() {
		this.pile = [];
	}

	push(card) {
		this.pile = [...this.pile, card];
	}


	push2(card) {
		this.pile = [...this.pile, card];
	}

	push3(card) {
		this.pile = [...this.pile, card];
	}
  pop(){
		if(this.pile.length === 0) return;
    this.pile = this.pile.slice(0, this.pile.length - 1);
    return this.pile;
  }

  peek(){
		if(this.pile.length === 0) return;
    return this.pile[this.pile.length - 1];
  }

	getPile() {
		return this.pile;
	}

	clear() {
		this.pile = [];
	}
}


export default new StackService();