function getPin(){
    var random = Math.random()*10000;
    var pin = (random + "").split(".")[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }

}

document.getElementById("generate-button").addEventListener("click", function(){
    var pinInput = document.getElementById("generate-input");
    pinInput.value = getPin();
})

//// Handle calculetor button.....////

var buttonContainer = document.getElementById("digits-container");
buttonContainer.addEventListener("click", function(event){
    var digit = event.target.innerText;
    if(isNaN (digit)){
        //handle backspace
        //handle clear
        if(digit=="C"){
            var typedInput = document.getElementById("typed-pin");
            typedInput.value = '' ;
        }
    }
    else{
        var typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit ;
    }
})

//handle submit button

function varifyPin(){
    var pin = document.getElementById("generate-input").value;
    var typedPin = document.getElementById("typed-pin").value;
    if(pin==typedPin){
        var correct = document.getElementById("correct-pin");
        correct.style.display = "block";
        var incorrect = document.getElementById("incorrect-pin");
        incorrect.style.display = "none";
        if(typedPin==""){
            var correct = document.getElementById("correct-pin");
            correct.style.display = "none";
            var incorrect = document.getElementById("incorrect-pin");
            incorrect.style.display = "none";
        }

    }
    else{
        var incorrect = document.getElementById("incorrect-pin");
        incorrect.style.display = "block";
        var correct = document.getElementById("correct-pin");
        correct.style.display = "none";
    }
}
document.getElementById("submit-button").addEventListener("click", function(){
    varifyPin()
})