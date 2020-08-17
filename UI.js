// function comment() {
//     var newelement = document.createElement('div');
//     var newchild = document.querySelector('#input').value;
//     newelement.textContent = newchild;
//     document.querySelector('#commentbox').appendChild(newelement);
//     newelement.style.margin = '5px';
//     // document.querySelector('#input').value = " ";
// }
function comment() {
    var newchild = document.querySelector('#input').value;
    var newelement = document.querySelector('#commentbox').cloneNode(true);
    newelement.removeAttribute("id");
    newelement.children[0].innerHTML = newchild;
    let demo = document.querySelector('#demo');
    demo.appendChild(newelement);
    newchild.style.margin = '5px';
}

function demo(a) {
    a.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0].remove();
}
