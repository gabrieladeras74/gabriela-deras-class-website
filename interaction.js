
const sunMoon = document.getElementById("sunMoon");
const skyImage = sunMoon.querySelector("img");
const message = document.getElementById("message");
const timeTitle = document.getElementById("timeTitle");

sunMoon.addEventListener("click", changeTime);

function changeTime() {

    document.body.classList.toggle("night");

    if (document.body.classList.contains("night")) {

        skyImage.src = "cute moon.png";
        skyImage.alt = "Moon";

        timeTitle.textContent = "It's Nighttime!";

        message.textContent = "Sweet dreams, little star ⏾⋆.˚";

    } else {

        skyImage.src = "cute sun.png";
        skyImage.alt = "Sun";

        timeTitle.textContent = "It's Daytime!";

        message.textContent = "☀︎⋆ A little sunshine to brighten your day ⋆☀︎";
    }
}