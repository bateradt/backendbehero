const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");
    const teste = "te";

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
      teste
    });

    return response.status(200).json({ id });
  },

  async list(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.status(200).json(ongs);
  }
};
