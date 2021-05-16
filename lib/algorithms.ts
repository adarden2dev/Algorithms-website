import fs from "fs";
import path from "path";
import locales from "lib/locales";
import type { Algorithm } from "./models";

export function getAlgorithmSlugs() {
  return fs.readdirSync("tmp/algorithms").flatMap((file) =>
    locales.map((locale) => ({
      params: {
        algorithm: file.replace(".json", ""),
      },
      locale,
    }))
  );
}

export function getAlgorithm(slug: string, minimal = false) {
  const algorithm: Algorithm = JSON.parse(
    fs.readFileSync(path.join("tmp", "algorithms", `${slug}.json`)).toString()
  );
  if (minimal) {
    delete algorithm.body;
    Object.keys(algorithm.implementations).forEach((key) => {
      algorithm.implementations[key] = "";
    });
  }
  return algorithm;
}

export function getAllAlgorithms() {
  const algorithms: Algorithm[] = [];
  fs.readdirSync("tmp/algorithms").forEach((file) => {
    algorithms.push(
      JSON.parse(
        fs.readFileSync(path.join("tmp", "algorithms", file)).toString()
      )
    );
  });
  return algorithms;
}
