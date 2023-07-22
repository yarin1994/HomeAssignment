"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ip_api = void 0;
const axios = require('axios');
const ip_api = async (ip) => {
    // making get request to the ip-api. return value is Country and City.
    try {
        const base_url = `http://ip-api.com/json/${ip}?fields=status,country,city,query`;
        const res = await axios.get(base_url);
        return [res.data.country, res.data.city];
    }
    catch (err) {
        console.error(err);
    }
};
exports.ip_api = ip_api;
//# sourceMappingURL=apiController.js.map