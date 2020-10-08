// window.onload = init();

average();

function average() {
    let total = 0;
    let array = document.getElementsByClassName('math');
        for (let i=0; i < array.length; i++) {
            total += array[i];
            console.log(total);
        }
    }
    
    // let avg = total / (array.length);
    // console.log(avg);



validate();
function validate(){
    let arrayInputs = document.getElementsByTagName('input');
    let inputsLength = arrayInputs.length;
        for(i=0; i<inputsLength; i++){
            if (parseFloat(arrayInputs[i].value) < 5.5){
                arrayInputs[i].style.backgroundColor = "tomato";
            }
        else if(parseFloat(arrayInputs[i].value) > 7.5){
                arrayInputs[i].style.backgroundColor = "lime";
            }
        else {
            arrayInputs[i].style.backgroundColor = "lightgreen";
        }    
    }
}