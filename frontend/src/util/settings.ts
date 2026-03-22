export const getFileColor = (type: string) => {
  switch (type) {
    case "pdf":
      return "#ef5350";
    case "doc":
      return "#42a5f5";
    case "xls":
      return "#66bb6a";
    case "ppt":
      return "#ffa726";
    default:
      return "#90a4ae";
  }
};
