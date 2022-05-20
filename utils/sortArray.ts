const sortedArray = (arr: any[], key: string, from: "asc" | "desc") => {
  if (from === "asc") {
    arr.sort((a: any, b: any) => a[key] - b[key]);
  } else {
    arr.sort((a: any, b: any) => b[key] - a[key]);
  }
  return arr;
};
export default sortedArray;
