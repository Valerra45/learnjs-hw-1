function Filter() {
    this['contains'] = (products, property, value) => {
        return products.filter(x => x[property].includes(value));
    }

    this['starts'] = (products, property, value) => {
        return products.filter(x => x[property].startsWith(value));
    }

    this['ends'] = (products, property, value) => {
        return products.filter(x => x[property].endsWith(value));
    }

    this['<'] = (products, property, value) => {
        return products.filter(x => x[property] < value);
    }

    this['>'] = (products, property, value) => {
        return products.filter(x => x[property] > value);
    }

    this['='] = (products, property, value) => {
        return products.filter(x => x[property] = value);
    }

    this['<='] = (products, property, value) => {
        return products.filter(x => x[property] <= value);
    }

    this['>='] = (products, property, value) => {
        return products.filter(x => x[property] >= value);
    }
}

module.exports = { Filter }