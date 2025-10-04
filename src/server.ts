import { Server } from "http";
import app from "./app";
import connectDB from "./app/config/db";
import { envVars } from "./app/config/env";
let server: Server;
const PORT = envVars.PORT || 5000;
server = app.listen(envVars.PORT, () => {
  console.log(`Server running on port ${envVars.PORT}`);
});

// *  signal termination sigterm
process.on("SIGTERM", () => {
  console.log("uncaught exception  detected... Server shutting down ");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// *  signal termination sigterm
process.on("SIGINT", () => {
  console.log("sigint signal detected... Server shutting down ");
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// unhandled rejection error
process.on("unhandledRejection", (err) => {
  console.log("unhandled Rejection detected... Server shutting down ", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
//   Promise.reject(new Error("I forgot to catch this promise"))

//uncaught rejection error

process.on("uncaughtException", (err) => {
  console.log("uncaught exception  detected... Server shutting down ", err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});
