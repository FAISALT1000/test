function Personn(firstName,lastName){
    this.firstName= firstName;
    this.lastName= lastName;
    }
    
    Personn.prototype.greeting= function(){
        return `hello there ${this.firstName} ${this.lastName}`;
    }
    const person1 = new Personn('FAISAL','ALhejaili');
    
    //console.log(person1);
    
    function Customer (firstName,lastName,phone,membership){
        Personn.call(this, firstName,lastName);
    
        this.phone=phone;
        this.membership=membership;
    }
    //Inherit 
    Customer.prototype = Object.create(Personn.prototype);
    
    //Make customer.Prototypr return Customer()
    Customer.prototype.constructor = Customer;
    
    const customer1 = new Customer('Tom','smith','0560581124','Standard');
    
    console.log(customer1);
    
    // Customer greeting
    Customer.prototype.greeting = function(){
        return `hello there ${this.firstName} ${this.lastName}
        and welcome to our company`;
    }
    
    console.log(customer1.greeting());