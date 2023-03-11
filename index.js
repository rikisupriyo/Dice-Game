let button = document.getElementById("btn");

button.onclick = function () {
    let randomnumber1 = Math.floor(Math.random() * 6) + 1;
    let randomnumber2 = Math.floor(Math.random() * 6) + 1;

    let sourceimage1 = "image/dice" + randomnumber1 + ".png";
    let sourceimage2 = "image/dice" + randomnumber2 + ".png";

    let image1 = document.querySelectorAll("img")[0];
    let image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src", sourceimage1);
    image2.setAttribute("src", sourceimage2);

    if (randomnumber1 > randomnumber2)
        document.querySelector("h1").innerHTML = "Player 1 wins! 🥳";
    else if (randomnumber2 > randomnumber1)
        document.querySelector("h1").innerHTML = "Player 2 wins! 🥳";
    else
        document.querySelector("h1").innerHTML = "Draw! 😳";
}
