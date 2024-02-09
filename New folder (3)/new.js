const person={
    name:'maheer',
    age:19,
    greet: function(){
        return `hello, my name is ${this.name} and im ${this.age} years old `;
    }
};
const greetfunction=person.greet;
const message=greetfunction();
console.log(message);