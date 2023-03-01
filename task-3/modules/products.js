const { Filter } = require('../models/filter.js');
const { Product } = require('../models/prodact.js');

function Products() {
    this.productsList = [];
    this.productsFilter = new Filter();

    this.arrayLenght = (arr) => {
        let lenght = 0;

        for (let i of arr) {
            lenght++;
        }

        return lenght;
    }

    this.add = (name, price, quantity, description) => {
        let product = new Product(name, price, quantity, description);

        this.productsList.push(product);
    }

    this.getWhere = (str) => {
        let result = Object.assign([], this.productsList);

        let request = str.split('&');

        for (let r of request) {
            let op = r.split('-');

            let lenght = this.arrayLenght(op);

            if (lenght === 3) {

                result = this.productsFilter[op[1]](this.productsList, op[0], op[2]);

            } else if (lenght === 2) {
                let pr;
                let val;

                if (op[1].at(1) == '=') {
                    pr = op[1].slice(0, 2);
                    val = +op[1].slice(2);
                } else {
                    pr = op[1].slice(0, 1);
                    val = +op[1].slice(1);
                }

                result = this.productsFilter[pr](this.productsList, op[0], val);
            }
        }

        return result;
    }
}

module.exports = { Products }