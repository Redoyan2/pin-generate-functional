
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


document.getElementById('submit-btn').addEventListener('click', function () {
    console.log('clicked submit');
    const notifyFailed = document.getElementById('notify-fail');
    const notifySuccess = document.getElementById('notify-success');
    if(pinDisplay.value==keyDisplay.value){
        notifySuccess.style.display = 'block';
        notifyFailed.style.display = 'none';
    }
    else{
        notifyFailed.style.display = 'block';
        notifySuccess.style.display = 'none';
    }
})