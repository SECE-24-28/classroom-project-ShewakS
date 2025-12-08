// console.log("One");
// setTimeout(()=>{
//     console.log("Two");
// }
// ,2000);

// console.log("three");


//promise
// console.log("Process 1");
// setTimeout(()=>{
//     console.log("Process 2");

//     setTimeout(()=>{
//         console.log("Process 3");
//     },2000)
// },2000)

let res=fetch("https://jsonplaceholder.typicode.com/posts")
        .then((data)=>{
            console.log(data);
        })
console.log(res)