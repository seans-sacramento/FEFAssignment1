import { Employee } from "./employee";

export class FullTimeEmployee extends Employee{
    salary : number;
    overtimeHours : number;

    constructor (
        age: number,
        rank: number,
        ssn: string,
        salary : number,
        overtimeHours : number
    ) { /*
        Source: https://www.typescriptlang.org/docs/handbook/2/classes.html
        "Just as in JavaScript, if you have a base class, you’ll need to call super(); in your constructor body before using any this. members:" */
        super (age, rank, ssn)

        this.salary = salary;
        this.overtimeHours = overtimeHours;
    }

    calculateSalary() : number {
        const hourlyRate = this.salary / 40;

        let overtimePay = 0;

        if (this.overtimeHours >= 1 && this.overtimeHours <= 10) {
            overtimePay = hourlyRate * this.overtimeHours * 1.25;
        }
        else if (this.overtimeHours >= 11 && this.overtimeHours <= 20) {
            overtimePay = hourlyRate * this.overtimeHours * 1.5;
        }
        else if (this.overtimeHours >= 21 && this.overtimeHours <= 30) {
            overtimePay = hourlyRate * this.overtimeHours * 1.75;
        }
        else if (this.overtimeHours > 30) {
            overtimePay = hourlyRate * this.overtimeHours * 2;
        }

        return overtimePay;
    }
    
    calculateCompensation(): number {
        return this.salary + this.calculateSalary();
    }
}