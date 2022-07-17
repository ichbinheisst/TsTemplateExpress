import { Router, Request, Response } from 'express';
const route = Router()
route.get("/teste", (req: Request, res: Response) => {
    res.json({ message: "teste" })
})
export default route