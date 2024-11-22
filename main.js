
// Car adinda class yaradin daxilinde brand(markasi : Toyata ornek) i olsun modeli year price color percent(faizi) olsun
// getDetail adinda func olsun masin haqqinda melumatlari logda gostersin
// faizi hesablayacaq function olsun yeni pricenin qiymetini goturub
//  verilen faize gore yeni qiymetini tapib menimsetsin priceye 
// 1 den cox Car dan istifade ederek masinlar yaradin
// SportsCar  adindan class yaradin ve car dan extend etsin
// sportCara da cardaki deyisenler elave olunsun elave olaraqda topSpeed elave olunsun
// toSpeed(masinin sureti)
// daxilinde getDetail adinda func olsun superden isdifade edib extend olunan detail melumatini
// goturun elave olaraq maksimum suretinide qeyd edin
// daxilinde incrementSpeed adinda metod olsun ve sureti 10% artirsin 
// butun functionlari cagirib logda gosterin masinin qiymeti sonra endirimli qiymeti
// masinin sureti artiriliqdan sonra sureti ve.s 
// Sual olduqda pls qrupa yazin , ugurlar :)


class Car{
    constructor(brand,model,year,price, color, percent){
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
        this.brand = brand;
        this.percent = percent;

    }
    getcarinfo(){
        return 'Masin melumatlari markasi : ${this.brand} modeli : ${this.model} ili : ${this.year} rengi : ${this.color} qiymeti : ${this.price}';
        
    }
    calculateperecent(){
        console.log("endirim tetbiq olundu !")
        this.price *= (100 - this.percent) / 100;
    }
}

class Sportscar extends Car{
    constructor(brand,model,year,price, color, percent, tospeed, speedpercent){
        super(brand,model,year,price,color,percent);
        this.toSpeed = tospeed;
        this.speedpercent = speedpercent;
    }
    getcarinfo(){
        console.log(super.getcarinfo(),"sureti" + this.toSpeed);
    }
    incrementspeed(){
        this.tospeed = this.tospeed +(this.tospeed * this.speedpercent / 100);
    }
}

const sport1 = new Sportscar ("Ferrari", "M123", 2020, 200000, "black", 10, 300, 15);

sport1.getcarinfo();
sport1.incrementspeed();
sport1.getcarinfo();

