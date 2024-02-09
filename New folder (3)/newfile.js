for(let i=1;i<=10;i+=2){
    console.log(i);
}
let a=10;
for(let i=a;i<=20;i+=2){
    console.log(i);
}

let fruits=['apple','mango','banana','orange'];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}

for(fruit of fruits){
     console.log(fruit); 
}

function sum(a,b){
    console.log(a + b);
}
sum(10,20);
sum(30,30);


function print_name(){
    console.log(a);
}
print_name();
function print_table(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i);
    }
}
print_table(5);
print_table(2);

