import multer from 'multer';
import { Router } from 'express';
import { ClientController } from '../controllers/clientController';

const clientRouter = Router();
const clientController = new ClientController();

// Get All Clients
// Method: GET
clientRouter.get('/', clientController.get_all_clients);

// Find Clients by name
// Method: GET
clientRouter.get('/search', clientController.find_client);

// Find Client by id.
// Method: GET
clientRouter.get('/id/:id', clientController.find_by_id);

// Updaete Client details
// Method: PUT
clientRouter.put('/:id', clientController.update_client);

// Add new Client
// Method: POST
clientRouter.post('/', clientController.add_client);

// Delete Client by id
// Method: DELETE
clientRouter.delete('/:id', clientController.delete_client_by_id);

export default clientRouter;
