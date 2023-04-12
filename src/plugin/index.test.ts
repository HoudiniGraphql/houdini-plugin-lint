import { mockCollectedDoc } from "houdini/test";
import { describe, expect, test } from "vitest";
import { test_pipeline } from "../test/helper";

describe("plugin", () => {
  test("simple fragment name for a component", async () => {
    const docsIn = [
      mockCollectedDoc(`fragment TestFragment1 on User { id }`, {
        filename: "src/lib/ui/button.svelte",
      }),
    ];

    const { pluginRoot, docs: docOut } = await test_pipeline(docsIn);

    expect("docs").toEqual("example");
  });
});
