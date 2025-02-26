import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1400px] m-auto">{children}</div>;
};
