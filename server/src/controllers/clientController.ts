import { Request, Response } from 'express';
import * as dataValidation from '../utils/dataValidation';
import * as Client from '../models/clientsModel';
import * as Api from './apiController';

interface Client {
  id: number;
  fullName: string;
  phoneNumber: string;
  ipAddress: string;
  emailAddress: string;
}

export class ClientController {
  // gets all clients from DB.
  public async get_all_clients(req: Request, res: Response): Promise<void> {
    try {
      const clients = await Client.getAllClients();

      res.status(200).send(clients);
    } catch (error) {
      res.status(500).send({ message: 'Server Error' });
    }
  }

  // Add new Client to DB.
  public async add_client(req: Request, res: Response): Promise<void> {
    try {
      const { id, fullName, phoneNumber, ipAddress, emailAddress } = req.body;
      const validClient = dataValidation.validateClient(req.body);

      // Checkes whether the body params are valid.
      if (!validClient) {
        res.status(404).send({ message: 'Client details are not valid' });
      } else {
        // Check if this Client already exists
        const exist = await Client.findById(Number(id));

        if (exist.length > 0) {
          res.status(500).send({ message: `Client Already Exists` });
        } else {
          // Get Country, and City from the api request and store them in variables.
          const [country, city] = await Api.ip_api(ipAddress);
          await Client.addClient({
            id,
            fullName,
            phoneNumber,
            ipAddress,
            emailAddress,
            country,
            city,
          });

          res.status(200).send({ message: `Client ${id} added successfully` });
        }
      }
    } catch (err) {
      res.status(500).send({ message: `Couldn't add Client` });
    }
  }

  // Delete Client by id.
  public async delete_client_by_id(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      await Client.deleteById(Number(id));
      res.status(200).send({ message: `client ${id} deleted successfully` });
    } catch (err) {
      res.status(500).send({ message: `Couldn't delete client` });
    }
  }

  // Find Client by id.
  public async find_by_id(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      // Check if this Client already exists
      const client = await Client.findById(Number(id));
      if (client.length > 0) {
        res.status(200).send(client);
      } else {
        res.status(404).send({ message: `Client with id: '${id}' not found` });
      }
    } catch (err) {
      res.status(500).send({ message: `error, ${res}` });
    }
  }

  // Find Client any of the fields.
  public async find_client(req: Request, res: Response): Promise<void> {
    try {
      const field = req.query.field as string;
      const query = req.query.query as string;

      if (query.length > 0) {
        const search = await Client.findClient(field, query);
        res.status(200).send(search[0]);
      }
    } catch (err) {
      res.status(500).send({ message: `error, ${res}` });
    }
  }

  // Update Client details.
  public async update_client(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { fullName, phoneNumber, ipAddress, emailAddress } = req.body;

      // Checkes whether the body params are valid.
      const validClient = dataValidation.validateClient(req.body);
      if (!validClient) {
        res.status(404).send({ message: 'Client details are not valid' });
      } else {
        const existingClient = await Client.findById(Number(id));
        if (!existingClient) {
          res.status(404).send({ message: `Client with ID ${id} not found` });
          return;
        }

        const updatedData = {
          fullName,
          phoneNumber,
          ipAddress,
          emailAddress,
        };
        await Client.updateClient(Number(id), updatedData);
        res.status(200).send({ message: `client ${id} updated successfully` });
      }
    } catch (err) {
      res.status(500).send({ message: `Couldn't update client` });
    }
  }
}

export default ClientController;
