import BaseService from './baseService';
import BoatModel from '../models/boatModel';

export default class BoatService extends BaseService<BoatModel> {
  constructor() {
    super(new BoatModel());
  }
  
}