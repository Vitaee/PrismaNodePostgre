import { Request, Response } from 'express';
import UserController from '../controllers/userController';
import UserService from '../services/userService';


const mockRequest = <Request>{};
const mockResponse = <Response>{};
mockResponse.status = jest.fn().mockReturnValue(mockResponse);
mockResponse.send = jest.fn().mockReturnValue(mockResponse);

jest.mock('../services/userService', () => {
    return jest.fn().mockImplementation(() => ({
        login: jest.fn().mockResolvedValue('sample_token'),
        register: jest.fn().mockResolvedValue('sample_token'),
    }));
});

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;
    
    beforeEach(() => {
        userService = new UserService();
        userController = new UserController();
        userController['service'] = userService;
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    it('should login user', async () => {
        const req = mockRequest;
        const res = mockResponse;
        req.body = { username: 'testuser', password: 'testpassword' };

        await userController.Login(req, res);

        expect(userService.login).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ token: 'sample_token' });
    });

    it('should register user', async () => {
        const req = mockRequest;
        const res = mockResponse;
        req.body = { username: 'testuser', password: 'testpassword' };

        await userController.Register(req, res);

        expect(userService.register).toHaveBeenCalledWith(req.body);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ token: 'sample_token' });
    });

    it('should return current user', async () => {
        const req = mockRequest;
        const res = mockResponse;
        req.currentUser = { id: 1,  username: 'testuser' , password: ""};

        await userController.CurrentUser(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ user: req.currentUser });
    });
    
});