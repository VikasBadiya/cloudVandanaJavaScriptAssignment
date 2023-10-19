//B. Perform sorting of an array in descending order.
function descendingSort(arr){
          var lengthOfArray = arr.length;
          for(var i = 0;i< lengthOfArray;i++){
             for(var j = 0; j < lengthOfArray - i - 1 ; j++){
                  if(arr[j] < arr[j + 1]){
                  var temp = arr[j];
                  arr[j] = arr[j + 1];
                  arr[j + 1] = temp;
                  }
              } 
          }
          
          return arr;
      }
      
      var Myarray = [1,2,3,4,5,9,8,6];
      
      var sortedArray = descendingSort(Myarray);
      
      console.log(sortedArray);