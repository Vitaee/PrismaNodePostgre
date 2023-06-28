import BaseController from "./baseController";
import BoatService from "../services/boatService";


export default class BoatController extends BaseController<BoatService> {
  constructor() {
    super(BoatService, "testt");
  }

}