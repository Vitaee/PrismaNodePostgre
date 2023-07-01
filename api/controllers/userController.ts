import BaseController from "./baseController";
import UserService from "../services/userService";
import { Request, Response } from 'express';

export default class UserController extends BaseController<UserService> {
    constructor() {
        super(new UserService());
    }

    Login = async (req: Request, res: Response): Promise<Response>  => {
        const data = await this.service.login(req.body)
        return res.status(200).send({'token': data})
    }

    Register = async (req: Request, res: Response): Promise<Response> => {
        const data = await this.service.register(req.body)
        return res.status(200).send({'token': data})
    }

    CurrentUser = async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({"user": req.currentUser})
    }
}