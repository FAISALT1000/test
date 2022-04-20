const firstName='Ahmed';
const lastName='Alhejaili';
const age=30

let val;

val=firstName+lastName;

//Concatenation
val=firstName +' '+lastName;

//Append
val ='Brad';
val +=' Travers';

val ='hi\n my name is '+firstName+'\n and I am '+age;

//Escaping
val ="That's awesome can't wait";

//Length
val =firstName.length;

//concat
val =firstName.concat(' ', lastName);

// change case
val =firstName.toLocaleUpperCase();
val =firstName.toLocaleLowerCase();

val = firstName[2];


//indexOf()
val = firstName.indexOf('m');
val = firstName.lastIndexOf('m');

//charAt()
val = firstName.charAt('');
console.log(val);