let uniquechar = "";
let uniquechar2 = ""
function generate() {
    captcha = document.getElementById("captcha");

    const randomchar =
        "0123456789";
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 1; i < 7; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }

    captcha.innerHTML = uniquechar;

}

let payment = document.querySelectorAll("#payment h4");
let inputs = document.querySelectorAll("#input div");
let flats = document.querySelectorAll("#flats_choose h4");
let floors = document.querySelectorAll("#floors div");
let rooms_count = document.querySelectorAll("#rooms_count div");
let type = document.querySelectorAll("#types div");
let birthday = document.querySelectorAll("#date div");
let second_number = document.querySelectorAll("#number div")

let numbers = document.querySelectorAll("#numbers div");
let j = 0;
let k = 0;

// for (let i = 0; i < second_number.length; i++) {
//     second_number[i].addEventListener("click", () => {        
//         debugger;
//         if (i<2) {
//             birthday[k].innerHTML += second_number[i].innerHTML;
//         }
//         else{
//             k++;
//             birthday[k].innerHTML += second_number[i].innerHTML;
//             i++;
//         }
//     })
// }

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        if (j < 6) {
            if (!inputs[j].innerHTML)
                inputs[j].innerHTML = numbers[i].innerHTML;


            uniquechar2 += numbers[i].innerHTML;
            if (j == 5 && uniquechar != uniquechar2) {
                alert("Captcha kodu yanlisdir")
            }
            j++;
        }
    })
}

for (let i = 0; i < payment.length; i++) {
    payment[i].addEventListener("click", () => {
        payment[i].classList.toggle("selected")
    })
}


for (let i = 0; i < flats.length; i++) {
    flats[i].addEventListener("click", () => {
        flats[i].classList.add("selected")
    })
}


for (let i = 0; i < floors.length; i++) {
    floors[i].addEventListener("click", () => {
        floors[i].classList.toggle("selected")
    })
}

for (let i = 0; i < rooms_count.length; i++) {
    rooms_count[i].addEventListener("click", () => {
        rooms_count[i].classList.toggle("selected")
    })
}

for (let i = 0; i < type.length; i++) {
    type[i].addEventListener("click", () => {
        type[i].classList.toggle("selected")
    })
}

