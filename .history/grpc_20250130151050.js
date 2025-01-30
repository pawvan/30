const grpc  =  require('grpc')
const protoLoader  =  require("@grpc/proto-loader")
const packageDefination  = protoLoader.loadSync("helloworld.proto")
const greeter =  grpcObject.