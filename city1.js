let get_hyd_From=document.getElementById("hyd_pick_up_date");
let get_hyd_To=document.getElementById("hyd_return_date");


get_hyd_From.value=localStorage.getItem("getFrom");
get_hyd_To.value=localStorage.getItem("getTo");


let get_hyd_cards=document.getElementById("hyd_cards_id");

console.log(localStorage.getItem("millisec_diff"));
console.log(localStorage.getItem("duration"));
let millisec_diff=localStorage.getItem("millisec_diff");
let min_1=((millisec_diff)/(60*1000));

let arr1=[
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Honda_City.jpg",make:"Honda",model:"City",operation:"Automatic",fuel:"Petrol",capacity:"5",baggage:"3",price:2.4},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Honda_Amaze.jpg",make:"Honda",model:"Amaze",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"3",price:2.6},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Ford_Figo_Aspire.jpg",make:"Ford",model:"Figo Aspire",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"3",price:1.8},
   
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Mahindra_KUV_100.jpg",make:"Mahendra",model:"KUV 100",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"1",price:1.1},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Swift.jpg",make:"Maruti",model:"Swift",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"2",price:2.6},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Innova_Crysta.jpg",make:"Toyato",model:"Innova Crysta",operation:"Manual",fuel:"Diesel",capacity:"7",baggage:"2",price:2.2},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Hyundai_Xcent.jpg",make:"Hyundai",model:"Xcent",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"1",price:1},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Swift_Dzire.jpg",make:"Maruti",model:"Swift Dzire",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"3",price:2.2},
    
]

for(let i=0;i<arr1.length;i++){
    let car=arr1[i];

let each_card=document.createElement("div");
get_hyd_cards.appendChild(each_card);
each_card.classList.add("hyd_each_card");
each_card.setAttribute("id",i);

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
localStorage.setItem("amount",amount.textContent);

let book=document.createElement("button");
each_card.appendChild(book);
book.classList.add("button1");
book.classList.add("button3");
book.textContent="Book";

book.addEventListener("click",booking);
function booking(){
   
    window.localStorage.setItem("Each_Car",JSON.stringify(arr1[i]));
    window.location.assign( "./Book1.html");
}
}

let current_date=new Date().toISOString().slice(0, 16); 
get_hyd_From.setAttribute("min",current_date);
get_hyd_To.setAttribute("min",current_date);



get_hyd_From.onchange = function() {
    
    localStorage.setItem("getFrom",this.value);
    get_hyd_From.value=localStorage.getItem("getFrom");
};
get_hyd_To.onchange = function() {
    localStorage.setItem("getTo",this.value);
    get_hyd_To.value=localStorage.getItem("getTo");
};

let get_hyd_modifybtn=document.getElementById("hyd_modifybtn");

get_hyd_modifybtn.addEventListener("click",hydFunction);
function hydFunction(){
    
    let diff_1=new Date(get_hyd_To.value)-new Date(get_hyd_From.value);
    
    localStorage.setItem("millisec_diff",diff_1);
    millisec_diff=localStorage.getItem("millisec_diff");
    min_1=((millisec_diff)/(60*1000));
    for(i=0;i<arr1.length;i++){
        let car=arr1[i];
        amount.textContent=Math.trunc(min_1*car.price);
    }
}

