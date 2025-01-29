//fixed arity the thing 3 arguments
const multiply = (a) =>(b) =>(c) =>a*b*c
console.log(multiply(2)(3)(4));
//array based object 
//dynamic arity any number of arguments
const multiple = (...args)=>{
if(args.length ===0) return 1 // handle edge cases 
return args.reduce((acc,num)=> 
    (
        typeof num === "function" ? acc:acc*num
    
    ),1
)
}
const curreidmultiply  =(a) =>(b)=>
    b!==undefined ? curreidmultiply(a*b):a;
