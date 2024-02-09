function return_name(NAMe){
    return NAMe;
}

function last_name(lastname){
    return lastname;
}

function fullname(function1,function2){
    return (`full name is ${function1} ${function2}`);s
}
fullname(return_name('maheer'),last_name('siddiqui'));

function print_fullname(){
    console.log();
}
print_fullname();
print_fullname(fullname(return_name('maheer'),last_name('siddiqui')))