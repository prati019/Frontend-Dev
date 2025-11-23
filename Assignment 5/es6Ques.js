class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Name:-", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);          // call parent
        this.branch = branch;
    }
    showBranch() {
        console.log("Branch:-", this.branch);
    }
}

const s1 = new Student("Pragati", "CS");
s1.showName();
s1.showBranch();
