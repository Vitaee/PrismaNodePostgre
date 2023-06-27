import BoatModel from "../models/boatModel";
import BaseService from "./baseService";

class BoatService extends BaseService<BoatModel> {
  constructor() {
    super(BoatModel);
  }
}

export default BoatService;