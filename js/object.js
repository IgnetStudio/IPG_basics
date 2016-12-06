// OBJECTS

/*

LEGEND

OB = OBJECT
DT = DATA
qb = quiz
op = option
qn = question
ct = correct
mf = modify

*/

// modyfing & removing keys & values

var OB_qb = {
    DT_op_01: "jurodiwy",
    DT_op_02: "karbowy",
    DT_op_03: "totumfacki",
    DT_op_04: "wajchowy",
    DT_op_05: "zbędna odpowiedź"
};

OB_qb.DT_qn = "urzędnik dworski nadzorujący roboty polne";

delete OB_qb.DT_op_05;

console.log(OB_qb);

// modyfing & calling functions

var OB_qb = {
    DT_qn: "człowiek gnuśny, leniwy",
    DT_op_01: "bajbak",
    DT_op_02: "mydłek",
    DT_op_03: "szmątek",
    DT_op_04: "trzpiot",
    DT_op_ct: function() {
        console.log("Prawidłowa odpowiedź to: " + this.DT_op_01);
    },
    DT_mf_01: function(DT_op_01) {
        this.DT_op_01 = DT_op_01;
    }
};

OB_qb.DT_op_ct ();
OB_qb.DT_mf_01 ("bajbak. OK");

console.log(OB_qb);

// comparing references, keys & values

var OB_ex_01 = {
    key: "value"
};

var OB_ex_02 = {
    key: "value"
};

console.log(OB_ex_01 === OB_ex_02); // false, comparing references

console.log(OB_ex_01.key === OB_ex_02.key); // true, comparing key values

var OB_ex_03 = OB_ex_02;

console.log(OB_ex_03 === OB_ex_02); // true, same references