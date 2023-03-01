const { Products } = require( './modules/products.js' );

let prooducts = new Products();

prooducts.add('test1', 25, 10, 'description 1');
prooducts.add('test2', 15, 12, 'description 2');
prooducts.add('test3', 35, 11, 'description 3');
prooducts.add('test4', 55, 19, 'description 4');
prooducts.add('product5', 101, 8, 'product description 5');

console.log( prooducts.getWhere('name-contains-test&quantity->=11') );
