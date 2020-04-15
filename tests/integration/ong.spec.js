const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    console.log('fechando conexão');
    await connection.destroy([callback]);
  });

  it("Should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "CATS",
      email: "cats@gmail.com",
      whatsapp: "14981158813",
      city: "Two Rivers",
      uf: "SP",
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
