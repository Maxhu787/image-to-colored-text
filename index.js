const img = new Image();
img.crossOrigin = "anonymous";
img.src = "./test.jpg";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//const canvasWidth = canvas.width;
//const canvasHeight = canvas.height;

const widthHeight_var = 1;

const canvasWidth = window.innerWidth * widthHeight_var;
const canvasHeight = window.innerHeight * widthHeight_var;


//ctx.canvas.width = window.innerWidth;
//ctx.canvas.height = window.innerHeight;

ctx.canvas.width = window.innerWidth * widthHeight_var;
ctx.canvas.height = window.innerHeight * widthHeight_var;


img.addEventListener("load", () => {
    //ctx.drawImage(img, 0, 0);
    //ctx.drawImage(img, -100, -100, img.width *  3, img.height * 3);
    ctx.drawImage(img, 0, 0, img.width * 2, img.height * 2);
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
    const drawOutput_var = 14;
    for (let i = 0; i < canvasHeight; i = i + drawOutput_var) {
        for (var j = 1; j < canvasWidth; j = j + (drawOutput_var / 2)) {
            let x = j;
            let y = i;
            const pixel = ctx.getImageData(x, y, 1, 1);
            const data = pixel.data;

            const rgba = `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;

            let outputElem = document.createElement("div")
            outputElem.classList.add("output-elem")
            //let letters = ["g", "4", "o", "2"];
            //outputElem.textContent = letters[Math.floor(Math.random() * letters.length)];
            outputElem.textContent = '8';
            outputElem.style.color = rgba;
            //outputElem.style.background = rgba;
            output.appendChild(outputElem);
        };
        let newLine = document.createElement("div");
        output.appendChild(newLine);
    }
})