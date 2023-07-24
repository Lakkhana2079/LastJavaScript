function numbersSum(arr){
    let num = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
          num += arr[i];
        }
      }
    
      return num;
    }
    
    //const mixedArray = [1, 2.5, 'hello', 7, true, 10.2];
    //const result = sumNumbersInArray(mixedArray);
    //console.log(result); // Output will be: 20.7

    console.log(numbersSum([1, 2, "13", "4", "645"]));
    console.log(numbersSum([true, false, "123", "75"]));
    console.log(numbersSum([1, 2, 3, 4, 5, true]));



