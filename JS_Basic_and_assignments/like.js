var likecounter = 1
function like() {
    var element = document.querySelector('#like');
    element.innerHTML = "like" + likecounter;
    likecounter = likecounter + 1;
}
// function comment() {
//     var a = document.querySelector('#sample').Value;
//     // var demo = 
//     console.log(a);
//     document.querySelector('#comment').innerHTML = a;
//     // demo.innerHTML = cmt;
//     // var newcomment = 

// }

function comment_1() {
    var newelement = document.createElement("div");
    var a = document.querySelector('#sample').value;
    newelement.textContent = a + likecounter;
    document.querySelector('#comment').appendChild(newelement);
    likecounter = likecounter + 1;
}