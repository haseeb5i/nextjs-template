import React, { ReactNode } from "react";

export const getId = () => {
  return Math.random().toString(32).slice(2, 10);
};

export const hasChild = (
  children: ReactNode | undefined,
  child: React.ElementType
): boolean => {
  const types = React.Children.map(children, (item) => {
    if (!React.isValidElement(item)) return null;
    return item.type;
  });

  return (types || []).includes(child);
};

export const pick = <Obj extends { [key: string]: any }, Key extends keyof Obj>(
  props: Key[],
  obj: Obj
): Pick<Obj, Key> =>
  props.reduce((acc, prop) => {
    acc[prop] = obj[prop];
    return acc;
  }, {} as Pick<Obj, Key>);

export const isBrowser = (): boolean => {
  return Boolean(
    typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
  );
};

export const flattenArray = (arr: any[]): any[] => {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    []
  );
};
