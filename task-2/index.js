const input = document.querySelector("#controls input");
const renderBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');
const boxes = document.getElementById("boxes");

function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)}, 
              ${Math.floor(Math.random() * 256)})`;
}

function createBoxes(amount) {
    let size = 30;
    const elements = [];

    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomColor();
        div.style.margin = "5px";
        elements.push(div);
        size += 10;
    }

    boxes.append(...elements);
}

function destroyBoxes() {
    boxes.innerHTML = "";
}

renderBtn.addEventListener("click", () => {
    destroyBoxes();
    const amount = Number(input.value);
    createBoxes(amount);
});

destroyBtn.addEventListener("click", destroyBoxes);