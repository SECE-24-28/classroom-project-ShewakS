// let student={sna:"praveen",age:19,demo:function()
//     {
//         console.log("Hii I am "+this.sna);
//     }
// }

// student.demo();

// let student2={sna:"Prabhu",age:19,samp:()=>{
//     console.log("Hii I am "+this.sna)
// }}

// student2.samp();


let student=[{sna:"Praveen",age:19,sma:90,fee:true},
    {sna:"Ajith",age:18,sma:98,fee:false},
    {sna:"Surya",age:20,sma:69,fee:true}
]

student.forEach((stu)=>
{
    console.log(stu.sna+" "+stu.sma);
})