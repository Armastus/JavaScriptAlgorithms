/** Better solution **/
let hashMapTwoSum = (array, sum) => {
    let hashMap = {},
        results = [];

    for(let i = 0; i < array.length; i++){
        debugger;
       // console.log(hashMap);
      console.log(array[i]);
        if (hashMap[array[i]]){
            results.push([hashMap[array[i]], array[i]]);
            //results.push([hashMap[array], i]);
           //console.log(results);
        }else{
            hashMap[sum - array[i]] = array[i];
            console.log(hashMap[i]);
        }
    }
    return results;
}

console.log(hashMapTwoSum([2, 6, 4, 5, 3, 2, 3, 8], 7));
