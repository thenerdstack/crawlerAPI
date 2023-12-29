////////////NEW CODE////////////////
// import express from "express";
// import { defaultConfig } from "../config.js";
// import { crawl } from "./core.js";
// import { readFile, writeFile } from "fs/promises";
// import { glob } from "glob";
// import { createServer } from "http";

// let writeServer: any; // Declare a variable to hold the write server instance

// const app = express();
// const port = 4000;

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // Endpoint to handle the API request
// app.post("/", async (req, res) => {
//   try {
//     // Handle the API request
//     console.log("API request received");
//     console.log("Request body:", req.body);

//     // Call the crawl and write functions
//     await crawl(req.body);
//     await write();

//     // Send a response
//     res.status(200).json({ message: "API request processed successfully" });
//   } catch (error) {
//     console.error("Error processing API request:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// export async function write() {
//   const jsonFiles = await glob("storage/datasets/default/*.json", {
//     absolute: true,
//   });

//   let combinedData: Record<string, any>[] = [];

//   for (const file of jsonFiles) {
//     const fileContent = await readFile(file, "utf-8");
//     const data: Record<string, any> = JSON.parse(fileContent);
//     combinedData = combinedData.concat(data);
//   }

//   const writePort = 3000; // Use a different port for the write server

//   if (writeServer) {
//     console.log("Closing previous write server");
//     writeServer.close();
//     console.log("Previous write server closed");
//   }

//   writeServer = createServer((_req, res) => {
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(combinedData));
//   });

//   writeServer.listen(writePort, () => {
//     console.log(`Write server is running on port ${writePort}`);
//   });  

//   console.log("JSON response:", JSON.stringify(combinedData));
// }


import express from "express";
import { defaultConfig } from "../config.js";
import { crawl } from "./core.js";
import { readFile, writeFile } from "fs/promises";
import { glob } from "glob";
import { createServer } from "http";

let writeServer: any; // Declare a variable to hold the write server instance
let combinedData: Record<string, any>[] = []; // Declare the combinedData variable

const app = express();
const port = 4000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Endpoint to handle the API request
app.post("/", async (req, res) => {
  try {
    // Handle the API request
    console.log("API request received");
    console.log("Request body:", req.body);

    // Call the crawl and write functions
    await crawl(req.body);
    await write();

    // Send the combinedData as the response
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(combinedData));
  } catch (error) {
    console.error("Error processing API request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export async function write() {
  const jsonFiles = await glob("storage/datasets/default/*.json", {
    absolute: true,
  });

  combinedData = []; // Reset the combinedData variable

  for (const file of jsonFiles) {
    const fileContent = await readFile(file, "utf-8");
    const data: Record<string, any> = JSON.parse(fileContent);
    combinedData = combinedData.concat(data);
  }

  const writePort = 3000; // Use a different port for the write server

  if (writeServer) {
    console.log("Closing previous write server");
    writeServer.close();
    console.log("Previous write server closed");
  }

  writeServer = createServer((_req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(combinedData));
  });

  writeServer.listen(writePort, () => {
    console.log(`Write server is running on port ${writePort}`);
  });

  console.log("JSON response:", JSON.stringify(combinedData));
}
