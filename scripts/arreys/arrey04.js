let arr1 = [1,2,3]
let arr2 = [5,6,7]
//####################################################################################################
//##################################.concat()#########################################################
//####################################################################################################
// concatena arreys
let arr3 = arr1.concat(arr2,"teste",1,4,5,76,3,[3,6,5,4,3])
console.log(arr1)
console.log(arr2)
console.log(arr3.join("_"))
let clone = [].concat(arr3)//clona o arr3
console.log(clone.join("-"))