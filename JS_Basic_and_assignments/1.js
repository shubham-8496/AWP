function myfun() {
    let ele = document.querySelector('#demo').value;
    console.log(ele);
    document.querySelector('#update').innerHTML = ele;
}