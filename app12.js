const PersonPrototypes={
    greeting: function(){
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName){
this.lastName = newLastName;
    }
}

const mary = Object.create(PersonPrototypes);
mary.firstName= 'Mary';
mary.lastName= 'Williams';
mary.age=30;
console.log(mary.greeting());

const brad = Object.create(PersonPrototypes, {
    firstName: {value: 'Brad'},
    lastName :{value: 'Smith'},
    age : {value: 36}
});
console.log(brad);
console.log(brad.greeting());