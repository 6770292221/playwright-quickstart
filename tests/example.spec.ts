// example.test.js
const { test, expect } = require("@playwright/test");

test("should open playwright website", async ({ page }) => {
  // เปิดหน้าเว็บไซต์ Playwright
  await page.goto("https://playwright.dev/");

  // ตรวจสอบว่ามีข้อความ 'Playwright' อยู่ในหน้า
});
