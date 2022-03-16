import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name : 'Spacewood',
    desc : 'Single bed with storage',
    rating : 3,
    price : 2000,
    salePrice :  1600,
    imageURL : 'https://ii2.pepperfry.com/media/catalog/product/e/n/494x544/enkel-solid-wood-single-bed-in-provincial-teak-finish-by-woodsworth-enkel-solid-wood-single-bed-in-p-ukm05a.jpg',
    category : 'Beds',
    isBestSeller : true,
    inStock : true,
    fastDelivery : true
  },
  {
    _id: uuid(),
    name : 'Purple',
    desc : 'Modern 1 Seater Sofa',
    rating : 1,
    price : 2500,
    salePrice :  2000,
    imageURL : 'https://media.istockphoto.com/photos/blue-armchair-isolated-on-a-white-picture-id1281696939?b=1&k=20&m=1281696939&s=170667a&w=0&h=H-nKNA5fpSpBHI6IP1u-YEs4Xf6rANu9O9hIj9nrYnM=',
    category : 'Sofas',
    isBestSeller : false,
    inStock : true,
    fastDelivery : false
  },
  {
    _id: uuid(),
    name : 'Amaya',
    desc : 'Iron Abstract Metal Wall Art',
    rating : 2,
    price : 1800,
    salePrice :  1400,
    imageURL : 'https://ii2.pepperfry.com/media/wysiwyg/banners/wallart_trends_web_23122021_1.jpg',
    category : 'Decor',
    isBestSeller : false,
    inStock : true,
    fastDelivery : true
  },
  {
    _id : uuid(),
    name : 'Amaya',
    desc : 'Double Bed With Storage',
    rating : 4,
    price : 9000,
    salePrice :  7500,
    imageURL : 'https://ii3.pepperfry.com/media/catalog/product/o/r/494x544/oriel-solid-wood-queen-size-bed-in-provincial-teak-finish-by-woodsworth-oriel-solid-wood-queen-size--vjg5cr.jpg',
    category : 'Beds',
    isBestSeller : false,
    inStock : false,
    fastDelivery : true
},
{
    _id : uuid(),
    name : 'Spacewood',
    desc : 'Modern 2 Seater Sofa',
    rating : 5,
    price : 6000,
    salePrice :  5800,
    imageURL : 'https://images.unsplash.com/photo-1512212621149-107ffe572d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29mYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60',
    category : 'Sofas',
    isBestSeller : false,
    inStock : true,
    fastDelivery : true
},
{
    _id : uuid(),
    name : 'Purple',
    desc : 'Hanging Ceramic Planter',
    rating : 3,
    price : 1000,
    salePrice :  600,
    imageURL : 'https://ii2.pepperfry.com/media/catalog/product/e/x/494x544/exclusivelane--black-goblet--metal-hand-painted-hanging-planter-pot-with-jute-exclusivelane--black-g-y2dfu5.jpg',
    category : 'Decor',
    isBestSeller : false,
    inStock : true,
    fastDelivery : false
},
{
    _id : uuid(),
    name : 'Purple',
    desc : 'Hanging Ceramic Planter',
    rating : 3,
    price : 8000,
    salePrice :  6800,
    imageURL : 'https://ii2.pepperfry.com/media/catalog/product/e/x/494x544/exclusivelane--black-goblet--metal-hand-painted-hanging-planter-pot-with-jute-exclusivelane--black-g-y2dfu5.jpg',
    category : 'Decor',
    isBestSeller : false,
    inStock : false,
    fastDelivery : true
},
{
    _id : uuid(),
    name : 'Purple',
    desc : 'Table lamp with wood base',
    rating : 3,
    price : 3000,
    salePrice :  2500,
    imageURL : 'https://ii3.pepperfry.com/media/catalog/product/b/r/494x544/brown-glass--table-lamp---by-new-era-brown-glass--table-lamp---by-new-era-bgystf.jpg',
    category : 'Lighting',
    isBestSeller : true,
    inStock : true,
    fastDelivery : false
}
];
