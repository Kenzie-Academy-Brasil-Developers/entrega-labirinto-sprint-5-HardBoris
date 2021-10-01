function criaParede(array) {
    for (let i = 0; i < array.length; i++) {
        let parede = array[i];
        parede.celda.className = "wall";
    }
}

const start = fila10[0].celda;
start.id = "inicio";

const end = fila09[20].celda;
end.id = "final";

const ficha = fichas[0].celda;
const inicial = document.getElementById("inicio");
inicial.appendChild(ficha);

const b = [];
b.push(fila02[0]);
b.push(fila02[4]);
b.push(fila02[10]);
b.push(fila02[16]);
b.push(fila02[18]);
b.push(fila02[20]);

const c = [];
c.push(fila03[0]);
c.push(fila03[2]);
c.push(fila03[4]);
c.push(fila03[6]);
c.push(fila03[7]);
c.push(fila03[8]);
c.push(fila03[10]);
c.push(fila03[11]);
c.push(fila03[12]);
c.push(fila03[13]);
c.push(fila03[14]);
c.push(fila03[16]);
c.push(fila03[18]);
c.push(fila03[20]);

const d = [];
d.push(fila04[0]);
d.push(fila04[2]);
d.push(fila04[4]);
d.push(fila04[8]);
d.push(fila04[14]);
d.push(fila04[16]);
d.push(fila04[20]);

const e = [];
e.push(fila05[0]);
e.push(fila05[2]);
e.push(fila05[3]);
e.push(fila05[4]);
e.push(fila05[5]);
e.push(fila05[6]);
e.push(fila05[7]);
e.push(fila05[8]);
e.push(fila05[10]);
e.push(fila05[12]);
e.push(fila05[13]);
e.push(fila05[14]);
e.push(fila05[16]);
e.push(fila05[18]);
e.push(fila05[20]);

const f = [];
f.push(fila06[0]);
f.push(fila06[10]);
f.push(fila06[16]);
f.push(fila06[18]);
f.push(fila06[20]);

const g = [];
g.push(fila07[0]);
g.push(fila07[2]);
g.push(fila07[3]);
g.push(fila07[4]);
g.push(fila07[6]);
g.push(fila07[7]);
g.push(fila07[8]);
g.push(fila07[9]);
g.push(fila07[10]);
g.push(fila07[12]);
g.push(fila07[13]);
g.push(fila07[14]);
g.push(fila07[15]);
g.push(fila07[16]);
g.push(fila07[18]);
g.push(fila07[20]);

const h = [];
h.push(fila08[0]);
h.push(fila08[2]);
h.push(fila08[6]);
h.push(fila08[10]);
h.push(fila08[12]);
h.push(fila08[18]);
h.push(fila08[20]);

const i = [];
i.push(fila09[0]);
i.push(fila09[2]);
i.push(fila09[3]);
i.push(fila09[4]);
i.push(fila09[5]);
i.push(fila09[6]);
i.push(fila09[8]);
i.push(fila09[10]);
i.push(fila09[12]);
i.push(fila09[14]);
i.push(fila09[15]);
i.push(fila09[16]);
i.push(fila09[18]);

const j = [];
j.push(fila10[6]);
j.push(fila10[8]);
j.push(fila10[10]);
j.push(fila10[12]);
j.push(fila10[14]);
j.push(fila10[16]);
j.push(fila10[18]);
j.push(fila10[19]);
j.push(fila10[20]);

const k = [];
k.push(fila11[0]);
k.push(fila11[1]);
k.push(fila11[2]);
k.push(fila11[3]);
k.push(fila11[4]);
k.push(fila11[6]);
k.push(fila11[8]);
k.push(fila11[10]);
k.push(fila11[12]);
k.push(fila11[14]);
k.push(fila11[16]);
k.push(fila11[18]);
k.push(fila11[20]);

const l = [];
l.push(fila12[0]);
l.push(fila12[6]);
l.push(fila12[8]);
l.push(fila12[10]);
l.push(fila12[14]);
l.push(fila12[16]);
l.push(fila12[18]);
l.push(fila12[20]);

const m = [];
m.push(fila13[0]);
m.push(fila13[2]);
m.push(fila13[3]);
m.push(fila13[4]);
m.push(fila13[5]);
m.push(fila13[6]);
m.push(fila13[7]);
m.push(fila13[8]);
m.push(fila13[10]);
m.push(fila13[11]);
m.push(fila13[12]);
m.push(fila13[13]);
m.push(fila13[14]);
m.push(fila13[16]);
m.push(fila13[18]);
m.push(fila13[20]);

const n = [];
n.push(fila14[0]);
n.push(fila14[8]);
n.push(fila14[16]);
n.push(fila14[20]);

criaParede(fila01);
criaParede(b);
criaParede(c);
criaParede(d);
criaParede(e);
criaParede(f);
criaParede(g);
criaParede(h);
criaParede(i);
criaParede(j);
criaParede(k);
criaParede(l);
criaParede(m);
criaParede(n);
criaParede(fila15);
