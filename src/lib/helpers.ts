export function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return str;
}

export function splitArray<T>(arr: T[], chunks: number): T[][] {
  return Array.from({ length: chunks }, (_, i) =>
    arr.slice(
      Math.floor((i * arr.length) / chunks),
      Math.floor(((i + 1) * arr.length) / chunks)
    )
  );
}
