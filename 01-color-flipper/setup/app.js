const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = colors[getRandomNumber()];
    document.body.style.backgroundColor = randomNumber;
    color.textContent = randomNumber;
});
function getRandomNumber(){
   return Math.floor(Math.random() * colors.length);
};
