let arr=["arun","vijay","sara"];
console.log(arr);

arr.unshift("vimal");
console.log(arr);

arr.pop()
console.log(arr);

arr.shift();
console.log(arr);

delete arr[1];
console.log(arr)

arr.splice(1,2);
console.log(arr);

console.log(arr);
arr.splice(0,2,"Hari","Jack");
console.log(arr);

let newarray=arr.slice(0,2);
console.log(newarray);
