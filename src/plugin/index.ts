import { Log, logGreen, logYellow } from "@kitql/helper";
import { plugin, type PluginHooks } from "houdini";
import { find_component_name, find_path_name } from "../helper/string";

export const pluginHooks: () => Promise<PluginHooks> = async () => ({
  beforeValidate: async ({ config, documents }) => {
    const list: {
      type: "Path" | "Component";
      filename: string;
      fragName: string;
      shouldStartWith: string;
    }[] = [];

    const log = new Log("");

    const managedExt = [".svelte", ".tsx", ".jsx"];
    const specificPages: {
      filename: string;
      type: "Path" | "Component";
      prefix: string;
    }[] = [
      { filename: "+page.svelte", type: "Path", prefix: "Page_" },
      { filename: "+layout.svelte", type: "Path", prefix: "Layout_" },
    ];

    documents.forEach((doc) => {
      if (
        managedExt.some((ext) => doc.filename.endsWith(ext)) &&
        doc.kind === "HoudiniFragment" &&
        doc.originalParsed.definitions[0].kind === "FragmentDefinition"
      ) {
        const fragName = doc.originalParsed.definitions[0].name.value;

        let isSpecial = false;
        for (const spe of specificPages) {
          if (doc.filename.endsWith(spe.filename)) {
            isSpecial = true;
            list.push({
              type: spe.type,
              filename: doc.filename,
              fragName,
              shouldStartWith:
                spe.type === "Path"
                  ? find_path_name(doc.filename)
                  : find_component_name(doc.filename),
            });
          }
        }

        // if not isSpecial, let's go in normal mode
        if (!isSpecial) {
          const componentName = find_component_name(doc.filename);
          list.push({
            type: "Component",
            filename: doc.filename,
            fragName,
            shouldStartWith: componentName,
          });
        }
      }
    });

    let nbOfWarnings = 0;
    list.forEach((frag) => {
      const shouldStartWithValid = frag.shouldStartWith.replaceAll("-", "_");

      if (!frag.fragName.startsWith(shouldStartWithValid)) {
        nbOfWarnings++;
        log.info(`⚠️  path: ${frag.filename}
   fragment: "${logYellow(frag.fragName)}" should start with "${logGreen(
          shouldStartWithValid
        )}"
`);
      }
    });

    if (nbOfWarnings > 0) {
      log.info(`⚠️  ${nbOfWarnings} Fragments could have better names.`);
    }
  },
});

export default plugin("houdini-plugin-lint", pluginHooks);

declare module "houdini" {
  interface HoudiniPluginConfig {
    "houdini-plugin-lint": HoudiniPluginLint;
  }
}

export type HoudiniPluginLint = {};
