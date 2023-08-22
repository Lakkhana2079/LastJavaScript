function numberSplite(number){
    const c =" , ";
    return Math.floor (number / 2 )+ c + Math.ceil (number / 2 );

}
console.log(numberSplite(4));
console.log(numberSplite(10));
console.log(numberSplite(11));
console.log(numberSplite(-9));