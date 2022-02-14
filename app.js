
function getPin(){
    const pin = Math.round(Math.random()*10000);
    if (pin>=1000){
        return pin;
    }
    else{
        return getPin();
    }
}



function generatePin(){
    const pin = getPin();
    const pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = pin;
}

