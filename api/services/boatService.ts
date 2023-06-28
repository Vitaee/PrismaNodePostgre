import BoatModel from "../models/boatModel";
import BaseService from "./baseService";


export default class BoatService extends BaseService<BoatModel> {
  constructor() {
    super(BoatModel);
  }
}