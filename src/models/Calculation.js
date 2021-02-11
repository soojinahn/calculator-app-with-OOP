class Calculation{
    //the constructor is the first method called after instantiation and sets properties
    constructor(a,b,op){
        //internal reference of the object to access internal properties
        this.a = a;
        this.b = b;
        this.op = op;
    }

    //a method so that
    GetResults(){
        return this.op(this.a, this.b);
    }

    GetResultsSquare(){
        return this.op(this.a);
    }
}

module.exports = Calculation;