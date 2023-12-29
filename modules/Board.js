export default class Board {
    constructor() {
        this.squares = document.querySelectorAll('.square');
    }

    getSquares = () => {
        return this.squares;
    }
}
