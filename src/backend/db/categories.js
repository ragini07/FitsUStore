import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Beds",
    imageURL : "https://ii2.pepperfry.com/media/catalog/product/c/l/494x544/clara-upholstered-single-size-bed-in-natural-finish-clara-upholstered-single-size-bed-in-natural-fin-dsofog.jpg",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "Sofas",
    imageURL : "https://ii1.pepperfry.com/media/catalog/product/n/i/494x544/niki-3-seater-sofa-in-yellow-colour-by-febonic-niki-3-seater-sofa-in-yellow-colour-by-febonic-vosm0u.jpg",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "Lighting",
    imageURL : "https://ii2.pepperfry.com/media/catalog/product/g/o/494x544/gold---metal-hanging-tea-light-holder-set-of-4-by-the-craze-by-amaya-decors-gold---metal-hanging-tea-vn20mu.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
  {
    _id: uuid(),
    categoryName: "Decor",
    imageURL : "https://ii1.pepperfry.com/media/catalog/product/a/r/494x544/artificial-plant-with-red-leaves-and-flowers-with-pot-by-foliyaj-artificial-plant-with-red-leaves-an-luu1d9.jpg",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  }
];
