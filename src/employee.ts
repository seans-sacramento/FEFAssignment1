import type {IEmployee} from  "./iemployee.ts";

export class Employee{
    public age : number;
    public rank : number;
    public ssn : string;

    constructor (
        age : number, rank : number, ssn: string
    ){
        this.age = age;
        this.rank = rank;
        this.ssn = ssn;
    }

    // validation age:
    validateAge() : boolean{
        if (this.age < 16){
            console.log("Age Validation Failed - Employee must be older than 16.")
            return false;
        } 
        return true;
    }

    // rank validation:
    validateRank() : boolean{
        if (this.rank < 1 || this.rank > 5){
            console.log("Rank Validation Failed - Employee rank must be between 1 and 5.")
            return false;
        }
        return true;
    }

    // ssn validation:
    validateSSN () : boolean{
        const ssnPattern = new RegExp("^[0-9]{3}-[0-9]{3}-[0-9]{3}$")
        if (!ssnPattern.test(this.ssn)){
            console.log("SSN Validation Failed - (must match the pattern: ###-###-###)")
            return false;
        }

        return true;
    }

}