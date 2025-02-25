import { ReactNode } from "react";

const PaddingContainer = ({ children }: { children: ReactNode }) => (
  <section className="px-10 py-20 lg:py-40">
    {children}
  </section>
);

export default PaddingContainer;
