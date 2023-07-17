function leapYeas(y){
    if ( y % 4 == 0 ){
        return true;
    }
    else{ 
        return false;
    }
}
console.log(leapYeas(1990));
console.log(leapYeas(1924));
console.log(leapYeas(2021));
console.log(leapYeas(2020));
console.log(leapYeas(2000));
console.log(leapYeas(2023));
console.log(leapYeas(1922));