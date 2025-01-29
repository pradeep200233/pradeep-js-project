let get_Username=document.getElementById("Username");
let get_email=document.getElementById("email");
let get_password1=document.getElementById("password1");
let get_password2=document.getElementById("password2");
let get_signup_btn=document.getElementById("signup_btn");
let get_error1=document.getElementById("error1")

get_signup_btn.addEventListener("click",()=>{
    
    if(get_Username.value=="" || get_email.value=="" || get_password1.value=="" || get_password2.value==""){
        get_error1.classList.remove("d-none");
    }
    else{
        get_error1.classList.add("d-none");
        localStorage.setItem("Username",get_Username.value);
        localStorage.setItem("Email",get_email.value);
        localStorage.setItem("Password",get_password2.value)
        get_Username.value="";
        get_email.value="";
       
        window.location.assign( "./login.html");
    }
})

