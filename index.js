const hexLink = document.getElementById("hex");
const simpleLink = document.getElementById("simple");
const hexContainer = document.querySelector(".container--hex");
const simpleContainer = document.querySelector(".container--simple");

simpleLink.addEventListener("click", () => {
  console.log("hh");
  simpleContainer.style.display = "flex";
  hexContainer.style.display = "none";
});

hexLink.addEventListener("click", () => {
  console.log("hhhjkjh");
  simpleContainer.style.display = "none";
  hexContainer.style.display = "flex";
  hex;
});

const changeButton = document.getElementById("change-bg-btn");
const colorText = document.querySelector("#colorId");

changeButton.addEventListener("click", () => {
  const redRange = getRandomNumber();
  const blueRange = getRandomNumber();
  const greenRange = getRandomNumber();

  const RGB = `${redRange},${blueRange},${greenRange}`;

  document.body.style.backgroundColor = `rgb(${RGB})`;
  colorText.textContent = `rgb(${RGB})`;
});

const getRandomNumber = () => {
  return Math.floor(Math.random() * 255);
};

// HEX Function

const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const changeButtonHEX = document.getElementById("change-bg-btn--hex");
const colorTextHEX = document.querySelector("#colorId--hex");

changeButtonHEX.addEventListener("click", () => {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumberHEX()];
  }

  document.body.style.backgroundColor = `${hexColor}`;
  colorTextHEX.textContent = `${hexColor}`;

  console.log(hexColor);
});

const getRandomNumberHEX = () => {
  return Math.floor(Math.random() * hex.length);
};
