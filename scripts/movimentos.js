function vitoriaMsg() {
    let x = ficha.parentElement.className;
    if (x === "final") {
        mensaje.style.display = "inline-block";
    }
}

function moveUp(x) {
    let xUp = parseInt(x) - 21;
    let pasoUp = document.getElementById(xUp);
    if (pasoUp.className === "estrada") {
        pasoUp.appendChild(ficha);
        pasoUp.className = "caminho";
    }
    if (pasoUp.className === "caminho") {
        pasoUp.appendChild(ficha);
    }
}

function moveDown(x) {
    let xDown = parseInt(x) + 21;
    let pasoDown = document.getElementById(xDown);
    if (pasoDown.className === "estrada") {
        pasoDown.appendChild(ficha);
        pasoDown.className = "caminho";
    }
    if (pasoDown.className === "caminho") {
        pasoDown.appendChild(ficha);
    }
}

function moveLeft(x) {
    let xLeft = parseInt(x) - 1;
    let pasoLeft = document.getElementById(xLeft);
    if (pasoLeft.className === "estrada") {
        pasoLeft.appendChild(ficha);
        pasoLeft.className = "caminho";
    }
    if (pasoLeft.className === "caminho") {
        pasoLeft.appendChild(ficha);
    }
    if (pasoLeft.className === "inicio") {
        pasoLeft.appendChild(ficha);
    }
}

function moveRight(x) {
    let xRight = parseInt(x) + 1;
    let pasoRight = document.getElementById(xRight);
    if (pasoRight.className === "estrada") {
        pasoRight.appendChild(ficha);
        pasoRight.className = "caminho";
    }
    if (pasoRight.className === "caminho") {
        pasoRight.appendChild(ficha);
    }
    if (pasoRight.className === "final") {
        pasoRight.appendChild(ficha);
        vitoriaMsg();
    }
}

window.addEventListener("keydown", (event) => {
    let tecla = event.key;
    let x = ficha.parentElement.id;
    switch (tecla) {
        case "ArrowUp":
            moveUp(x);
            break;
    
        case "ArrowDown":
            moveDown(x);
            break;

        case "ArrowLeft":
            moveLeft(x);
            break;

        case "ArrowRight":
            moveRight(x);
            break;
    }
})

