class Movie{
    constructor(name, rating, year)
    {
     this.name = name;
     this.rating = rating;
     this.year = year;
    }

printAllAtributes(){
alert(this.name);
alert(this.rating);
alert(this.year);
return (this);

    }

}

function main(){
var pacrim = new Movie("Pacific Rim", 7, 2013);
var pacrim2 = new Movie("Pacific Rim: Uprising", 6, 2018)
console.log(pacrim.printAllAtributes());
console.log(pacrim2.printAllAtributes());
}

main();

