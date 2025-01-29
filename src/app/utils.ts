import sp_logo from "../../public/sp-logo.png";
import ojt_logo from "../../public/ojt-logo-full.png";
import jtt_logo from "../../public/jtt-logo.png";
import learning from "../../public/technician-learning.jpg";
import working from "../../public/tech-working.png";
import searching from "../../public/job-search.jpg";

export const menu = [
  { name: "Home", href: "/" },
  { name: "Team", href: "#team" },
  { name: "Our Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
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
      "The Future Is Skilled There's a significant gap in the skilled labor force. This means that industries are desperate for quality talent across all trades. But why aren't many people choosing these careers? The main reason is that many high schoolers (and their parents!) aren't fully aware of the opportunities trade careers offer and lack guidance on how to begin!",
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
