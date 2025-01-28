import sp_logo from "../../public/sp-logo.png";
import ojt_logo from "../../public/ojt-logo-full.png";
import jtt_logo from "../../public/jtt-logo.png";
import learning from "../../public/technician-learning.jpg";
import working from "../../public/tech-working.png";
import searching from "../../public/job-search.jpg";

export const menu = [
  { name: "Home", href: "/#home" },
  { name: "Team", href: "/#team" },
  { name: "Our Projects", href: "/#projects" },
  { name: "FAQ", href: "/#faq" },
];

export const projects = [
  {
    name: "Academy",
    description: "Learning platform for people who are thriving for excellence",
    stack: ["React", "Node", "AWS"],
    link: "/projects/academy",
    logo: sp_logo,
    background: learning,
  },
  {
    name: "OJT-Logbook",
    description: `"Time management platform that help people to track their progress"`,
    stack: ["React", "Node", "AWS"],
    link: "/projects/ojt-logbook",
    logo: ojt_logo,
    background: working,
  },
  {
    name: "Join The Trades",
    description:
      "The thing we do not know much about but we will figure it out",
    stack: ["PHP"],
    link: "/projects/join-the-trades",
    logo: jtt_logo,
    background: searching,
  },
];

export const expertise = [
  "Product Design",
  "Web Application",
  "Mobile Application",
  "Product Development",
];
