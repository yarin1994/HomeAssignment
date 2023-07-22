const axios = require('axios');

export const ip_api = async (ip: string): Promise<string[]> => {
  // making get request to the ip-api. return value is Country and City.
  try {
    const base_url = `http://ip-api.com/json/${ip}?fields=status,country,city,query`;

    const res = await axios.get(base_url);
    return [res.data.country, res.data.city];
  } catch (err) {
    console.error(err);
  }
};
