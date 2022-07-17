"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/teste", (req, res) => {
    res.json({ message: "teste" });
});
exports.default = route;
