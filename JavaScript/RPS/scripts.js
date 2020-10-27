document.getElementById("readybanner").onclick = function(e) {    e.target.style.display = 'none';
}

let playerScore = 0;
let CPUScore = 0;

let weapons = [{ name:'rock', icon: '<i class="fas fa-hand-rock"></i>'},{ name:'paper', icon: '<i class="fas fa-hand-paper"></i>'}, {name:'scissors', icon:'<i class="fas fa-hand-scissors"></i>'}];
    let randomItem = items[Math.floor(Math.random()*3)].name;

function choose(obj) {
 










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
    