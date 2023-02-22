
class GuessingGame {
    constructor() {
        this.left = null;
        this.right = null;
        this.value = null;;
        this.count = function() {
            this.value = Math.round((this.left + this.right) / 2)
        }
    }
 
    setRange(min, max) {
       this.left = min
       this.right = max
    }

    guess() {
        this.count();
        return this.value;
    }

    lower() {
        this.right = this.value
    }

    greater() {
        this.left = this.value
    }
}

module.exports = GuessingGame;
