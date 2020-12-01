import React from "react";
import puppeteer from "puppeteer";

const ExpressPage: React.FC = () => {
  return <div>hello, express</div>;
};

export async function getStaticProps() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/mnt/c/Program Files/Google/Chrome/Application/chrome.exe",
    args: [
      "--disable-gpu",
      "--renderer",
      "--no-sandbox",
      "--no-service-autorun",
      "--no-experiments",
      "--no-default-browser-check",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-extensions",
    ],
  });

  const page = await browser.newPage();
  await page.goto("https://google.com");

  // await new Promise((res) => setTimeout(res, 10000));

  await browser.close();

  return { props: {} };
}

export default ExpressPage;
