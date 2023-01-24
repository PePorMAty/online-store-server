const uuid = require("uuid");
const path = require("path");
const { Clothes, ClothesInfo } = require("../models/models");
const ApiError = require("../error/apiError");

class clothesController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const clothes = await Clothes.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) =>
          ClothesInfo.create({
            title: i.title,
            description: i.description,
            clothesId: clothes.id,
          })
        );
      }

      return res.json(clothes);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async deleteClothes(req, res) {
    try {
      const { name } = req.body;
      const clothesDelete = await Clothes.destroy({ where: { name } });
      return res.json(`${name} удален`);
    } catch (e) {}
  }
  async getAll(req, res, next) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 10;
      let offset = page * limit - limit;
      let clothes;
      if (!brandId && !typeId) {
        clothes = await Clothes.findAndCountAll({ limit, offset });
      }
      if (brandId && !typeId) {
        clothes = await Clothes.findAndCountAll({
          where: { brandId },
          limit,
          offset,
        });
      }
      if (!brandId && typeId) {
        clothes = await Clothes.findAndCountAll({
          where: { typeId },
          limit,
          offset,
        });
      }
      if (brandId && typeId) {
        clothes = await Clothes.findAndCountAll({
          where: { typeId, brandId },
          limit,
          offset,
        });
      }
      return res.json(clothes);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getOne(req, res) {
    try {
      const { id } = req.params;
      const clothes = await Clothes.findOne({
        where: { id },
        include: [{ model: ClothesInfo, as: "info" }],
      });
      return res.json(clothes);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new clothesController();
