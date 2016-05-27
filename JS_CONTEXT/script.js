(function () {
'use strict';

function Calculator(leftOperand) {
if (leftOperand) {
this._result = leftOperand;
} else {
this._result = 0;
}

this.toString = function () {
return this._result;
};
}

Calculator.prototype.add = function () {
for (var i = 0; i < arguments.length; i++) {
this._result += arguments[i];
}
return this;
};

Calculator.prototype.multiply = function () {
for (var i = 0; i < arguments.length; i++) {
this._result *= arguments[i];
}
return this;
};

Calculator.prototype.substract = function () {
for (var i = 0; i < arguments.length; i++) {
this._result -= arguments[i];
}
return this;
};

Calculator.prototype.divide = function () {
for (var i = 0; i < arguments.length; i++) {
this._result /= arguments[i];
}
return this;
};

window.app = window.app || {};
window.app.Calculator = Calculator;
}());