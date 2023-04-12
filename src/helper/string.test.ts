import { describe, test, expect } from "vitest";
import {
  find_component_name,
  find_path_name,
  remove_file_extension,
} from "./string";

describe("remove_file_extension", () => {
  test("removes extension from filename", () => {
    const filename = "example.txt";
    expect(remove_file_extension(filename)).toEqual("example");
  });

  test("handles filenames with multiple dots", () => {
    const filename = "example.test.txt";
    expect(remove_file_extension(filename)).toEqual("example.test");
  });

  test("returns original string if no dot is found", () => {
    const filename = "example";
    expect(remove_file_extension(filename)).toEqual("example");
  });
});

describe("find_component_name", () => {
  test("returns component name from path", () => {
    expect(find_component_name("src/components/Button.svelte")).toEqual(
      "Button"
    );
  });
});

describe("find_path_name", () => {
  test("returns path name from path", () => {
    expect(find_path_name("src/components/Button.svelte")).toEqual(
      "components"
    );
  });

  test("returns path name from path with params", () => {
    expect(find_path_name("src/routes/quote/[id]/Button.svelte")).toEqual(
      "quote_id"
    );
  });

  test("returns path name from path with params", () => {
    expect(find_path_name("src/routes/quote/[yop]-[id]/Button.svelte")).toEqual(
      "quote_yop-id"
    );
  });

  test("returns path name from path with params", () => {
    expect(find_path_name("src/routes/quote/[yop]/[id]/Button.svelte")).toEqual(
      "quote_yop_id"
    );
  });
});
