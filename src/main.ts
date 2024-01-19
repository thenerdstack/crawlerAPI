// ////////////NEW CODE////////////////
// import express from "express";
// import { defaultConfig } from "../config.js";
// import { crawl } from "./core.js";
// import { readFile, writeFile } from "fs/promises";
// import { glob } from "glob";
// import { createServer } from "http";

// let writeServer: any; // Declare a variable to hold the write server instance
// let combinedData: Record<string, any>[] = []; // Declare the combinedData variable

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

//     // Send the combinedData as the response
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(combinedData));
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

//   combinedData = []; // Reset the combinedData variable

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


// import express from "express";
// import { defaultConfig } from "../config.js";
// import { crawl } from "./core.js";
// import { readFile, writeFile } from "fs/promises";
// import { glob } from "glob";
// import { createServer } from "http";

// let writeServer: any;
// let combinedData: Record<string, any>[] = [];

// const app = express();
// const port = 4000;

// app.use(express.json());

// app.post("/", async (req, res) => {
//   try {
//     console.log("API request received");
//     console.log("Request body:", req.body);

//     // Reset the combinedData variable for each request
//     combinedData = [];

//     await crawl(req.body);
//     await write();

//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(combinedData));
//   } catch (error) {
//     console.error("Error processing API request:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// export async function write() {
//   const jsonFiles = await glob("storage/datasets/default/*.json", {
//     absolute: true,
//   });

//   for (const file of jsonFiles) {
//     const fileContent = await readFile(file, "utf-8");
//     const data: Record<string, any> = JSON.parse(fileContent);
//     combinedData = combinedData.concat(data);
//   }

//   const writePort = 3000;

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




// import express from "express";
// import { defaultConfig } from "../config.js";
// import { crawl } from "./core.js";
// import { readFile, writeFile, unlink } from "fs/promises";
// import { glob } from "glob";
// import { createServer } from "http";

// let writeServer: any;
// let combinedData: Record<string, any>[] = [];

// const app = express();
// const port = 4000;

// app.use(express.json());

// app.post("/", async (req, res) => {
//   try {
//     console.log("API request received");
//     console.log("Request body:", req.body);

//     // Reset the combinedData variable for each request
//     combinedData = [];

//     // Delete the existing JSON files and request_queues
//     await deleteExistingData();

//     await crawl(req.body);
//     await write();

//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(combinedData));
//   } catch (error) {
//     console.error("Error processing API request:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// export async function write() {
//   const jsonFiles = await glob("storage/datasets/default/*.json", {
//     absolute: true,
//   });

//   for (const file of jsonFiles) {
//     const fileContent = await readFile(file, "utf-8");
//     const data: Record<string, any> = JSON.parse(fileContent);
//     combinedData = combinedData.concat(data);
//   }

//   const writePort = 3000;

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

// async function deleteExistingData() {
//   const jsonFiles = await glob("storage/datasets/default/*.json", {
//     absolute: true,
//   });

//   for (const file of jsonFiles) {
//     await unlink(file);
//     console.log(`Deleted file: ${file}`);
//   }

//   const requestQueueFiles = await glob("storage/request_queues/default/*.json", {
//     absolute: true,
//   });

//   for (const file of requestQueueFiles) {
//     await unlink(file);
//     console.log(`Deleted file: ${file}`);
//   }
// }



// import express from "express";
// import { defaultConfig } from "../config.js";
// import { crawl } from "./core.js";
// import { readFile, writeFile, unlink } from "fs/promises";
// import { glob } from "glob";
// import { createServer } from "http";

// let writeServer: any;
// let combinedData: Record<string, any>[] = [];

// const app = express();
// const port = 4000;

// app.use(express.json());

// app.post("/", async (req, res) => {
//   try {
//     console.log("API request received");
//     console.log("Request body:", req.body);

//     // Reset the combinedData variable for each request
//     combinedData = [];

