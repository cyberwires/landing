import { StaticImageData } from "next/image";

export interface ProjectData {
  name: string;
  description: string[];
  stack: string[];
  link: string;
  logo: StaticImageData;
  background: StaticImageData;
}
