import Header from "@/app/components/header/header";
import { projects_menu } from "@/app/utils";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header menu={projects_menu} />
      {children}
    </>
  );
}
