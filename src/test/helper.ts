import type { Config, ConfigFile, Document } from "houdini";
import { runPipeline } from "houdini/codegen";
import { testConfig } from "houdini/test";

export async function test_pipeline(
  docs: Document[],
  extra_config?: Partial<ConfigFile>
): Promise<{
  pluginRoot: string;
  docs: Document[];
  config: Config;
}> {
  const config = testConfig(extra_config);

  // apply the transforms
  await runPipeline(config, docs);

  return {
    pluginRoot: config.pluginDirectory("houdini-plugin-current"),
    docs,
    config,
  };
}
