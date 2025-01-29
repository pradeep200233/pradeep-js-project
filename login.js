let get_login_Username=document.getElementById("login_Username");
let get_login_email=document.getElementById("login_email");
let get_login_password=document.getElementById("login_password");
let get_login_btn=document.getElementById("login_btn");
let get_error2=document.getElementById("error2");

get_login_btn.addEventListener("click",()=>{
    if((get_login_Username.value==localStorage.getItem("Username")) && (get_login_email.value==localStorage.getItem("Email")) && (get_login_password.value==localStorage.getItem("Password"))){
        get_error2.classList.add("d-none");
        // get_login_btn.textContent=
        window.location.assign("./HP_user.html");
        
    }
    else{
        get_error2.classList.remove("d-none");
    }
});




