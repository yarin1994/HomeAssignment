import express, { Express, Request, Response } from 'express';
import * as dataValidation from './dataValidation';
import * as Client from '../models/clientsModel';
import * as Api from './apiController';
import multer from 'multer';
const fs = require('fs');
const csvParser = require('csv-parser');

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

  // Finds Client by name.
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

  public async upload_csv_file(req: Request, res: Response): Promise<void> {
    const file: Express.Multer.File = req.file;
    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csvParser())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        try {
          for (let row of results) {
            // const params = [row.Name, row.Email, row.ID, row.Phone, row.IP];
            const client: Client = {
              id: row.ID,
              fullName: row.Name,
              phoneNumber: row.Phone,
              ipAddress: row.IP,
              emailAddress: row.Email,
            };
            const validClient = dataValidation.validateClient(client);
            if (validClient) {
              const [country, city] = await Api.ip_api(client.ipAddress);
              console.log(`country, city`, country, city);
              await Client.addClient({
                id: client.id,
                fullName: client.fullName,
                phoneNumber: client.phoneNumber,
                ipAddress: client.ipAddress,
                emailAddress: client.emailAddress,
                country,
                city,
              });
            }
          }
          res.json({ message: 'Data inserted successfully', data: results });
        } catch (error) {
          console.log(`error`, error);
          res.status(500).send('Error inserting data into the database');
        }
      });
  }
}

export default ClientController;
