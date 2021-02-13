"use strict";
var Utility;
(function (Utility) {
    function log(msg) {
        console.log(msg);
    }
    Utility.log = log;
    function error(msg) {
        console.log(error);
    }
    Utility.error = error;
})(Utility || (Utility = {}));
