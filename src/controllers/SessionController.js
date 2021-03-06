const connection = require("../database/connection");

module.exports = {
    async create(request, response) {
        const {id} = request.body;

        ong = await connection('ongs').where('id', id).select('name').first();

        if (!ong) {
            return response.status(400).json({error:'Ong não encontrada!'});
        }

        return response.status(200).json(ong);
    }
}