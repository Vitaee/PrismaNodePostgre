import BaseService from './baseService';
import UserModel from '../models/userModel';
import {comparePasswords, generateToken, hashPassword} from '../../utils/auth'


export default class UserService extends BaseService<UserModel> {
  constructor() {
    super(new UserModel());
  }
  
  async login(data: { username: string, password: string }): Promise<any> {
    const { username, password } = data;
    const user = await this.model.get('username', username);
    if (!user) {
      throw new Error('Invalid username or password');
    }

    const passwordsMatch = await comparePasswords(password, user.password);
    if (!passwordsMatch) {
      throw new Error('Invalid username or password');
    }
    
    const token = generateToken({username: user.username})
    return token;
  
  }

  async register(data: { username: string, password: string}): Promise<any> {
    const { username, password } = data;
    const hashedPassword = await hashPassword(password);
    const newUser =  await this.model.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    const token = generateToken({username: newUser.username})

    return token;
  }

}