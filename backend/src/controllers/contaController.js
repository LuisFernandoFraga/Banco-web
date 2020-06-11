const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const contas = await connection("contas").select("*");

    return res.json(contas);
  },

  async create(req, res) {
    const { conta, senha, saldo = 0 } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("contas").insert({
      id,
      conta,
      senha,
      saldo
    });

    return res.json({ id });
  },

  async deposito(req, res) {
    const { conta, valor } = req.body;

    const user = await connection("contas")
    .where({ conta: conta })
    .increment({ saldo: valor });

    if (!user) {
      return res.status(400).json({ error: "conta NÃO encontrada" });
    }

    return res.json("Depósito realizado com sucesso!")
  },

  async saque(req, res) {
    const { conta, valor } = req.body;

    const user = await connection("contas")
    .where({ conta: conta })
    .select("saldo")
    .first();

    if (!user) {
      return res.status(400).json({ error: "conta NÃO encontrada" });
    } else if ( user.saldo < valor) {
      return res.json("Saldo insuficiente");
    }

    await connection("contas")
    .where({ conta: conta })
    .decrement({ saldo: valor });

    return res.json("Saque realizado com sucesso!");
  },

  async buscaConta(req, res) {
    const { conta } = req.body;

    const user = await connection("contas")
    .where({ conta: conta });

    if (!user) {
      return res.status(400).json({ error: "conta NÃO encontrada" });
    }

    return res.json(user);
  }
};