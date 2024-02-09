
let a=10;
let i=10;
sum();
sum();
function sum(){
    console.log(2+2);
}
function sum1(a,b){
    console.log(a+b);
}
sum1(10,20);

sum1(100,200);

function rtrn_name(name){
    return name;
}
console.log(rtrn_name(a));

function print_odd(){
    for(let i=1;i<=20;i+=2){
        console.log(i);
    }
}

print_odd();

function print_table(n){
     for(let i=n;i<=n*10;i+=n){
        console.log(i);
     }
}
print_table(6);
print_table(2);

console.log(i);