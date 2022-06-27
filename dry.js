class Worker{
    constructor(hoursWorked, rate){
        this.hoursWorked=hoursWorked
        this.rate=rate
        this.TAX=20

    }
    basicSalary(){
        return this.hoursWorked * this.rate;

    }
    overviewSalary(){
        return this.basicSalary() + this.TAX;
    }
}

const Alfi = new Worker(40, 10)
console.log(Alfi.basicSalary())
console.log(Alfi.overviewSalary())
