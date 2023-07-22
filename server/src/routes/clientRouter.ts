import multer from 'multer';
import { Router } from 'express';
import { ClientController } from '../controllers/clientController';

const clientRouter = Router();
const clientController = new ClientController();
const upload = multer({ dest: 'uploads/' }).single('file');

// Get All Clients
// Method: GET
clientRouter.get('/', clientController.get_all_clients);

// Find Clients by name
// Method: GET
clientRouter.get('/find/:name', clientController.find_by_name);

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

// Upload CSV File
// Method: POST
clientRouter.post('/uploads', upload, clientController.upload_csv_file);

export default clientRouter;
