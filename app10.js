 function Person(firstName, lastName, dob){

    this.firstName=firstName;
    this.lastName=lastName;
    this.birthday=new Date(dob);
   /*  this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate=new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    } */
}

Person.prototype.calculateAge =
function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate=new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.getsMaried = function(newLastName){
    return this.lastName=newLastName;
}

Person.prototype.getFullNameAndCalculateAge =
function(){
    const diff = Date.now()- this.birthday.getTime();
    const ageDate = new Date(diff);
    return this.firstName+' '+this.lastName+' '+Math.abs(ageDate.getUTCFullYear()-1970);
}

const faisal = new Person('Faisal','Alhejaili','09-21-1999');
const ahmed  = new Person('Ahmed','Alhejaili','11-20-2002');
const marry= new Person('marry','Alhejaili','05-29-2000');

marry.getsMaried('Smith');
console.log(marry.getFullName());