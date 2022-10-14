const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./test.jpg";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//const canvasWidth = canvas.width;
//const canvasHeight = canvas.height;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;


//ctx.canvas.width = window.innerWidth;
//ctx.canvas.height = window.innerHeight;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;


img.addEventListener("load", () => {
    //ctx.drawImage(img, 0, 0);
    ctx.drawImage(img, -100, -100, img.width *  3, img.height * 3);
    img.style.display = "none";
});
const hoveredColor = document.getElementById("hovered-color");
const selectedColor = document.getElementById("selected-color");


window.addEventListener('load', (event) => {
    let x = 0;
    let y = 0;
    const pixel = ctx.getImageData(x, y, 1, 1);
    const data = pixel.data;
    const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
    console.log(rgba);


    let output = document.getElementById('output');

    /*for (let i = 0; i < canvasWidth; i = i + 10) {
        for (var j = 1; j < canvasHeight; j = j + 10) {
            let x = i;
            let y = j;
            const pixel = ctx.getImageData(x, y, 1, 1);
            const data = pixel.data;

            const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

            let outputElem = document.createElement("div")
            outputElem.classList.add("output-elem")
            outputElem.textContent = "0";
            outputElem.style.color = rgba;
            output.appendChild(outputElem);
        };
        let newLine = document.createElement("div");
        output.appendChild(newLine);
    }*/
    //
    for (let i = 0; i < canvasHeight; i = i + 18) {
        for (var j = 1; j < canvasWidth; j = j + 9) {
            let x = j;
            let y = i;
            const pixel = ctx.getImageData(x, y, 1, 1);
            const data = pixel.data;

            const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

            let outputElem = document.createElement("div")
            outputElem.classList.add("output-elem")
            outputElem.textContent = "0";
            outputElem.style.color = rgba;
            output.appendChild(outputElem);
        };
        let newLine = document.createElement("div");
        output.appendChild(newLine);
    }
})