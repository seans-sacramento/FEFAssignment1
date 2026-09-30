import { FullTimeEmployee } from "./fulltime.ts";
import { ContractEmployee } from "./contract.ts";

// Valid Fulltime Employee

const fulltimeEmployee = new FullTimeEmployee(
    25,
    3,
    "123-456-789",
    4000,
    8
);

if (fulltimeEmployee.saveEmployee()) {
    fulltimeEmployee.displayInformation();
}

// Valid Contract Employee

const contractEmployee = new ContractEmployee(
    30,
    2,
    "987-654-321",
    30,
    45
);

if (contractEmployee.saveEmployee()) {
    contractEmployee.displayInformation();
}

// Invalid Employee

const invalidEmployee = new FullTimeEmployee(
    15,
    6,
    "123456789",
    4000,
    5
);

if (invalidEmployee.saveEmployee()) {
    invalidEmployee.displayInformation();
}