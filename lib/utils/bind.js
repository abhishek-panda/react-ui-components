"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bind = function (target, propertyKey, descriptor) { return ({
    get: function () {
        var bound = descriptor.value.bind(this);
        Object.defineProperty(this, propertyKey, {
            value: bound,
        });
        return bound;
    },
}); };
exports.default = bind;
//# sourceMappingURL=bind.js.map