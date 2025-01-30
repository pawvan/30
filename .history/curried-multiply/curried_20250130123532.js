//approch for the problem :
/*
currying transforms a function that takes multiple arguments into series of function that takes one argument that takes one argument each 
multiply(2,3,4)
multiply(2)(2)(4)
firstly the function should take argm=ument at a time 
then after it should return the function with one arguments
then after the thing this should continue until it should arrive the result is computed 
use closures 
each function should return a new function keeping track of prevoulsy passed values
using closures 
either fix the function to always take three argumnents
or make it flexible using recursion 
*/
//fixed arity the thing 3 arguments
const multiply = (a) =>(b) =>(c) =>a*b*c
console.log(multiply(2)(3)(4));
//array based object 
//dynamic arity any number of arguments
const multiple = (...args)=>{
if(args.length ===0) return 1 // handle edge cases 
return args.reduce((acc,num)=> 
    (
        typeof num !=="function" ? acc*num:acc
    
    ),1
)
}
// const multiple =  (...args){
    // if(args.length===0
    // ) return 1 //handle edge cases 
    // return args.reduce((acc,num)=>(
        // typeof num ==='function' ?acc:acc*num;
    // ))
// }
// const ddddd  = (a)=>(b)=>{
    // b!==undefined  ? ddddd(a*b):a;
// }
const curreidmultiply  =(a) =>(b)=>
    b===undefined ? a:curreidmultiply(a*b);
console.log(curreidmultiply(2)(3)(4)())
console.log(curreidmultiply(5)(2)())
//dynamic arity takes any number of arguments 
//curring converts the high arity function ti unary function applied sequestily 
//by means 
const add  =(a) => (b) =>(c)=>a+b+c;
console.log(add(2)(3)(5)());

const curry  =(a)=>(b)=>( c )=> (
    (a*b)+c
)
console.log()
const xx  =(...args)=>{
    if(args.length) return 1;
    
}