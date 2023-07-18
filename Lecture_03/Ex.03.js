function indexMultiplier (arr){
    let num = 0;
    
    for (let index = 0; index < arr.length; index++) {
       num += arr[index] * index;
   
    }
    return num;
    

}
console.log(indexMultiplier([1, 2, 3, 4, 5]));
console.log(indexMultiplier([-3, 0, 8, -6]));