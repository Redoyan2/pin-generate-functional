
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if (pin >= 1000) {
        return pin;
    }
    else {
        return getPin();
    }
}


const pinDisplay = document.getElementById('pin-display');
function generatePin() {
    const pin = getPin();
    pinDisplay.value = pin;
}


const keyDisplay = document.getElementById('key-display');
document.getElementById('key-pad').addEventListener('click',
    function (event) {
        const keyNumber = event.target.innerText;
        if (isNaN(keyNumber)) {
            if(keyNumber=='C'){
                keyDisplay.value= '';
            }
        }
        else {
            previousDisplay = keyDisplay.value;
            currentDisplay = previousDisplay + keyNumber;
            keyDisplay.value = currentDisplay;
        }


    })


    const actionValue = document.getElementById('action-value');
document.getElementById('submit-btn').addEventListener('click', function () {
   


    const notifyFailed = document.getElementById('notify-fail');
    const notifySuccess = document.getElementById('notify-success');
    if(pinDisplay.value==keyDisplay.value){
        notifySuccess.style.display = 'block';
        notifyFailed.style.display = 'none';
    }
    else{
        notifyFailed.style.display = 'block';
        notifySuccess.style.display = 'none';

// try action decresing
        if(parseInt(actionValue.innerText)>0){
            actionValue.innerText = parseInt(actionValue.innerText) -1;
        }
        else if(parseInt(actionValue.innerText)==0){
            alert("Please refresh the page and Try later!!!!");
        }
    }
    
    
})