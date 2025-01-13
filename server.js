const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Load the .proto file
const PROTO_PATH = './hello.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

// Implement the service
function sayHello(call, callback) {
  const name = call.request.name;
  callback(null, { message: `Hola, ${name}!` });
}

function main() {
  const server = new grpc.Server();
  server.addService(helloProto.Greeter.service, { SayHello: sayHello });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('Servidor gRPC escuchando en el puerto 50051');
    server.start();
  });
}

main();
