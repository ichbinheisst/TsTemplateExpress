"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./src/Routes"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(Routes_1.default);
    }
}
exports.default = new App().app;
