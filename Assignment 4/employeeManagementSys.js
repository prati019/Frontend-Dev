class Employee {
    constructor(id, name, dept, salary) {
        this.id = id;
        this.name = name;
        this.department = dept;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += (this.salary * percent / 100);
    }
}

const staff = [
    new Employee(1, "Pragati", "Tech", 5000),
    new Employee(2, "Aria", "Finance", 38000),
    new Employee(3, "Sara", "Tech", 52000),
    new Employee(4, "Ria", "HR", 30000),
    new Employee(5, "Tina", "Admin", 40000)
];

const payout = staff.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:-", payout);
