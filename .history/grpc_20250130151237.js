const grpc  =  require('grpc')
const protoLoader  =  require("@grpc/proto-loader")
const packageDefinition  = protoLoader.loadSync("helloworld.proto")
const grpcObject =grpc.loadPackageDefinition(packageDefinition)
const greeter =  grpcObject.Greeter;
 
function sayHello(call,callback){
    callback(null,{message:'hello '
}