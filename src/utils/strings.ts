export const kebabCase = (text: string) => {
  return text
    ?.replace?.(/([a-z])([A-Z])/g, "$1-$2")
    ?.replace?.(/\s+/g, "-")
    .toLowerCase?.();
};

export const includes = (text?: string, search?: string[]) => {
  return search?.some((item) => text?.includes(item));
};

export const padZero = (str: string, len?: number) => {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};
