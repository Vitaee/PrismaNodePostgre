import BaseController from "./baseController";
import BoatService from "../services/boatService";
import { Response, Request } from "express";


class BoatController extends BaseController<BoatService> {

  constructor() {
    const service: BoatService = new BoatService();
    super(service);
  }

  async getTest(req: Request, res: Response) {
    const a = await this.service.getAll();
    return res.status(200).send({'test': a})
  }
}

export default BoatController;