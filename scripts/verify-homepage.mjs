import { readFileSync } from "node:fs";

const page = readFileSync("src/app/page.tsx", "utf8");
const layout = readFileSync("src/app/layout.tsx", "utf8");

const requiredText = "冷冻产品B端客户线索管理 AI CRM";
const forbiddenText = ["vercel.com/new", "Deploy Now", "To get started"];

if (!page.includes(requiredText)) {
  throw new Error(`Homepage must include project title: ${requiredText}`);
}

for (const text of forbiddenText) {
  if (page.includes(text)) {
    throw new Error(`Homepage must not include default starter text: ${text}`);
  }
}

if (layout.includes("next/font/google")) {
  throw new Error("Layout must not depend on Google Fonts during build.");
}

if (layout.includes("Create Next App")) {
  throw new Error("Layout metadata must not use default Create Next App title.");
}

console.log("Homepage content check passed.");
