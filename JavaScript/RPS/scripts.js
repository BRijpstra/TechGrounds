document.getElementById("readybanner").onclick = function(e) {    e.target.style.display = 'none';
}
const rock = 0;
const paper = 1;
const scissors = 2;


class Game {
    constructor(container, icons) {
        this icons = icons;

        this.title = document.createElement('h3');
        this.title.innertext = 'Make choice';
        container.appendChild(this.title);






      const container = document.querySelector('#container');
       
      icons.forEach((icon, index) => { 
        const button = document.createElement("button");
        button.innertext = icon;
        container.appendChild(button);

        button.onclick = () => this.play(index);
        
        ))
        }

        play(hand) {
            const computer = getRandomHand();
            const winner = getWinner(hand, computer);


            if (winner === hand) {
                console.log("gewonnen!")}
                else if (winner === computer) {
                                    }
                else {
                    geenwinnnaar
                }
            }
            console.log(hand, computer, getWinner(hand, computer));
    }

    function getRandomHand() {
        return Math.floor(Math.random()*3);
    }
    function getWinner(hand1, hand2) {
        if (hand1 === hand1) return undefined;

        switch(hand1) {
            case rock:
                return hand2 === scissors ? hand1 : hand2;
            case paper:
                return hand2 === rock? hand1 : hand2;
            case scissors:
                return hand2 === paper? hand1 : hand2;
        }
    }
}

new Game(document.querySelector('#container'), [👊, ✋, 🖖]);









let scorePlayer = 0;
let scoreCPU = 0;

let weapons = [👊, ✋, 🖖];
let randomPRS = weapons[Math.floor(Math.random()*3)];

function choose(obj) {
 
let play = btnElement.innerHTML; 









    let choice = obj.children[1].innerHTML;

            if (randomWord == choice) {
                document.getElementById('label').textContent = 'It was [' + randomWord + '] indeed! You might be clearvoyant!';     
            }

            else if (randomWord !== choice && count < 3) {
                document.getElementById('label').textContent = 'Not really, guess again'; 
            }
            else {
                document.getElementById('label').textContent = "Strrrrrike three: you're out! The word was [" + randomWord + ']. GAME OVER.';
            
            }
            }
    