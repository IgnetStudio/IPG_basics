/*

LEGEND

DT = DATA

rd = ready
vl = value
nr = nr
ck = check
pa = parity
tx = string
nm = name
df = definition
an = answer

*/

// CHECK

var DT_rd = true;
if (DT_rd) {
    console.log("Data is ready");
}
else {
    console.log("Data is not ready");
}

// False values: false / 0 / "" / null / undefined / NaN
var DT_vl = "0 ";
if (DT_vl) {
    console.log("OK");
}
else {
    console.log("not OK")
}

// COMPARE 

var DT_nr = 20;
if (DT_nr == "20") {
    console.log("double equal sign compares only value");
}
if (DT_nr === 20) {
    console.log("triple equal sign compares value and typeof");
}
if (DT_nr !== "20") {
    console.log("exclamation mark before");
}

// PARITY
var DT_nr = 6;
var DT_ck_pa = (number % 2) === 0;

// AND
var DT_nr = 10;
console.log(DT_nr < 20 && DT_nr > 5);

// OR
var DT_tx_01 = "item_alfa"
    , DT_tx_02 = "item_beta";
if (DT_tx_01 === "item_delta" || DT_tx_02 === "item_beta") {
    console.log("item_delta or item_alfa");
}

// NOT
var DT_nm = "";
if (!DT_nm) {
    console.log("DT_nm no enter")
}

// INCREMENTATION
var DT_nr_01 = 0,
    DT_nr_02 = 5;
// post-incrementaion
console.log(DT_nr_01++);
// post-decrementaion
console.log(DT_nr_01--);
// pre-incrementaion
console.log(++DT_nr_02);
// pre-decrementaion
console.log(--DT_nr_02);

// EXAMPLES
var DT_nr = 32;
if (DT_nr < 30) {
    console.log("more than 30");
}
else if (DT_nr > 35) {
    console.log("less than 35");
}
else {
    console.log("Liczba nie jest mniejsza od 30 ani też większa od 35");
}

// USAGE

var DT_nm_01 = "";
var DT_nm_02;

// long

 if(DT_nm) {
     DT_nm_02 = DT_nm_01;
 } else {
     DT_nm_02 = "unknown";
 }

// short

DT_nm_02 = DT_nm_01 ? DT_nm_01 : "unknown";

console.log("Hello " + DT_nm_02);

// SWITCH

var DT_df = "chwat/zbrodzień/wiarus/gawrosz [pytanie]",
    DT_an = "";

switch(DT_df) {
    case "chwat":
        DT_an = "NIE. chwat";
        break;
    case "zbrodzień":
        DT_an = "NIE. zbrodzień";
        break;
    case "wiarus":
        DT_an = "NIE. wiarus";
        break;
    case "gawrosz":
        DT_an = "OK. gawrosz";
        break;
    default:
        DT_an = "NIC";
}

console.log("Odpowiedź: " + DT_an + ".");