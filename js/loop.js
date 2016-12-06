/*

DT = DATA
AR = ARRAY
an = answer
cr = correct
qn = question
pm = prompt
ky = key
op = option
in = insert

*/

// while

var DT_an_cr_01 = "subiekt";
var DT_an_cr_02 = "Subiekt";
var DT_an_cr_03 = "d";
var DT_an_cr_04 = "D";
var DT_qn = "sprzedawca w sklepie to:\na) markierant\nb) merkuriusz\nc) pryncypał\nd) subiekt";
var DT_pm = prompt(DT_qn);

while (DT_pm != DT_an_cr_01
    && DT_pm != DT_an_cr_02
    && DT_pm != DT_an_cr_03
    && DT_pm != DT_an_cr_04) {
            alert("Zła odpowiedź.");
            DT_pm = prompt(DT_qn);
}
alert("Dobra odpowiedź");

// for

for(var i = 0; i <= 10; i++) {
    console.log(i);
}

// for in (objects only)

var DT_qn = {
    a: "bogdanka",
    b: "makolągwa",
    c: "szeptunka",
    d: "świekra"
};
var DT_an = prompt("matka męża, teściowa to:\na) bogdanka\nb) makolągwa\nc) szeptunka\nd) świekra");

for(var DT_ky in DT_qn) {
    if (DT_ky === DT_an) {
      console.log(DT_ky + ") " + DT_qn[DT_ky]);
    }
}

// breaking loop

var AR_op_cr  = ["areopag", "Areopag", "a", "A"],
    DT_qn = prompt("grono osób decydujące arbitralnie o czymś:\na) areopag\nb) gmin\nc) intendentura\nd) minorum gentium"),
    DT_in = false;

for(var i = 0; i < AR_op_cr.length; i++) {

    if(AR_op_cr[i] === DT_qn) {
        DT_in = true;
        break;
    }
}

if (DT_in) {
  alert("Dobra Odpowiedź");
} else {
  alert("Zła odpowiedź")
}