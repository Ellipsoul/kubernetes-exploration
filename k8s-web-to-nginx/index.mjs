import express from "express";
import fetch from "node-fetch";
import os from "os";

// Initilise express and static port
const app = express();
const PORT = 3000;


// Root endpoint
app.get("/", (req, res) => {
  const helloMessage = `Hello from ${os.hostname()} \n`;
  console.log(helloMessage);
  res.send(helloMessage);
});


// Connect ot NGINX server
app.get("/nginx", async (req, res) => {
  const url = 'http://nginx';
  const response = await fetch(url);
  const body = await response.text();
  res.send(body);
});


// Start listening on port 3000
app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

