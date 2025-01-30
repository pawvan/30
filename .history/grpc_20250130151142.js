const grpc  =  require('grpc')
const protoLoader  =  require("@grpc/proto-loader")
const packageDefinition  = protoLoader.loadSync("helloworld.proto")
const grpcObject =grpc.loadPackageDefinition()
const greeter =  grpcObject.Greeter;