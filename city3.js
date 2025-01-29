let get_che_From=document.getElementById("che_pick_up_date");
let get_che_To=document.getElementById("che_return_date");
get_che_From.value=localStorage.getItem("getFrom");
get_che_To.value=localStorage.getItem("getTo");


let get_che_cards=document.getElementById("che_cards_id");

console.log(localStorage.getItem("millisec_diff"));
console.log(localStorage.getItem("duration"));
let millisec_diff=localStorage.getItem("millisec_diff");
let min_1=((millisec_diff)/(60*1000));

let arr3=[
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Mahindra_XUV_300.jpg",make:"Mahendra",model:"TUV 300",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"2",price:2.2},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Ford_Ecosport.jpg",make:"Ford",model:"EcoSport",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"1",price:1.4},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Mahindra_Scorpio.jpg",make:"Mahendra",model:"Scorpio",operation:"MT/AT",fuel:"Diesel",capacity:"7",baggage:"2",price:3.8},

    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Baleno.jpg",make:"Maruti",model:"Baleno",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"2",price:1.3},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Ertiga_Hybrid.jpg",make:"Maruti",model:"Etriga",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"1",price:1},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Vitara_Brezza.jpg",make:"Maruti",model:"Vitara Brezza",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"1",price:2.0},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Fortuner.jpg",make:"Toyato",model:"Fortuner",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"1",price:1.8},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Hyundai_i20.jpg",make:"Hyundai",model:"i20",operation:"Manual",fuel:"Petrol",capacity:"5",baggage:"1",price:1.6},
]

for(let i=0;i<arr3.length;i++){
    let car=arr3[i];

let each_card=document.createElement("div");
get_che_cards.appendChild(each_card);
each_card.classList.add("hyd_each_card");

let imgEle=document.createElement("img");
each_card.appendChild(imgEle);
imgEle.setAttribute("src",car.image);
imgEle.classList.add("f_img")

let para1=document.createElement("p");
each_card.appendChild(para1);
para1.textContent=car.make;
para1.classList.add("make");

let h5=document.createElement("h5");
each_card.appendChild(h5);
h5.textContent=car.model;
h5.classList.add("model");

let ul1=document.createElement("ul");
each_card.appendChild(ul1);
ul1.classList.add("icons_cont");
ul1.setAttribute("id","ul1");


let li1=document.createElement("li");
ul1.appendChild(li1);
let li_img1=document.createElement("img");
li1.appendChild(li_img1);
li_img1.setAttribute("src","https://www.mychoize.com/assets/img/automatic.svg");
li_img1.classList.add("icon-size");
let span1=document.createElement("span");
li1.appendChild(span1);
span1.textContent=car.operation;

let li2=document.createElement("li");
ul1.appendChild(li2);
let li_img2=document.createElement("img");
li2.appendChild(li_img2);
li_img2.setAttribute("src","https://www.mychoize.com/assets/img/petrol1.svg");
li_img2.classList.add("icon-size","diesel");
let span2=document.createElement("span");
li2.appendChild(span2);
span2.textContent=car.fuel;


let ul2=document.createElement("ul");
each_card.appendChild(ul2);
ul2.classList.add("icons_cont");
ul2.setAttribute("id","ul2");

let li3=document.createElement("li");
ul2.appendChild(li3);
let li_img3=document.createElement("img");
li3.appendChild(li_img3);
li_img3.setAttribute("src","https://www.mychoize.com/assets/img/seat.svg");
li_img3.classList.add("icon-size");
let span3=document.createElement("span");
li3.appendChild(span3);
span3.textContent=car.capacity+"Seater";

let li4=document.createElement("li");
ul2.appendChild(li4);
let li_img4=document.createElement("img");
li4.appendChild(li_img4);
li_img4.setAttribute("src","https://www.mychoize.com/assets/img/pick-up.svg");
li_img4.classList.add("icon-size");
let span4=document.createElement("span");
li4.appendChild(span4);
span4.textContent=car.baggage+"Baggage";


let rupee=document.createElement("img");
each_card.appendChild(rupee);
rupee.setAttribute("src","./rupee-indian.png");
rupee.setAttribute("id","rupee")

let amount=document.createElement("span");
each_card.appendChild(amount);
amount.textContent=Math.trunc(min_1*car.price);
amount.classList.add("amount1");

let book=document.createElement("button");
each_card.appendChild(book);
book.classList.add("button1");
book.classList.add("button3");
book.textContent="Book";

book.addEventListener("click",booking);
function booking(){
    window.localStorage.setItem("Each_Car",JSON.stringify(arr3[i]));
    window.location.assign( "./Book1.html");
}
}

let current_date=new Date().toISOString().slice(0, 16); 
get_che_From.setAttribute("min",current_date);
get_che_To.setAttribute("min",current_date);

get_che_From.onchange = function() {
    localStorage.setItem("getFrom",this.value);
    get_che_From.value=localStorage.getItem("getFrom");
};
get_che_To.onchange = function() {
    localStorage.setItem("getTo",this.value);
    get_che_To.value=localStorage.getItem("getTo");
};

let get_ben_modifybtn=document.getElementById("che_modifybtn");

get_ben_modifybtn.addEventListener("click",cheFunction);
function cheFunction(){
    let diff_1=new Date(get_che_To.value)-new Date(get_che_From.value);
    
    localStorage.setItem("millisec_diff",diff_1);
    millisec_diff=localStorage.getItem("millisec_diff");
    min_1=((millisec_diff)/(60*1000));
    for(i=0;i<arr3.length;i++){
        let car=arr3[i];
        amount.textContent=Math.trunc(min_1*car.price);
    } 
}




