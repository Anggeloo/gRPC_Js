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

function main() {
  const client = new helloProto.Greeter('localhost:50051', grpc.credentials.createInsecure());
  client.SayHello({ name: 'Mundo' }, (err, response) => {
    if (err) {
      console.error('Error:', err);
    } else {
      console.log('Respuesta del servidor:', response.message);
    }
  });
}

main();
