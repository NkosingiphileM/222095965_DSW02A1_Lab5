//let button = document.getElementById("blendBtn");
//button.addEventListener("click", blend);
window.onload = function () {

    let button = document.getElementById("blendBtn");

    button.addEventListener("click", blend);
};

function blend() {

    let surname = document.getElementById("surname").value;
    let output = document.getElementById("output");
    let font = document.getElementById("font").value;
    let color = document.getElementById("color").value;
    let sizeSlider = document.getElementById("sizeSlider").value;
    let spacing = document.getElementById("spacing").value;

    output.innerHTML = "";

    let selected = document.querySelector('input[name="pos"]:checked');


    let positionType = selected.value;

    if (positionType === "rev") {
        surname = surname.split("").reverse().join("");
    }

    for (let i = 0; i < surname.length; i++) {

        let letter = document.createElement("span");
        letter.innerText = surname[i];

        letter.classList.add("letter");

        letter.style.fontFamily = font;
        letter.style.color = color;
        letter.style.fontSize = sizeSlider + "px";
        letter.style.letterSpacing = spacing + "px";

        if (positionType === "seq" || positionType === "rev") {

            letter.style.left = (15 * (i + 1)) + "px";
           // letter.style.top = (15 * (i + 1)) + "px";
            letter.style.top = "0px";

        } else {

         let x = Math.floor(Math.random() * 10) * 30;
         let y = Math.floor(Math.random() * 5) * 30;

            letter.style.left = x + "px";
            letter.style.top = y + "px";
        }

        output.appendChild(letter);
    }
} 