function generate() {
    captcha = document.getElementById("captcha");
    let uniquechar = "";
    let uniquechar2 = ""

    const randomchar =
        "0123456789";
    // "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 1; i < 7; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }

    captcha.innerHTML = uniquechar;

}

let inputs = document.querySelectorAll("#input div");

let numbers = document.querySelectorAll("#numbers div")

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        inputs[0].innerHTML=numbers[i].innerHTML
    })
}

