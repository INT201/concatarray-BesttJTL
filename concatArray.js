const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if (array1==undefined && array1==null && array2==undefined && array2==null){
    console.log(undefined)
    return undefined
}
else if(array1==undefined || array1==null  && array2==true){
    console.log(array2)
    return array2
}
else if(array2==undefined || array2==null  && array1==true){
        console.log(array1)
        return array1
}
else {
    let concatArrays = array1.concat(array2)
  console.log(concatArrays)
  return concatArrays
  }
}
module.exports = concatArray
