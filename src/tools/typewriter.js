let cible = document.getElementsByClassName('bubble');

 function typewriter(arr, callBack) {
    var delayCallback = 0;
    cible.innerHTML = '';
    for (var i = 0; i < arr.length; i++) {
        var delay;
        delayCallback += arr[i].length * 50;
        if (i !== 0) {
            delay = (arr[(i - 1)].length * 50);
        } else {
            delay = 0;

        }
        var text = arr[i];

        lineTypeWriter(text, delay);

    }
    setTimeout(function () {
        if (callBack && callBack !== undefined) {
            callBack();
        }
    }, delayCallback);
}

function lineTypeWriter(text, delay) {
    setTimeout(function () {
        var p = document.createElement('p');
        cible.appendChild(p);
        for (var i = 0; i < text.length; i++) {
            printLetter(text[i], p, i);
        }
    }, delay);
}

function printLetter(lettre, target, i) {
    setTimeout(function () {
        if (String(lettre) === ' ') {
            target.innerHTML += '&thinsp;';
        } else {
            target.innerHTML += lettre;
        }
    }, 50 * i);

}

export default typewriter;