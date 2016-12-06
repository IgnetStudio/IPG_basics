/*

LEGEND:

AR = ARRAY
FN = FUNCTION
OB = OBJECT
tx = string
qb = quiz

*/

// MODIFY

AR_tx.shift() // remove_first
AR_tx.unshift() // add_first
AR_tx.pop() // remove_last
AR_tx.push() // add_last
AR_tx.reverse() // reverse_all
AR_tx.sort() // sort_all
AR_tx.splice() // remove_replace

// ACCESS

AR_tx.concat() // glue_tables
AR_tx.join() // between_items
AR_tx.slice() // cut_index
AR_tx.indexOf() // first_index
AR_tx.lastIndexOf() // last_index

// ITERATION

AR_tx.forEach() // function_run_all
AR_tx.every() // condition_check_all
AR_tx.some() // condition_check_any
AR_tx.filter() // function_run_table
AR_tx.map() // function_modify_table
AR_tx.reduce() // function_run_single

// CHECK

var AR_FN = [];
var AR_OB = [];
console.log(AR_tx);
console.log(AR_tx[0]);
console.log(AR_tx[1]);
console.log(AR_tx[2]);
console.log(AR_tx[3]);

// examples

var AR_qb = [];
AR_qb[0] = "egeria";
AR_qb.unshift("kobieta smukła, delikatna");
AR_qb.push("megiera", "sylfida");
AR_qb.unshift("do usunięcia");
AR_qb.shift();
AR_qb.push("do usunięcia");
AR_qb.pop();
AR_qb.splice(1, 0, "damesa");

// ex 02

var AR_qb = ["PYTANIE: osoba, która pomaga w komunikacji między osobami bądź grupami", ["akuszer", false], ["benefaktor", false], ["facylitator", true], ["konsjerż", false]];

console.log(AR_qb[0]);
console.log("*****");

for (var i = 1; i < AR_qb.length; i++) {
    if (AR_qb[i][1]) {
        console.log("POPRAWNA ODPOWIEDŹ");
        console.log(AR_qb[i][0]);
    }
    else {
        console.log("ZŁA ODPOWIEDŹ");
        console.log(AR_qb[i][0]);
    }
    console.log("*****");
}