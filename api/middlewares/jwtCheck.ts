import { NextFunction, Request, Response } from 'express';
import { verifyToken } from '../../utils/auth';
import UserService from '../services/userService';


export const jwtCheck = async (
  req: Request<never, never, never, never>,
  res: Response,
  next: NextFunction,
) => {
    const token = req.headers.authorization?.toString().split(' ')[1];
    
    if (!token)
        return res
        .status(403)
        .json({ message: 'Invalid token or missing headers!' });
        
    const payload: any = await verifyToken(token?.toString());
    
    if (payload.message)
        return res.status(403).json({ message: payload.message });

    const userService = new UserService();    

    const user = await userService.get('username', payload.username);
    
    req.currentUser = user;
    
    next();
};