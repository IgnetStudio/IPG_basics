// more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// normal mode

(function () {
    "use strict";
    // strict mode
}());

// normal mode

(function () {
    console.log(this); // Window
}());

(function () {
    "use strict";
    console.log(this); // undefined
}());

someName = 1; // global variable without var

(function () {
    "use strict";
    someName = 2; // ReferenceError: someName is not defined
}());

(function () {
    "use strict";
    for (i = 0; i < length; i++) { // TypeError (missing var)
    // code placeholder
};
}());