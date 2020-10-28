document.getElementById("readybanner").onclick = function(e) {    e.target.style.display = 'none';
}

let scorePlayer = 0;
let scoreCPU = 0;

let weapons = [rock, paper, scissors];
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
    