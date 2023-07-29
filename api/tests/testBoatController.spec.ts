import BoatController from '../controllers/boatController';
import BoatService from '../services/boatService';
import { Request, Response } from 'express';

jest.mock('../services/boatService');
const MockBoatService = BoatService as jest.MockedClass<typeof BoatService>;

describe('BoatController', () => {
    let boatController: BoatController;
    let mockRequest: Partial<Request>;
    let mockResponse: Partial<Response>;

    beforeEach(() => {
        boatController = new BoatController();
        mockRequest = {} as Request;
        mockResponse = {} as Response;
        mockResponse.status = jest.fn().mockReturnValue(mockResponse);
        mockResponse.json = jest.fn().mockReturnValue(mockResponse);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('GetAll', () => {
        it('should return a list of boats with status code 200', async () => {
            const sampleBoats = [{ id: 1, name: 'Boat 1' }, { id: 2, name: 'Boat 2' }];
            MockBoatService.prototype.getAll.mockResolvedValue(sampleBoats);

            await boatController.GetAll(mockRequest as Request, mockResponse as Response);

            expect(MockBoatService.prototype.getAll).toHaveBeenCalledTimes(1);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(sampleBoats);
        });

        it('should return status code 500 when an error occurs', async () => {
            MockBoatService.prototype.getAll.mockRejectedValue(new Error('Internal Server Error'));

            await boatController.GetAll(mockRequest as Request, mockResponse as Response);

            expect(MockBoatService.prototype.getAll).toHaveBeenCalledTimes(1);

            expect(mockResponse.status).toHaveBeenCalledWith(500);
            expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
        });
    });

});
