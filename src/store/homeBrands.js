import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";
import adidas from "../assets/images/brandsLogo/adidas.png"; //256
import nike from "../assets/images/brandsLogo/nike.png";
import puma from "../assets/images/brandsLogo/puma.png";
import reebok from "../assets/images/brandsLogo/reebok.png";
import vans from "../assets/images/brandsLogo/vans.png";
import jordan from "../assets/images/brandsLogo/jordan.png";
import converse from "../assets/images/brandsLogo/converse.png";
import newBalance from "../assets/images/brandsLogo/newBalance.png";

let size = 4;

class homeBrands {
  brands = [
    { id: nanoid(size), img: nike, name: "Nike" },
    { id: nanoid(size), img: puma, name: "Puma" },
    { id: nanoid(size), img: adidas, name: "Adidas" },
    { id: nanoid(size), img: reebok, name: "Reebok" },
    { id: nanoid(size), img: vans, name: "Vans" },
    { id: nanoid(size), img: jordan, name: "Jordan" },
    { id: nanoid(size), img: converse, name: "Converse" },
    { id: nanoid(size), img: newBalance, name: "New Balance" },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  removeBrand(id) {
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }
}

export default new homeBrands();
