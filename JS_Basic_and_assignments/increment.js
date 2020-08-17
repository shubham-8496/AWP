var counter = 0;
var a;
function increment() {
    // var a= document.querySelector('#box');
    counter = counter + 1;
    document.querySelector('#box').innerHTML = counter;
}
function decrement() {
    // var a= document.querySelector('#box');
    counter = counter - 1;
    document.querySelector('#box').innerHTML = counter;
}
function inmouse() {
    var a = document.querySelector('#btn_1');
    a.style.background = 'green';
    a.style.color = 'white';
}
function inmouse_1() {
    var a = document.querySelector('#btn_2');
    a.style.background = 'green';
    a.style.color = 'white';
}
// function inmouse() {
//     var a = document.querySelector('.flex');
//     a.style.background = 'green';
//     a.style.color = 'white';
// }
function outmouse() {
    var b = document.querySelector('#btn_1');
    b.style.background = 'coral';
    b.style.color = 'white';
}
function outmouse_1() {
    var b = document.querySelector('#btn_2');
    b.style.background = 'coral';
    b.style.color = 'white';
}