let get_ben_From=document.getElementById("ben_pick_up_date");
let get_ben_To=document.getElementById("ben_return_date");
get_ben_From.value=localStorage.getItem("getFrom");
get_ben_To.value=localStorage.getItem("getTo");


let get_ben_cards=document.getElementById("ben_cards_id");

console.log(localStorage.getItem("millisec_diff"));
console.log(localStorage.getItem("duration"));
let millisec_diff=localStorage.getItem("millisec_diff");
let min_1=((millisec_diff)/(60*1000));

let arr2=[
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Suzuki_S_Cross.jpg",make:"Suzuki",model:"S-Cross",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"1",price:1},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Mahindra_XUV_500.jpg",make:"Mahendra",model:"XUV 500",operation:"Manual",fuel:"Diesel",capacity:"7",baggage:"2",price:4.0},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Etios_Liva.jpg",make:"Toyato",model:"Etios Liva",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"3",price:2.9},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Toyota_Etios.jpg",make:"Toyato",model:"Etios",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"3",price:2.2},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Hyundai_Elite_i20.jpg",make:"Hyndai",model:"Elite i20",operation:"Manual",fuel:"Petrol",capacity:"5",baggage:"2",price:1.7},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Hyundai_Creta.jpg",make:"Hyundai",model:"Creta",operation:"MT/AT",fuel:"Diesel",capacity:"5",baggage:"2",price:2.1},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/Maruti_Ciaz.jpg",make:"Maruti",model:"Ciaz",operation:"Automatic",fuel:"Petrol",capacity:"5",baggage:"2",price:2.3},
    {image:"https://www.mychoize.com/mychoize-live/current/files/fleets/180813023859.jpg",make:"Hyundai",model:"Grand i10",operation:"Manual",fuel:"Diesel",capacity:"5",baggage:"1",price:0.7},
]

for(let i=0;i<arr2.length;i++){
    let car=arr2[i];

let each_card=document.createElement("div");
get_ben_cards.appendChild(each_card);
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
    window.localStorage.setItem("Each_Car",JSON.stringify(arr2[i]));
    window.location.assign( "./Book1.html");
}
}


let current_date=new Date().toISOString().slice(0, 16); 
get_ben_From.setAttribute("min",current_date);
get_ben_To.setAttribute("min",current_date);

get_ben_From.onchange = function() {
    localStorage.setItem("getFrom",this.value);
    get_ben_From.value=localStorage.getItem("getFrom");
};
get_ben_To.onchange = function() {
    localStorage.setItem("getTo",this.value);
    get_ben_To.value=localStorage.getItem("getTo");
};


let get_ben_modifybtn=document.getElementById("ben_modifybtn");

get_ben_modifybtn.addEventListener("click",benFunction);
function benFunction(){
    let diff_1=new Date(get_ben_To.value)-new Date(get_ben_From.value);
    
    localStorage.setItem("millisec_diff",diff_1);
    millisec_diff=localStorage.getItem("millisec_diff");
    min_1=((millisec_diff)/(60*1000));
    for(i=0;i<arr2.length;i++){
        let car=arr2[i];
        amount.textContent=Math.trunc(min_1*car.price);
    }
    
}




