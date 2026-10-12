import { chromium } from "playwright-core";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = [];
page.on("pageerror", (error) => errors.push(String(error)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto("http://localhost:3000/construction", { waitUntil: "networkidle" });
await page.locator("#projects").scrollIntoViewIfNeeded();
await page.waitForSelector(".c-showcase canvas");
await page.waitForFunction(() => {
  const canvas = document.querySelector(".c-showcase canvas");
  return canvas && canvas.width > 100 && canvas.height > 100;
});
await page.waitForTimeout(1200);
await page.locator(".c-showcase").screenshot({ path: "C:/Users/hp/AppData/Local/Temp/yesar-showcase.png" });

const box = await page.locator(".c-showcase").boundingBox();
if (box) {
  await page.mouse.move(box.x + box.width * 0.5, box.y + box.height * 0.5);
  await page.mouse.down();
  await page.mouse.move(box.x + box.width * 0.2, box.y + box.height * 0.48, { steps: 12 });
  await page.mouse.up();
  await page.waitForTimeout(700);
  await page.locator(".c-showcase").screenshot({ path: "C:/Users/hp/AppData/Local/Temp/yesar-showcase-drag.png" });
}

await page.setViewportSize({ width: 390, height: 844 });
await page.locator("#projects").scrollIntoViewIfNeeded();
await page.waitForTimeout(600);
await page.locator(".c-showcase").screenshot({ path: "C:/Users/hp/AppData/Local/Temp/yesar-showcase-mobile.png" });

console.log(JSON.stringify({ errors, box }, null, 2));
await browser.close();
