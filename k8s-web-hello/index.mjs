import express from "express";
import os from "os";

// Initilise express and static port
const app = express();
const PORT = 3000;


// Root endpoint
app.get("/", (req, res) => {
  const helloMessage = `Hello from ${os.hostname()}, version 2! \n`;
  console.log(helloMessage);
  res.send(helloMessage);
});


// Start listening on port 3000
app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

