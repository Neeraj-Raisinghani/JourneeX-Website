import { MetadataRoute } from "next";
import { readdirSync, statSync } from "fs";
import { join } from "path";

const BASE_URL = "https://journeex.neerajraisinghani.com";

function getAppRoutes(dir: string, base = ""): string[] {
  const routes: string[] = [];
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const isDir = statSync(fullPath).isDirectory();

    // Skip private, API, and dynamic segment folders
    if (
      entry.startsWith("_") ||
      entry.startsWith("(") ||
      entry === "api" ||
      (entry.startsWith("[") && entry.endsWith("]"))
    ) continue;

    if (isDir) {
      const nested = getAppRoutes(fullPath, `${base}/${entry}`);
      routes.push(...nested);
    } else if (entry === "page.tsx" || entry === "page.ts" || entry === "page.jsx" || entry === "page.js") {
      routes.push(base || "/");
    }
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = join(process.cwd(), "src/app");
  const routes = getAppRoutes(appDir);

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/product" ? 0.9 : 0.7,
  }));
}
