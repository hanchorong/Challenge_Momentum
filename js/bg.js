const bgImage = ["leave1.png", "leave2.png", "leave3.png"];

const randomImage = bgImage[Math.floor(Math.random() * bgImage.length)];

const img1 = document.createElement("img");
const img2 = document.createElement("img");

const div = document.querySelector("#bg");

div.appendChild(img1);
div.appendChild(img2);

const IMG_ROOT = `./img/${randomImage}`;

img1.src = IMG_ROOT;
img2.src = IMG_ROOT;

img1.classList.add("leave1_1");
img2.classList.add("leave1_2");
