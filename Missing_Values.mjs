import PromptSync from "prompt-sync";
import randomInteger from "random-int";

//Find missing values in array and its occurance
function Missing_values(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var start = parseInt(arr[0]);
  var end = parseInt(arr.slice(-1));
  var index_value = 1;
  for (var i = start + 1; i <= end; i++) {
    if (arr.indexOf(i) == -1) {
      console.log("Value", i, "is missing in the array at index", index_value);
      index_value += 1;
    } else {
      index_value += 1;
    }
  }
}
export { Missing_values };

// Function to Display all the types in an array
function Get_Types(arr) {
  let Total_Types = [];
  let length = arr.length;
  for (let index = 0; index < length; index++) {
    let type = typeof arr[index];
    if (Total_Types.indexOf(type) == -1) {
      Total_Types.push(type);
    }
  }
  console.log(Total_Types);
}
export { Get_Types };
