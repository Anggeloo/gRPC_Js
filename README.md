# GRPC Architecture Implementation in Node.js
This repository demonstrates a basic implementation of gRPC using Node.js. It includes a client and a server that communicate using a protocol defined in the .proto file.

## 🚀 Technologies used.
- **Node.js:** Runtime platform for executing JavaScript on the server.
- **GRPC:** High performance RPC (Remote Procedure Call) framework.
- **Protobuf (Protocol Buffers):** neutral and efficient language for structured data serialization.

## 📂 Project structure
```
gRPC_Js/
├── hello.proto # Protocol definition file.
├── client.js # gRPC client implementation.
├─── server.js # gRPC server implementation.
└└── package.json # Node.js project setup
```
## 📄 Description of the main files
### hello.proto
This file defines the contract between the client and the server. It contains:
- Service: Greeter, with SayHello method.
- Messages: HelloRequest (input) and HelloReply (response).

### server.js
Implements the gRPC server:
- Loads and registers the hello.proto file.
- Defines the SayHello method, which responds with a hello.
- Starts the server on port 50051.

### client.js
Implements the gRPC client:
- Loads the hello.proto file.
- Creates an instance of the Greeter client.
- Makes a call to the remote SayHello method and displays the server's response.

## 📦 Installation
- Clone the repository:
```
git clone https://github.com/Anggeloo/gRPC_Js.git
cd gRPC_Js
```
- Install the dependencies:
```
npm install @grpc/grpc-js @grpc/proto-loader
```
## 🛠️ Usage
1. Start the server
- Run the server to listen for requests on port 50051:
```
node server.js
```
2. Run the client
- Make a request to the server with the client:
```
node client.js
```
### Expected output
- **Server:**
```
gRPC server listening on port 50051
```
- **Client:**
```
Response from the server: Hello, World!
```
