const { add, sub, mul, div } = require('./modules/big-int-operations');

console.log( add('700000001', '299999999') );
console.log( sub('1000000000', '299999999') ); 
console.log( mul('9876543210', '1023456789') );   
console.log( div('20000000000000000000000000000', '35') );    