let get_city=document.getElementById("city");
let get_pick_up_date=document.getElementById("pick_up_date");
let get_return_date=document.getElementById("return_date");
let get_login_hp=document.getElementById("login_hp");
let get_signup_hp=document.getElementById("signup_hp");

get_city.onclick=function (){
    alert("Please SignUp/Login")
}

get_pick_up_date.onclick=function (){
    alert("Please SignUp/Login")
}


get_return_date.onclick=function (){
    alert("Please SignUp/Login")
}

get_login_hp.addEventListener("click",()=>{
    window.location.assign( "./login.html");
});

get_signup_hp.addEventListener("click",()=>{
    window.location.assign( "./signup.html");
});