"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const dataValidation = require("./dataValidation");
const Client = require("../models/clients");
const Api = require("./apiController");
class ClientController {
    async get_all_clients(req, res) {
        try {
            const clients = await Client.getAllClients();
            res.status(200).send(clients);
        }
        catch (error) {
            res.status(500).send({ message: 'Server Error' });
        }
    }
    async add_client(req, res) {
        try {
            const { id, fullName, phoneNumber, ipAddress, emailAddress } = req.body;
            const validClient = dataValidation.validateClient(req.body);
            if (!validClient) {
                console.log(`why???`);
                res.stauts(404).send({ message: 'Client details are not valid' });
            }
            else {
                const [country, city] = await Api.ip_api(ipAddress);
                console.log(`country, city1`, country, city);
                await Client.addClient({
                    id,
                    fullName,
                    phoneNumber,
                    ipAddress,
                    emailAddress,
                    country,
                    city,
                });
                // await Client.addClient({
                //   id,
                //   fullName,
                //   phoneNumber,
                //   ipAddress,
                //   emailAddress,
                // });
                res.status(200).send({ message: `Client ${id} added successfully` });
            }
        }
        catch (err) {
            res.status(500).send({ message: `Couldn't add Client` });
        }
    }
    async delete_client_by_id(req, res) {
        try {
            const { id } = req.params;
            await Client.deleteById(id);
            res.status(200).send({ message: `client ${id} deleted successfully` });
        }
        catch (err) {
            res.status(500).send({ message: `Couldn't delete client` });
        }
    }
    async find_by_id(req, res) {
        try {
            const { id } = req.params;
            const client = await Client.findById(Number(id));
            if (client.length > 0) {
                res.status(200).send(client);
            }
            else {
                res.status(404).send({ message: `Client with id: '${id}' not found` });
            }
        }
        catch (err) {
            res.status(500).send({ message: `error, ${res}` });
        }
    }
    async update_client(req, res) {
        try {
            const { id } = req.params;
            const { fullName, phoneNumber, ipAddress, emailAddress } = req.body;
            const validClient = dataValidation.validateClient(req.body);
            if (!validClient) {
                res.stauts(404).send({ message: 'Client details are not valid' });
            }
            else {
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
        }
        catch (err) {
            res.status(500).send({ message: `Couldn't update client` });
        }
    }
    async find_by_name(req, res) {
        try {
            const { name } = req.params;
            const clients = await Client.findByName(name);
            if (clients.length > 0) {
                res.status(200).send(clients[0]);
            }
            else {
                res
                    .status(404)
                    .send({ message: `Client with name '${name}' not found` });
            }
        }
        catch (err) {
            res.status(500).send({ message: `error, ${res}` });
        }
    }
}
exports.ClientController = ClientController;
exports.default = ClientController;
//# sourceMappingURL=clientController.js.map