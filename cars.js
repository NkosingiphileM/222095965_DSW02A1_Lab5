// 222095965

let makes = ["VW","BMW","Benz","Audi","Ford","Toyota","Lexus","jaguar"];

let cars = [
    {
        car_name: "Polo",
        car_type: "supermini",
        car_make:"VW",
        car_image:"images/polo.jpeg"
    },
    {
        car_name: "M4",
        car_type: "Coupe",
        car_make:"BMW",
        car_image: "images/bmw m4 comp.jpeg"
    },
    {
        car_name: "A-Class",
        car_type: "Sedan",
        car_make:"Benz",
        car_image:"images/Benz A-Class.jpeg"
    },
    {
        car_name: "A4",
        car_type: "Sedan",
        car_make:"Audi",
        car_image:"images/Audi A4.jpeg"
    },
    {
        car_name: "Ranger",
        car_type: "Bakkie",
        car_make:"Ford",
        car_image:"images/2023 Ford Ranger Raptor.jpeg"
    },
    {
        car_name: "Corolla",
        car_type: "Sedan",
        car_make:"Toyota",
        car_image:"images/Toyota Corolla.jpeg"
    },
    { 
        car_name: "RZ",
        car_type: "Electric",
        car_make:"Lexus",
        car_image:"images/Lexus RZ.jpeg" },
    {
        car_name: "F-TYPE", 
        car_type: "Sports", 
        car_make:"Jaguar",
        car_image:"images/Jaguar F-Type.jpeg"
    }
];


let count = 0;
let total = 0;
let currentCar;

    //  Dropdown();

    // let guessBtn = document.getElementById("guess-btn");
    // RandomCar();
    //  btn.classList.remove("disabled");
  
    // guessBtn.addEventListener("click", checkedGuess);

window.onload = function () { // js runs after everything

    Dropdown();
    RandomCar();

    let guessBtn = document.getElementById("guess-btn");
    guessBtn.classList.remove("disabled");

    guessBtn.addEventListener("click", checkedGuess);
};


function Dropdown() {

    let dropdown = document.getElementById("make-list");

    for (let i = 0; i < makes.length; i++) {

        let option = document.createElement("option");
        option.value = makes[i];
        option.text = makes[i];

        dropdown.appendChild(option);
    }
}


function RandomCar() {

    let randomIndex = Math.floor(Math.random() * cars.length);
    currentCar = cars[randomIndex];

    document.getElementById("car-name").innerText = currentCar.car_name;
    document.getElementById("car-type").innerText = currentCar.car_type;

    let img = document.getElementById("car-img");
    img.src = currentCar.car_image;

    img.classList.remove("hidden");
}


function checkedGuess() {

    let btn = document.getElementById("guess-btn");
    btn.classList.add("disabled");

    let selected= document.getElementById("make-list").value;

    if (selected === currentCar.car_make) {
        count++;
        document.getElementById("correct").innerText = count;
    }

    total++;
    document.getElementById("total").innerText = total;

    RandomCar();

    btn.classList.remove("disabled");
}