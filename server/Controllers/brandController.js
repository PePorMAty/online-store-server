const { Brand } = require("../models/models");
const ApiError = require("../error/apiError");

class brandController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const brand = await Brand.create({ name });
      return res.json(brand);
    } catch (e) {
      console.log(e);
    }
  }
  async deleteBrand(req, res) {
    try {
      const { name } = req.body;
      const brandDelete = await Brand.destroy({ where: { name } });
      return res.json(`${name} удален`);
    } catch (e) {}
  }
  async getAll(req, res) {
    try {
      const brands = await Brand.findAll();
      return res.json(brands);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new brandController();
