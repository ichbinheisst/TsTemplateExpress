import express, {
    Express,
    Request,
    Response
} from 'express'
import route from './src/Routes';

import dotenv from "dotenv"

class App {
    app: Express;
    constructor() {
        this.app = express()
        this.middleware()
        this.routes()
    }

    middleware() {
        this.app.use(express.json())
    }
    routes(): void {
        this.app.use(route)
    }

}
export default new App().app