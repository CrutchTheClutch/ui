import { getLocalSize, getRemoteSize } from "@clutchd/bundlejs";
import { readFileSync } from "fs";

test("ensures the bundle size is smaller than the last size", async () => {
  const og = await getRemoteSize("@clutchd/compose-refs");
  const size = await getLocalSize([readFileSync("dist/index.js", "utf8")]);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});

test("ensures the package is smaller than the original size", async () => {
  const og = await getRemoteSize("@radix-ui/react-compose-refs");
  const size = await getRemoteSize("@clutchd/compose-refs@1.1.5");
  console.log(size);
  expect(size.rawCompressedSize).toBeLessThanOrEqual(og.rawCompressedSize);
});
