import DesignIcon from '@/app/icons/design-icon';
import DevelopmentIcon from '@/app/icons/development-icon';
import searching from "../../public/job-search.jpg";
import jtt_logo from "../../public/jtt-logo.png";
import ojt_logo from "../../public/ojt-logo-full.png";
import sp_logo from "../../public/sp-logo.png";
import working from "../../public/tech-working.png";
import learning from "../../public/technician-learning.jpg";
import WebIcon from './icons/web-icon';
import MobileIcon from './icons/mobile-icon';

export const menu = [
  { name: "Home", href: "/" },
  { name: "Team", href: "#team" },
  { name: "Our Projects", href: "#projects" },
  { name: "About Us", href: "#about" },
  { name: "FAQ", href: "#faq" },
];

export const projects = [
  {
    name: "Academy",
    description: [
      "This learning platform is designed for individuals who are committed to continuous growth and professional excellence. Whether you are just beginning your journey or striving to refine your expertise, it provides the knowledge, skills, and resources needed to help you succeed.", 
      "With carefully curated courses, hands-on projects, and expert guidance, learners gain real-world insights that enhance their careers. The platform fosters a dynamic learning experience through interactive tools and a supportive community, enabling individuals to stay ahead in their fields.",  
      "Here, learning is not just about acquiring knowledge but about mastering skills and achieving excellence in every endeavor."
    ],

    stack: ["React", "Node", "AWS"],
    link: "/projects/academy",
    logo: sp_logo,
    background: learning,
  },
  {
    name: "OJT-Logbook",
    description: [
      "This time management platform is designed to help individuals stay organized, track their progress, and maximize productivity. Whether you’re managing personal goals, professional tasks, or long-term projects, it provides intuitive tools to structure your time effectively. ",
      "With features like progress tracking, goal setting, and smart reminders, users can stay focused and consistently move toward their objectives. The platform offers insightful analytics to help identify patterns, optimize schedules, and enhance efficiency. By fostering better habits and prioritizing tasks effectively, it empowers users to take control of their time, reduce stress, and achieve greater success in both work and life."
    ],
    stack: ["React", "Node", "AWS"],
    link: "/projects/ojt-logbook",
    logo: ojt_logo,
    background: working,
  },
  {
    name: "Join The Trades",
    description: [
      "The Future Is Skilled There's a significant gap in the skilled labor force. This means that industries are desperate for quality talent across all trades. ",
      "But why aren't many people choosing these careers? The main reason is that many high schoolers (and their parents!) aren't fully aware of the opportunities trade careers offer and lack guidance on how to begin!"
    ],
    stack: ["PHP"],
    link: "/projects/join-the-trades",
    logo: jtt_logo,
    background: searching,
  },
];

export const expertise = [
  { name: "Product Design", icon: DesignIcon },
  { name: "Web Application", icon: WebIcon },
  { name: "Mobile Application", icon: MobileIcon },
  { name: "Product Development", icon: DevelopmentIcon },
];