//     // Delete the existing JSON files
//     await deleteExistingJsonFiles();
//     await deleteRequestQueueFiles();

//     await crawl(req.body);
//     await write();

//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(combinedData));
//   } catch (error) {
//     console.error("Error processing API request:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });

// export async function write() {
//   const jsonFiles = await glob("storage/datasets/default/*.json", {
//     absolute: true,
//   });

//   for (const file of jsonFiles) {
//     const fileContent = await readFile(file, "utf-8");
//     const data: Record<string, any> = JSON.parse(fileContent);
//     combinedData = combinedData.concat(data);
//   }

//   const writePort = 3000;

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

// async function deleteExistingJsonFiles() {
//   const jsonFiles = await glob("storage/datasets/default/*.json", {
//     absolute: true,
//   });

//   for (const file of jsonFiles) {
//     await unlink(file);
//     console.log(`Deleted file: ${file}`);
//   }
// }

// async function deleteRequestQueueFiles() {
//   const requestQueueFiles = await glob("storage/request_queues/default/*.json", {
//     absolute: true,
//   });

//   for (const file of requestQueueFiles) {
//     await unlink(file);
//     console.log(`Deleted file: ${file}`);
//   }
// }



import express from "express";
import { defaultConfig } from "../config.js";
import { crawl } from "./core.js";
import { readFile, writeFile } from "fs/promises";
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

    // // Overwrite the existing JSON files
    await overwriteExistingJsonFiles();

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

async function overwriteExistingJsonFiles() {
  const jsonFiles = await glob("storage/datasets/default/*.json", {
    absolute: true,
  });

  for (const file of jsonFiles) {
    await writeFile(file, "[]", "utf-8");
    console.log(`Overwritten file: ${file}`);
  }
}




// // ============================

// // For more information, see https://crawlee.dev/
// import { PlaywrightCrawler, downloadListOfUrls } from "crawlee";
// import { readFile, writeFile } from "fs/promises";
// import { glob } from "glob";
// import { Config, configSchema } from "./config.js";
// import { Page } from "playwright";
// import { isWithinTokenLimit } from "gpt-tokenizer";
// import { createServer } from "http";
// import express from "express";

// let combinedData: Record<string, any>[] = [];
// let html: string = ""; // Declare the html variable outside the crawl function

// const app = express();
// const port = 4000;

// let pageCounter = 0;

// app.use(express.json());

// function getPageHtml(page: Page, selector = "body") {
//   return page.evaluate((selector) => {
//     // Check if the selector is an XPath
//     if (selector.startsWith("/")) {
//       const elements = document.evaluate(
//         selector,
//         document,
//         null,
//         XPathResult.ANY_TYPE,
//         null,
//       );
//       let result = elements.iterateNext();
//       return result ? result.textContent || "" : "";
//     } else {
//       // Handle as a CSS selector
//       const el = document.querySelector(selector) as HTMLElement | null;
//       return el?.innerText || "";
//     }
//   }, selector);
// }

// async function waitForXPath(page: Page, xpath: string, timeout: number) {
//   await page.waitForFunction(
//     (xpath) => {
//       const elements = document.evaluate(
//         xpath,
//         document,
//         null,
//         XPathResult.ANY_TYPE,
//         null,
//       );
//       return elements.iterateNext() !== null;
//     },
//     xpath,
//     { timeout },
//   );
// }

// async function crawl(config: Config) {
//   configSchema.parse(config);

//   if (process.env.NO_CRAWL !== "true") {
//     // PlaywrightCrawler crawls the web using a headless
//     // browser controlled by the Playwright library.
//     const crawler = new PlaywrightCrawler({
//       // Use the requestHandler to process each of the crawled pages.
//       async requestHandler({ request, page, log, }) {
//         if (config.cookie) {
//           // Set the cookie for the specific URL

