function print_name(Name){
    return Name;
}
function last_name(lastname){
    return lastname;
}

function full_name(function1, function2){
        return(`full name is ${function1} ${function2}`);
}

full_name(print_name("Maheer"),last_name("siddiqui"));


function print_fullname(fullname){
    console.log(fullname);
}
print_fullname(full_name(print_name('maheer'),last_name('siddiqui')));

let sum=(a,b )=>{ return 2+ 2}

const multi=()=>{}