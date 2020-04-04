const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const ong_id = request.headers.authorization;
    const incidents = await connection("incidents")
      .where("ong_id", ong_id)
      .select(" * ");

      //console.log(incidents);

    if (incidents.length == 0) {
      return response.status(400).json({ error: "Nenhuma ONG encontrada com este ID." });
    }

    return response.status(200).json(incidents);
  }
};
