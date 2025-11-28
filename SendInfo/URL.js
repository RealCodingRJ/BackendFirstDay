"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isHomeRoute(URL) {
    return URL === "/" ? "Home Visit" : "Not Home Page";
}
exports.default = isHomeRoute;
