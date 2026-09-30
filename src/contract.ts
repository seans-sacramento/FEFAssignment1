import { Employee } from "./employee.ts";

export class ContractEmployee extends Employee{
    hourlyRate: number;
    hoursWorked: number;

    constructor(
        age: number,
        rank: number,
        ssn: string,
        hourlyRate: number,
        hoursWorked: number
    ) {
        super(age, rank, ssn);

        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }

    calculateCompensation(): number {
        if (this.hoursWorked <= 40) {
            return this.hoursWorked * this.hourlyRate;
        }

        const regularPay = 40 * this.hourlyRate;

        const overtimeHours = this.hoursWorked - 40;
        const overtimePay = overtimeHours * this.hourlyRate * 1.5;

        return regularPay + overtimePay;
    }
     displayInformation(): void {
        console.log("Contract Employee");
        console.log(`Age: ${this.age}`);
        console.log(`Rank: ${this.rank}`);
        console.log(`SSN: ${this.ssn}`);
        console.log(`Hourly Rate: $${this.hourlyRate}`);
        console.log(`Hours Worked: ${this.hoursWorked}`);
        console.log(
            `Total Compensation: $${this.calculateCompensation()}`
        );
    }

    saveEmployee(): boolean {
        const ageValid = this.validateAge();
        const rankValid = this.validateRank();
        const ssnValid = this.validateSSN();

        if (ageValid && rankValid && ssnValid) {
            console.log("Contract Employee saved successfully.");
            return true;
        }

        console.log("Contract Employee was not saved.");
        return false;
    }
}