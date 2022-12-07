function cal(val) {
    document.getElementById('input-num').value += val;
}
function solve() {
    let x = document.getElementById('input-num').value;
    let y = eval(x);
    document.getElementById('input-num').value = y;
    z = y;
}
function clr() {
    document.getElementById('input-num').value = "";
}
function ans() {
    document.getElementById('input-num').value = z ;
}
function del() {
    let delVal = document.getElementById('input-num').value;
    document.getElementById('input-num').value = delVal.slice(0,-1);
}
function exp() {
    let a = document.getElementById('input-num').value;
    let b = Math.exp(a);
    document.getElementById('input-num').value = b;
}
function brandcolor() {
    var colitems = ["red","blue","green","yellow","orenge","skyblue"];
    var rennum = Math.floor(Math.random()*colitems.length);
    document.getElementById('smart').style.color = colitems[rennum]
}
