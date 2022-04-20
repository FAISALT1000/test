class Person{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    greeting(){
        return `Hello There ${this.firstName} ${this.lastName}`
    }
    
}
// Customer is sub class of Persons
class Customer extends Person{
    constructor(firstName,lastName,phone,membership){
       super(firstName,lastName);
        this.phone=phone;
        this.membership=membership;

    }
    static getMembershipCost(){
        return 500;
    }
}

const john=new Customer('John','Doe','555-555-777','standerd');
console.log(john.greeting());

console.log(Customer.getMembershipCost()); 