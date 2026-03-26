import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { injectSeoIntoHtml } from "./seo";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");

  app.use(
    express.static(distPath, {
      setHeaders: (res, filePath) => {
        const extension = path.extname(filePath).toLowerCase();

        if ([".png", ".jpg", ".jpeg", ".svg", ".webp", ".css", ".js", ".woff", ".woff2"].includes(extension)) {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          res.setHeader("Expires", new Date(Date.now() + 31536000000).toUTCString());
        }
      },
    }),
  );

  app.use("/{*path}", (req, res) => {
    if (req.path.startsWith("/assets/") || req.path.startsWith("/gallery/")) {
      return res.status(404).end();
    }

    const html = injectSeoIntoHtml(indexHtml, req.originalUrl);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
}