//           const cookie = {
//             name: config.cookie.name,
//             value: config.cookie.value,
//             url: request.loadedUrl,
//           };
//           await page.context().addCookies([cookie]);
  
          
//         }

//         const title = await page.title();
//         pageCounter++;
//         log.info(
//           `Crawling: Page ${pageCounter} / ${config.maxPagesToCrawl} - URL: ${request.loadedUrl}...`,
//         );

//         // Use custom handling for XPath selector
//         if (config.selector) {
//           if (config.selector.startsWith("/")) {
//             await waitForXPath(
//               page,
//               config.selector,
//               config.waitForSelectorTimeout ?? 1000,
//             );
//           } else {
//             await page.waitForSelector(config.selector, {
//               timeout: config.waitForSelectorTimeout ?? 1000,
//             });
//           }
//         }

//         // const html = await getPageHtml(page, config.selector);
//         // const finalHtml = { title, url: request.loadedUrl, html }

//         const currentHtml = await getPageHtml(page, config.selector);
//         html += currentHtml; // Append the current HTML to the html variable
//         log.info(html)


//         // // Save results as JSON to ./storage/datasets/default
//         // await pushData({ title, url: request.loadedUrl, html });

//         // if (config.onVisitPage) {
//         //   await config.onVisitPage({ page, pushData });
//         // }

//         // // Extract links from the current page
//         // // and add them to the crawling queue.
//         // await enqueueLinks({
//         //   globs:
//         //     typeof config.match === "string" ? [config.match] : config.match,
//         // });
//       },
//       // Comment this option to scrape the full website.
//       maxRequestsPerCrawl: config.maxPagesToCrawl,
//       // Uncomment this option to see the browser window.
//       // headless: false,
//       // preNavigationHooks: [
//       //   // Abort requests for certain resource types
//       //   async ({ page, log }) => {
//       //     // If there are no resource exclusions, return
//       //     const RESOURCE_EXCLUSTIONS = config.resourceExclusions ?? [];
//       //     if (RESOURCE_EXCLUSTIONS.length === 0) {
//       //       return;
//       //     }
//       //     await page.route(`**\/*.{${RESOURCE_EXCLUSTIONS.join()}}`, (route) =>
//       //       route.abort("aborted"),
//       //     );
//       //     log.info(
//       //       `Aborting requests for as this is a resource excluded route`,
//       //     );
//       //   },
//       // ],
//     });

//     const SITEMAP_SUFFIX = "sitemap.xml";
//     const isUrlASitemap = config.url.endsWith(SITEMAP_SUFFIX);

//     if (isUrlASitemap) {
//       const listOfUrls = await downloadListOfUrls({ url: config.urls![0] });
    
//       // Add the initial URLs to the crawling queue.
//       await crawler.addRequests(listOfUrls);
    
//       // Run the crawler
//       await crawler.run(config.urls);
//     } else if (config.urls && config.urls.length > 0) {
//       for (const url of config.urls) {
//         await crawler.addRequests([url]);
//       }
//     } else {
//       // Add first URL to the queue and start the crawl.
//       await crawler.addRequests([config.url]);
//     }
    
//     // Run the crawler
//     await crawler.run();
//   }
// }

// app.post("/", async (req, res) => {
//   try {
//     console.log("API request received");
//     console.log("Request body:", req.body);

//     // Reset the combinedData variable for each request
//     combinedData = [];

//     // Call the crawl function and retrieve the html variable
//     await crawl(req.body);

//     res.setHeader("Content-Type", "text/plain");

//     if (html) {
//       // console.log('it worked')
//       // console.log(html);
//       // res.end("it worked");
//       const response = {
//         url: req.body.url,
//         html: html
//       };
      
//       const jsonResponse = JSON.stringify(response);
      
//       res.end(jsonResponse)
//     } else {
//       res.status(500).send("Empty response");
//     }
//   } catch (error) {
//     console.error("Error processing API request:", error);
//     res.status(500).send("Internal server error");
//   }
// });


// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });