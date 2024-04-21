function login(){
    var uname=document.getElementById("email");
    var ps=document.getElementById("pswd");

    if(uname=""){
        alert("please enter username!!");
    }
    else if (ps=""){
        alert("enter password!!");
    }
}
function clearfunc(){
    document.getElementById("email").value="";
    document.getElementById("pswd").value="";
}
 var loader= document.getElementById("preloader");
 window.addEventListener("load",function(){
    loader.style.display="none";
 })