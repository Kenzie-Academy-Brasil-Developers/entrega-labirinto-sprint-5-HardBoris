const principal = document.getElementById("principal");
const labirinto = document.createElement("section");
labirinto.id = "labirinto";
principal.appendChild(labirinto);

function Celda(i, str){
    this.celda = document.createElement("div");
    this.celda.id = i + 1;
    this.celda.className = str;
}

function Fila(i, str){
    this.fila = document.createElement("div");
    this.fila.id = String.fromCharCode(97 + i);
    this.fila.className = str;
}

const filas = [];

function criaFilas(n, str, array) {
    for (let i = 0; i < n; i++) {
        array[i] = new Fila(i, str);
    }
    return array;
}

criaFilas(15, "fila", filas);

function dibujaFilas(array, tag) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tag.appendChild(element.fila);
    }
}

dibujaFilas(filas, labirinto);

const fila01 = [];
const fila02 = [];
const fila03 = [];
const fila04 = [];
const fila05 = [];
const fila06 = [];
const fila07 = [];
const fila08 = [];
const fila09 = [];
const fila10 = [];
const fila11 = [];
const fila12 = [];
const fila13 = [];
const fila14 = [];
const fila15 = [];

function criaCeldas(n, str, array) {
    for (let i = n; i < n + 21; i++) {
        array[i - n] = new Celda(i, str);
    }
    return array;
}

criaCeldas(0, "celda", fila01);
criaCeldas(21, "celda", fila02);
criaCeldas(42, "celda", fila03);
criaCeldas(63, "celda", fila04);
criaCeldas(84, "celda", fila05);
criaCeldas(105, "celda", fila06);
criaCeldas(126, "celda", fila07);
criaCeldas(147, "celda", fila08);
criaCeldas(168, "celda", fila09);
criaCeldas(189, "celda", fila10);
criaCeldas(210, "celda", fila11);
criaCeldas(231, "celda", fila12);
criaCeldas(252, "celda", fila13);
criaCeldas(273, "celda", fila14);
criaCeldas(294, "celda", fila15);

const filaA = document.getElementById("a");
const filaB = document.getElementById("b");
const filaC = document.getElementById("c");
const filaD = document.getElementById("d");
const filaE = document.getElementById("e");
const filaF = document.getElementById("f");
const filaG = document.getElementById("g");
const filaH = document.getElementById("h");
const filaI = document.getElementById("i");
const filaJ = document.getElementById("j");
const filaK = document.getElementById("k");
const filaL = document.getElementById("l");
const filaM = document.getElementById("m");
const filaN = document.getElementById("n");
const filaO = document.getElementById("o");

function dibujaCeldas(array, tag) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        tag.appendChild(element.celda);
    }
}


dibujaCeldas(fila01, filaA);
dibujaCeldas(fila02, filaB);
dibujaCeldas(fila03, filaC);
dibujaCeldas(fila04, filaD);
dibujaCeldas(fila05, filaE);
dibujaCeldas(fila06, filaF);
dibujaCeldas(fila07, filaG);
dibujaCeldas(fila08, filaH);
dibujaCeldas(fila09, filaI);
dibujaCeldas(fila10, filaJ);
dibujaCeldas(fila11, filaK);
dibujaCeldas(fila12, filaL);
dibujaCeldas(fila13, filaM);
dibujaCeldas(fila14, filaN);
dibujaCeldas(fila15, filaO);

const fichas = [];

criaCeldas(999, "ficha", fichas);
