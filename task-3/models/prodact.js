function Product(name,
    price,
    quantity,
    description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
}

module.exports = { Product }