import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

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

  // fall through to index.html if the file doesn't exist
  app.use("/{*path}", (req, res) => {
    if (req.path.startsWith("/assets/") || req.path.startsWith("/gallery/")) {
      return res.status(404).end();
    }

    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
