

var rs=" "
function fun(s){
    rs=rs+s
    document.getElementById("t1").value=rs
}
function cal(){
    document.getElementById("t1").value=eval(rs)
    rs=" "
}
function clr(){
    document.getElementById("t1").value=" "
    rs=" "
}
function bk(){
    rs=rs.slice(0,rs.length-1)
    document.getElementById("t1").value=rs
}
