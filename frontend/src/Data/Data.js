// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import {  UilExclamationTriangle,UilCheckCircle,UilHourglass } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import target from '../imgs/target.gif'
import danger from "../imgs/danger.gif"
import download from "../imgs/download.gif"
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    
  },
  {
    icon: UilClipboardAlt,
    heading: "Report",
    link: "/test",
  },
  {
    icon: UilUsersAlt,
    heading: "User",
    link: "/test",
  },
  {
    icon: UilPackage,
    heading: 'Asset',
    link: "/test",
  },
  {
    icon: UilChart,
    heading: 'Inventory',
    link: "/test",
  },
  {
    icon: UilEstate,
    heading: "Permissions",
    link: "/test",
  },
  {
    icon: UilChart,
    heading: 'Analytics',
    link: "/test",
  },
  
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Reports",
    color: {
      // backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      // boxShadow: "0px 10px 20px 0px #e0c6f5",
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
      
    },
    barValue: 70,
    value: "250",
    png: UilExclamationTriangle,
    series: [
      {
        name: "Reports",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Resolved",
    color: {
      backGround: "linear-gradient(180deg, #90EE9D 0%, #90EE90 100%)",
      boxShadow: "0px 10px 20px 0px #90EE97",
    },
    barValue: 80,
    value: "14,270",
    png: UilCheckCircle,
    series: [
      {
        name: "Resolved",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Pending",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilHourglass,
    series: [
      {
        name: "Pending",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: target,
    name: "Mark Jacky",
    noti: "has fixed the issue on QA250 LAB.",
    time: "25 seconds ago",
  },
  {
    img: danger,
    name: "Stive Jobs",
    noti: "has created a new issue on QM90 LAB.",
    time: "30 minutes ago",
  },
  {
    img: download,
    name: "Nick Feury",
    noti: "has requested a new Software requiremtent.",
    time: "2 hours ago",
  },
];
