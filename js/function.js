// FUNCTIONS

/*

LEGEND:

FN = FUNCTION
AR = ARRAY
qb = quiz

*/

// example 01

function FN_qb() {
    var AR_qb = ["banita", "eremita", "lewita", "saloita"];
    return AR_qb;
}
console.log(FN_qb());
console.log(FN_qb()[0]);

// ex 02 (not much useful)
var OB_qb_01 = {
    answer: "etranżer",
    value: false
};
var OB_qb_02 = {
    answer: "luminarz",
    value: false
};
var OB_qb_03 = {
    answer: "pigmalion",
    value: true
};
var OB_qb_04 = {
    answer: "zelota",
    value: false
};

function question(OB) {
    return OB.value;
}
if (question(OB_qb_01)) {
    console.log("ok");
}
else if (question(OB_qb_02)) {
    console.log("ok");
}
else if (question(OB_qb_03)) {
    console.log("Dobra odpowiedź: " + OB_qb_03.answer);
}
else if (question(OB_qb_04)) {
    console.log("ok");
}

// ex 03

var AR_qb = [
  {
    answer: "beginka",
    value: true
  },
  {
    answer: "mniszka",
    value: false
  },
  {
    answer: "numeraria",
    value: false
  },
  {
    answer: "szarytka",
    value: false
  }
];

for (var i = 0; i < 4; i++) {
  console.log ("Odpowiedź " + (i+1) + ": " + AR_qb[i].answer);
  
  if (FN_qb (AR_qb[i]) ) {
    console.log("Poprawna odpowiedź.")
  }
  else {
    console.log("Błąd.")
  }
}

function FN_qb (OB_qb) {
  return OB_qb.value;
}