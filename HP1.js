let getCity=document.getElementById("city");
let getFrom=document.getElementById("pick_up_date");
let getTo=document.getElementById("return_date");
let getDuration=document.getElementById("duration_value");
let getError=document.getElementById("error3");
let getSearch=document.getElementById("searchBtn");


// getFrom.setAttribute("min",new Date());
let current_date=new Date().toISOString().slice(0, 16); 
getFrom.setAttribute("min",current_date);
getTo.setAttribute("min",current_date);

let days=0;
let hours=0;
let minutes=0;
getSearch.addEventListener("click", function1);
console.log(getCity.value);
function function1() {
    if (getCity.value=="Select City" || getFrom.value=="" || getTo.value==""){
        getError.classList.remove("d-none");
    }
    else{
        getError.classList.add("d-none");
        
        let diff=new Date(getTo.value)-new Date(getFrom.value);
        localStorage.setItem("getFrom",getFrom.value);
        localStorage.setItem("getTo",getTo.value);
        localStorage.setItem("millisec_diff",diff);
        // console.log(typeof diff)
        if(getFrom.value!="" && getTo.value!=""){
            if(diff>=86400000){
                days=Math.trunc(diff/86400000)
                diff=diff%86400000
            }
            if (diff>=3600000){
                hours=Math.trunc(diff/3600000)
                diff=diff%3600000
            }
            if(diff>=60000){
                minutes=Math.trunc(diff/60000)
            }
            let some_value="Duration: "
            if(days!=0){
                some_value+=`${days} Days `
            }
            if(hours!=0){
                some_value+=`${hours} Hours `
            }
            if(minutes!=0){
                some_value+=`${minutes} Minutes`
            }   
            getDuration.classList.remove("d-none"); 
            getDuration.textContent=some_value;
        }
        localStorage.setItem("duration",getDuration.textContent);
        localStorage.setItem("city",getCity.value)
        setTimeout(function() {
            if(getCity.value=="Hyderabad"){
                // let a1=document.createElement(a);
                // getSearchDiv.appendChild(a1);
                window.location.href = "./city1.html";
                // getTo.value="";
                // getFrom.value="";
            }
            if(getCity.value=="Bengaluru"){
                window.location.href = "./city2.html";
            }
            if(getCity.value=="Chennai"){
                window.location.href = "./city3.html";
            }
        }, 1000);
    }
};

























  




