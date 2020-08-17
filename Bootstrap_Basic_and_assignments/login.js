function x() {
    let a = document.getElementById("inp1").value;
    let b = document.getElementById("inp2").value;

    let c = /^[A-Za-z0-9]{3,7}$/

    let d = /^ ([A-Z]{1,1}) ([A-Z0-9#@]{3,10})    $/


    if (a == " ") {
        var y = document.querySelector('#demo');
        y.style.visibility = "visible";
    }


    // if (c.test(a)) {
    //     alert("valid");
    // }
    // else {
    //     alert("password must contain A-Za-z0-9");
    // }
    // if (d.test(b)) {
    //     alert("valid");
    // }
    // else {
    //     alert("password must contain A-Za-z0-9");
    // }

}