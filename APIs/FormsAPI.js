const demo = document.getElementById("demo");
const input = document.getElementById("num");

function validation() {
    if (input.validity.rangeUnderflow){
        input.setCustomValidity("You have a made range underflow error!");
    }
    if (input.validity.rangeOverflow){
        input.setCustomValidity("You have a made range overflow error!");
    }

    if (input.validity.typeMismatch){
        input.setCustomValidity("You have a made type missing error!");
    }

    if (!input.checkValidity()) {
        demo.innerText = input.validationMessage;
    }
}