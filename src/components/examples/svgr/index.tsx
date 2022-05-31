import React from "react";
import { MoonIcon, SunIcon, Vercel } from "../../icons";

export const SvgrExample: React.FC = () => {
  return (
    <div>
      <MoonIcon width={32} height={32} color="black" />
      <SunIcon width={32} height={32} color="black" />
      <Vercel width={32} height={32} color="black" />
    </div>
  );
};
