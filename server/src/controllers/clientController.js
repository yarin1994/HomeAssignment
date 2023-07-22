"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const dataValidation = __importStar(require("../utils/dataValidation"));
const Client = __importStar(require("../models/clientsModel"));
const Api = __importStar(require("./apiController"));
class ClientController {
    // gets all clients from DB.
    async get_all_clients(req, res) {
        try {
            const clients = await Client.getAllClients();
            res.status(200).send(clients);
        }
        catch (error) {
            res.status(500).send({ message: 'Server Error' });
        }
    }
    // Add new Client to DB.
    async add_client(req, res) {
        try {
            const { id, fullName, phoneNumber, ipAddress, emailAddress } = req.body;
            const validClient = dataValidation.validateClient(req.body);
            // Checkes whether the body params are valid.
            if (!validClient) {
                res.status(404).send({ message: 'Client details are not valid' });
            }
            else {
                // Check if this Client already exists
                const exist = await Client.findById(Number(id));
                if (exist.length > 0) {
                    res.status(500).send({ message: `Client Already Exists` });
                }
                else {
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
        }
        catch (err) {
            res.status(500).send({ message: `Couldn't add Client` });
        }
    }
    // Delete Client by id.
    async delete_client_by_id(req, res) {
        try {
            const { id } = req.params;
            await Client.deleteById(Number(id));
            res.status(200).send({ message: `client ${id} deleted successfully` });
        }
        catch (err) {
            res.status(500).send({ message: `Couldn't delete client` });
        }
    }
    // Find Client by id.
    async find_by_id(req, res) {
        try {
            const { id } = req.params;
            // Check if this Client already exists
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
    // Find Client any of the fields.
    async find_client(req, res) {
        try {
            const field = req.query.field;
            const query = req.query.query;
            if (query.length > 0) {
                const search = await Client.findClient(field, query);
                res.status(200).send(search[0]);
            }
        }
        catch (err) {
            res.status(500).send({ message: `error, ${res}` });
        }
    }
    // Update Client details.
    async update_client(req, res) {
        try {
            const { id } = req.params;
            const { fullName, phoneNumber, ipAddress, emailAddress } = req.body;
            // Checkes whether the body params are valid.
            const validClient = dataValidation.validateClient(req.body);
            if (!validClient) {
                res.status(404).send({ message: 'Client details are not valid' });
            }
            else {
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
        }
        catch (err) {
            res.status(500).send({ message: `Couldn't update client` });
        }
    }
}
exports.ClientController = ClientController;
exports.default = ClientController;
//# sourceMappingURL=clientController.js.map