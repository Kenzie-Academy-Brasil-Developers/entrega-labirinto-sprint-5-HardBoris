function vitoria() {
    let x = ficha.parentElement.className;
    if (x === "final") {
        console.log("Você venceu!");
    }
}

function moveUp() {
    let x = ficha.parentElement.id;
    let xUp = parseInt(x) - 21;
    let pasoUp = document.getElementById(xUp);
    if (pasoUp.className === "estrada") {
        pasoUp.appendChild(ficha);
        pasoUp.className = "caminho";
    }
}

function moveDown() {
    let x = ficha.parentElement.id;
    let xDown = parseInt(x) + 21;
    let pasoDown = document.getElementById(xDown);
    if (pasoDown.className === "estrada") {
        pasoDown.appendChild(ficha);
        pasoDown.className = "caminho";
    }
}

function moveLeft() {
    let x = ficha.parentElement.id;
    let xLeft = parseInt(x) - 1;
    let pasoLeft = document.getElementById(xLeft);
    if (pasoLeft.className === "estrada") {
        pasoLeft.appendChild(ficha);
        pasoLeft.className = "caminho";
    }
}

function moveRight() {
    let x = ficha.parentElement.id;
    let xRight = parseInt(x) + 1;
    let pasoRight = document.getElementById(xRight);
    if (pasoRight.className === "estrada") {
        pasoRight.appendChild(ficha);
        pasoRight.className = "caminho";
    }
    if (pasoRight.className === "final") {
        pasoRight.appendChild(ficha);
        vitoria();
    }
}

window.addEventListener("keydown", (event) => {
    let tecla = event.key;
    switch (tecla) {
        case "ArrowUp":
            moveUp();
            break;
    
        case "ArrowDown":
            moveDown();
            break;

        case "ArrowLeft":
            moveLeft();
            break;

        case "ArrowRight":
            moveRight();
            break;
    }
})

