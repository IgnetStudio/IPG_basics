// VARIABLES

/*

LEGEND:

DT = DATA
OB = OBJECT
AR = ARRAY

nr = number
tx = string
ex = example
rw = rewrite
ee = escape
bl = logic
sp = special
cc = concat
si = single
mu = multi

*/

// Primitive

var DT_nr = 10;
var DT_tx = 'text';

var DT_nr = 20.5,
    DT_tx = 'text';

var DT_ex; // undefinied
DT_ex = "10";
DT_ex = "text";

var DT_rw = DT_ex;

typeof DT_ex;
var DT_ee = '"title"\n2nd line\n\t3rd line';

var DT_bl = true;
var DT_bl = false;

var DT_sp = null; // empty
var DT_sp = undefined;
var DT_sp = NaN;

typeof null; // error it's NOT an object

var DT_cc = 2 + "5";

DT_nr = DT_nr + 2;
DT_nr += 2;

// Complex

// Object

var DT_OB = {
    OB_nr: 10,
    OB_tx: "text",
    OB_bl: true,
    OB_sp: null  
}

// Table

var DT_AR_si = [10, "text", false];
var DT_AR_mu = [5, ["text"], true];


// TABLES

var AR_tx = ['item_noun', 'item_adjective', 'item_verb', 'item_person'];
var AR_bl = ['true', 'false'];
var AR_nr = [0, 1, 2, 3];