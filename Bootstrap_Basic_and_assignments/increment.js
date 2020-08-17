let counterele = 0;
var likecounter = 1;

function increment() {

    let newelement = document.querySelector('#counter');
    console.log(newelement);
    counterele++;
    newelement.innerHTML = counterele;
}
function decrement() {
    let newelement = document.querySelector('#counter');
    console.log(newelement);
    counterele--;
    newelement.innerHTML = counterele;
}
function comment() {
    var newelement = document.createElement('div');
    newelement.innerHTML = "boom boom";
    var newcomment = document.querySelector('#commentbox');
    newcomment.appendChild(newelement);
}
function like() {
    var newlike = document.querySelector('#like');
    newlike.innerHTML = "like " + likecounter;
    likecounter = likecounter + 1;
}
function newcomment() {

    var newchild = document.createElement("div");
    var newcomment_1 = document.querySelector('#newcomment').value;
    newchild.textContent = newcomment_1;
    document.querySelector('#commentbox_1').appendChild(newchild);
}