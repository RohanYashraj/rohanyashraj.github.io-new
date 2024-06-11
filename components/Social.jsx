import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaResearchgate } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/RohanYashraj",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/rohanyashraj/",
  },
  {
    icon: <FaResearchgate />,
    path: "https://www.researchgate.net/profile/Rohan_Gupta54",
  },
  {
    icon: <BiLogoGmail />,
    path: "mailto:rohanyashraj@gmail.com",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
