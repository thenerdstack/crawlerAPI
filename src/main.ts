// ////////////NEW CODE////////////////
import express from "express";
import { defaultConfig } from "../config.js";
import { crawl } from "./core.js";
import { readFile, writeFile, unlink } from "fs/promises";
import { glob } from "glob";
import { createServer } from "http";

let writeServer: any;
let combinedData: Record<string, any>[] = [];

const app = express();
const port = 4000;

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    console.log("API request received");
    console.log("Request body:", req.body);

    // Reset the combinedData variable for each request
    combinedData = [];

    // Delete the existing JSON files and request_queues
    await deleteExistingData();

    await crawl(req.body);
    await write();

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(combinedData));
  } catch (error) {
    console.error("Error processing API request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export async function write() {
  const jsonFiles = await glob("storage/datasets/default/*.json", {
    absolute: true,
  });

  for (const file of jsonFiles) {
    const fileContent = await readFile(file, "utf-8");
    const data: Record<string, any> = JSON.parse(fileContent);
    combinedData = combinedData.concat(data);
  }

  const writePort = 3000;

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

async function deleteExistingData() {
  const jsonFiles = await glob("storage/datasets/default/*.json", {
    absolute: true,
  });

  for (const file of jsonFiles) {
    await unlink(file);
    console.log(`Deleted file: ${file}`);
  }

  const requestQueueFiles = await glob("storage/request_queues/default/*.json", {
    absolute: true,
  });

  for (const file of requestQueueFiles) {
    await unlink(file);
    console.log(`Deleted file: ${file}`);
  }
}
