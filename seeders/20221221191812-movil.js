'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movil',[
      {
       id_movil: 1,
       nombre:'Samsung',
       color:'Blanco',
       precio: '75€',
       URL:'https://cdn-files.kimovil.com/phone_front/0001/02/thumb_1752_phone_front_big.jpeg'
      },
      {
       id_movil: 2,
       nombre:'Huawei',
       color:'Negro',
       precio: '100€',
       URL:'https://www.tiendammh.com/productos/imagenes/Huawei/high/51093MGG-Telefono-Movil-Huawei-Y6-2019-Huawei.jpg'
      },
      {
       id_movil: 3,
       nombre:'Iphone 11',
       color:'Lila',
       precio: '425€',
       URL:'https://m.media-amazon.com/images/I/71QE00iB9IL._AC_SX522_.jpg'
      },
      {
       id_movil: 4,
       nombre:'BlackView',
       color:'Negro',
       precio: '125€',
       URL:'https://www.blackview.es/wp-content/uploads/2021/04/Blackview-A70-1.jpg'
      },
      {
       id_movil: 5,
       nombre:'Redmi',
       color:'Negro',
       precio: '165€',
       URL:'https://m.media-amazon.com/images/I/51YxFQpw+QL._AC._SR360,460.jpg'
      },
      {
       id_movil: 6,
       nombre:'Samsung Galaxy s22',
       color:'Blanco',
       precio: '275€',
       URL:'https://www.powerplanetonline.com/cdnassets/samsung_galaxy_s22_8gb_128gb_blanco_001_l.jpg'
      },
      {
       id_movil: 7,
       nombre:'Samsung Galaxy a13',
       color:'Negro',
       precio: '225€',
       URL:'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202207/27/00157063426027009_8__640x640.jpg'
      },
      {
       id_movil: 8,
       nombre:'Oppo',
       color:'Colorines',
       precio: '180€',
       URL:'https://m.media-amazon.com/images/I/71m-thVFeSL._AC_SY355_.jpg'
      },
      {
       id_movil: 9,
       nombre:'Nokia 3310',
       color:'Gris fuerte',
       precio: '1325€',
       URL:'https://estaticos.elmundo.es/assets/multimedia/imagenes/2016/04/01/14595056767099.jpg'
      },
      {
       id_movil: 10,
       nombre:'Ladrillo',
       color:'Negro',
       precio: '27€',
       URL:'https://media.istockphoto.com/id/117316454/es/foto/ladrillo.jpg?s=612x612&w=0&k=20&c=4PWhSC6re_2lR-Hl3xABDwJKYPUa_inuD7M9LA8ECzQ='
      },
      {
       id_movil: 11,
       nombre:'Ericsson',
       color:'Negro',
       precio: '17€',
       URL:'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2018/11/22/15429097270435_640x0.jpg'
      },
      {
       id_movil: 12,
       nombre:'Nokia Random',
       color:'Gris/Blanco',
       precio: '1025€',
       URL:'https://i.pinimg.com/236x/4b/33/20/4b332055c8602c4aa8d4cf69fc1f1820--nokia-old-mobile-price.jpg'
      },
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
