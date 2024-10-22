// TodoList math
// 1st step
let TodoList = ["do laundry","pay bills","walk with dog"];
TodoList.push("buy groceries");
console.log(TodoList);

// 2nd step
TodoList.unshift("clean room");
console.log(TodoList);

// 3rd step
TodoList.pop();
console.log(TodoList);

// 4th step
let result = TodoList.indexOf("clean room");
console.log(result);
let remove = TodoList.shift();
console.log(remove);
// 5th step
let currentLength = TodoList.length;
console.log(currentLength);