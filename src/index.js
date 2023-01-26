
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
    return [];
  } else {
  let resultArray = new Array();
  
    for(let i = 0; i < matrix.length; i++){
      if (i % 2 === 0){
        resultArray.push(matrix[i]);
      } else {
        matrix[i].reverse();
        resultArray.push(matrix[i]);
      }
    } 
    return resultArray.flat();
  }
}
