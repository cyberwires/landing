import DesignIcon from '@/app/icons/design-icon';
import DevelopmentIcon from '@/app/icons/development-icon';
import academy from "../../public/academy-project2.png";
import jtt_logo from "../../public/jtt-logo.png";
import jtt from "../../public/jtt-project.png";
import ojt_logo from "../../public/ojt-logo-full.png";
import ojt from "../../public/ojt-project.png";
import sp_logo from "../../public/sp-logo.png";
import dvs_logo from "../../public/dvs-logo.png";
import dvs from "../../public/dvs-project.png";
import MobileIcon from './icons/mobile-icon';
import WebIcon from './icons/web-icon';

export const menu = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Working process", href: "/#working-process" },
  { name: "Our Projects", href: "/#projects" },
  { name: "FAQ", href: "/#faq" },
];

export const projects_menu = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Working process", href: "/#working-process" },
  { name: "Our Projects", href: "/#projects" },
  { name: "FAQ", href: "/#faq" },
];
export const achievements = [
  { value: "17", label: "Successful Projects" },
  { value: "150+", label: "Expert Consultations" },
  { value: "11", label: "Skilled Professionals" },
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
    background: academy,
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
    background: ojt,
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
    background: jtt,
  },
  {
    name: "Custom Repair Service",
    description: [
      "Interactive admin platform for auditing car maintenance and providing various types of car care and services. The admin panel helps managers maintain a high level of communication with customers and provide timely feedback and report the status of the car.",
      "In addition, the platform provides the ability to view the service history, which in turn allows you to get the entire and tory of the car service when sold to a new owner."
    ],
    stack: ["React", "Node", "AWS"],
    link: "/projects/custom-repair-service",
    logo: dvs_logo,
    background: dvs,
  },
];

export const expertise = [
  { name: "Product Design", icon: DesignIcon, description: "We design solutions that meet your business goals, providing the perfect combination of functionality, scalability, and innovation." },
  { name: "Web Application", icon: WebIcon, description: "We build fast, scalable, and secure web applications using the latest technologies, ensuring an exceptional user experience across all devices." },
  { name: "Mobile Application", icon: MobileIcon, description: "Our mobile app development services deliver intuitive and high-performance applications for both iOS and Android platforms, tailored to your business needs." },
  { name: "Product Development", icon: DevelopmentIcon, description: "From concept to launch, we provide end-to-end product development, ensuring a seamless and efficient process with cutting-edge technology and best practices." },
];
