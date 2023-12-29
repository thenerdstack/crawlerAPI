import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "",
  urls:[
    'https://thenerdstack.com',
    'https://thenerdstack.com/services/web-development',
    'https://thenerdstack.com/services/chatbots',
    'https://thenerdstack.com/services/automated-cold-email-lead-gen-systems'
],
  match: "undefined",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
};

// export const defaultConfig: Config = {
//   url: "",
//   urls: [
//     'https://app.apollo.io/#/contacts/6570cbe6321f3a000126336a', 
//     'https://app.apollo.io/#/contacts/6570cbe6321f3a00012633c6'
//   ],
//   match: "",
//   maxPagesToCrawl: 50,
//   outputFileName: "output.json",
//   cookie:
//     { name: "cookie1", value: "value1" },
// };