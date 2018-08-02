class Product{
    constructor(price, quantity, name)
    {
        this.price = price;
        this.quantity = quantity;
        this.name = name;
    }

    printAllAtributes(){
        alert(this.price);
        alert(this.quantity);
        alert(this.name);
        return (this);

    }

}

function main(){
    var water = new Product(1, 24, "Dasani");
    var soda = new Product(2, 12, "Coke");
    console.log(water.printAllAtributes());
    console.log(soda.printAllAtributes());
}

main();

