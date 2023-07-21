import { Request, Response } from 'express';
import * as dataValidation from './dataValidation';
import * as Client from '../models/clientsModel';
import * as Api from './apiController';

export class ClientController {
  public async get_all_clients(req: Request, res: Response): Promise<void> {
    try {
      const clients = await Client.getAllClients();
      res.status(200).send(clients);
    } catch (error) {
      res.status(500).send({ message: 'Server Error' });
    }
  }

  public async add_client(req: Request, res: Response): Promise<void> {
    try {
      const { id, fullName, phoneNumber, ipAddress, emailAddress } = req.body;
      const validClient = dataValidation.validateClient(req.body);
      if (!validClient) {
        res.stauts(404).send({ message: 'Client details are not valid' });
      } else {
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
    } catch (err) {
      res.status(500).send({ message: `Couldn't add Client` });
    }
  }

  public async delete_client_by_id(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await Client.deleteById(id);
      res.status(200).send({ message: `client ${id} deleted successfully` });
    } catch (err) {
      res.status(500).send({ message: `Couldn't delete client` });
    }
  }

  public async find_by_id(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
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

  public async update_client(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { fullName, phoneNumber, ipAddress, emailAddress } = req.body;
      const validClient = dataValidation.validateClient(req.body);
      if (!validClient) {
        res.stauts(404).send({ message: 'Client details are not valid' });
      } else {
        const existingClient = await Client.findById(id);
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
        await Client.updateClient(id, updatedData);
        res.status(200).send({ message: `client ${id} updated successfully` });
      }
    } catch (err) {
      res.status(500).send({ message: `Couldn't update client` });
    }
  }

  public async find_by_name(req: Request, res: Response): Promise<void> {
    try {
      const { name } = req.params;
      const clients = await Client.findByName(name);
      if (clients.length > 0) {
        res.status(200).send(clients[0]);
      } else {
        res
          .status(404)
          .send({ message: `Client with name '${name}' not found` });
      }
    } catch (err) {
      res.status(500).send({ message: `error, ${res}` });
    }
  }
}

export default ClientController;
