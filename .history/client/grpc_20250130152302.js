const grpc= require('grpc')
const protoLoader  =require("@grpc/proto-loader")
const packageDefination  = protoLoader.loadSync("helloworld.proto")
const grpcObject  =grpc.loadPackageDefinition()
const client = new greeter('localhost:5051',grpc.credentials.createInsecure());
client.sayHello({
    name:"helo"
},(error,message)=>{

if(!error){
    console.log(response.message)

}
else{
    console.error(error.message);
}

})
