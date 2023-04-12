export const remove_file_extension = (filename: string) => {
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return filename;
  }
  return filename.substring(0, lastDotIndex);
};

export const find_component_name = (fullpath: string) => {
  const splited = fullpath.split("/");
  return remove_file_extension(splited[splited.length - 1]);
};

export const find_path_name = (fullpath: string, position_from_end = 0) => {
  const splited = fullpath.split("/");
  let lastPart = splited[splited.length - 1];
  if (position_from_end === 0 || lastPart.includes("[")) {
    if (position_from_end === 0) {
      lastPart = find_path_name(
        splited.slice(0, splited.length - 1).join("/"),
        position_from_end + 1
      );
    } else {
      lastPart =
        find_path_name(
          splited.slice(0, splited.length - 1).join("/"),
          position_from_end + 1
        ) +
        "_" +
        lastPart.replaceAll("[", "").replaceAll("]", "");
    }
  }
  return lastPart;
};
