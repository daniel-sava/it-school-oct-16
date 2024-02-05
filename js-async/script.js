const backgroundColors = ["blue", "red", "yellow", "purple", "brown", "pink", "grey", "black"];

const area = document.querySelector(".area");

setTimeout(() => {
    area.style.backgroundColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
}, 10000);

console.log("before for");

for (let i = 0; i < 100; i++) {
    console.log("Setting timeout for i = ", i);
    setTimeout(() => {
        console.log(i);
    }, 5000);
}

console.log("after for");

const time = document.querySelector(".time");

setInterval(() => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    time.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}, 1000);
