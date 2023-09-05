const tuckIn = (arr1, arr2) => {
    let a = [arr1.shift()];
    let b = [arr1.pop()];
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    };
      arr1.push(b[0]);
    for (let n = 0; n < arr1.length; n++) {
      a.push(arr1[n]);
    };
    return a;
  };
  console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
  console.log(tuckIn([15,150], [45, 75, 35]));
  console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));