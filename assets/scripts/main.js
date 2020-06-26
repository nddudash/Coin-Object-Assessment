let documentBody = document.querySelector('body')

let coin = {
    state: 0,
    
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        let fiftyfifty = Math.random()
        if (fiftyfifty < 0.5) {this.state = 0}
        if (fiftyfifty > 0.5) {this.state = 1}
    },
    
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
           if (this.state === 0) {return "Tails"}
           if (this.state === 1) {return "Heads"}
    },
    
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 0) {image.src = './assets/images/CoinTails.jpg'}
        if (this.state === 1) {image.src = './assets/images/CoinHeads.jpg'}
        return image;
    },

    display20flips: function() {
        for (let i = 1; i <= 20; i++) {
            this.flip()
            let flipResult = this.toString()
            documentBody.append(flipResult + ', ');
        }
    },

    display20images: function() {
        for (let i = 1; i <=20; i++) {
            this.flip()
            let image = this.toHTML()
            documentBody.append(image);
        }
    }
};

coin.display20flips();

documentBody.innerHTML += "<br>"

coin.display20images();