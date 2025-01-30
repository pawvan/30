const grpc  =  require('grpc')
const protoLoader  =  require("@grpc/proto-loader")
const packageDefinition  = protoLoader.loadSync("helloworld.proto")
const grpcObject =grpc.loadPackageDefinition(packageDefinition)
const greeter =  grpcObject.Greeter; 
function sayHello(call,callback){
    callback(null,{message:'hello  + call.request.name'})
}
const server  = new grpc.Server()
server.addService(greeter.service,{sayHello :sayHello})
server.bind('127.0.0.1.50051',grpc.ServerCredentials.createInsecure());
console.log('server is runnning at htto://127.0.0.1.5051')
