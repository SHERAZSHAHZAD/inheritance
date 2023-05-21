class animal{
    constructor(age, legs){
        this.legs = legs;
    }
showdetail(){
    console.log(`this animal legs ${this.legs}`);
}

}

class dog extends animal{
    constructor(dogAge, height , eyecolor , legs)
    {
        super(legs);
        this.eyecolor = eyecolor;
        this.dogAge = dogAge;
        this.height = height;
    }

    showDogDetail(){
        console.log(`the dog age is ${this.dogAge} and eyecolor is ${this.eyecolor} and height is ${this.height}`);
    }
}
let animalObjact = new animal(4);
animalObjact.showdetail();

let dogObjact = new dog("bron" , 4 ,"4 inch" );
dogObjact.showDogDetail();