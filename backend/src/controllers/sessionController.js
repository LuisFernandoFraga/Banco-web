const connection = require("../database/connection");

module.exports = {
  async create(req, res) {
    const { conta } = req.body;
    const { senha } = req.body;

    const user = await connection("contas")
      .where("conta", conta)
      .andWhere("senha", senha)
      .first();

    if (!user) {
      return res.status(400).json({ error: "conta NÃO encontrada." });
    }

    return res.json("Bem vindo(a)!");
  },
};
