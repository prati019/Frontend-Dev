let bonus = 5000; // global value

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;

    if (isPermanent) {
        salary = salary + bonus;
    }

    console.log("Total Salary : -", salary);
}

calculateSalary();
