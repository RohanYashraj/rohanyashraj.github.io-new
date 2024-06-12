"use client";

import { FaPython, FaRProject, FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import Timeline from "@/components/Timeline";

// experience data
const experience = {
  icon: "assets/resume/badge.svg",
  title: "Work Experience",
  description:
    "Explore my professional journey through diverse roles and impactful projects.",
  items: [
    {
      company: "Accenture",
      position: "Actuarial Team Lead",
      duration: "Jul 2023 - present",
    },
    {
      company: "RSA",
      position: "Actuarial Consultant",
      duration: "Dec 2022 - Jul 2023",
    },
    {
      company: "SwissRe",
      position: "Actuarial Analyst",
      duration: "Jun 2021 - Dec 2022",
    },
    {
      company: "Tech Actuarial",
      position: "Actuarial Consultant",
      duration: "Jun 2019 - Jun 2021",
    },
    {
      company: "Casualty Actuarial Society",
      position: "CAS Summer Internship Program",
      duration: "Jun 2020 - Aug 2020",
    },
    {
      company: "Tech Actuarial",
      position: "Research Associate",
      duration: "Jun 2017- Jun 2019",
    },
  ],
};

// education data
const education = {
  icon: "assets/resume/badge.svg",
  title: "My Education",
  description: "Learn about my academic background and qualifications.",
  items: [
    {
      institution: "IFoA",
      degree: "AIA",
      duration: "2021 - Present",
    },
    {
      institution: "SOA",
      degree: "ASA",
      duration: "2021 - Present",
    },
    {
      institution: "SSSIHL",
      degree: "PhD, Actuarial Science",
      duration: "Jun 2019 - Nov 2021",
    },
    {
      institution: "SSSIHL",
      degree: "M.Sc. Mathematics",
      duration: "Jun 2017 - Jun 2019",
    },
    {
      institution: "SSSIHL",
      degree: "B.Sc.(Hons) Mathematics",
      duration: "Jun 2017 - Jun 2019",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Discover the array of skills and expertise I bring to the table.",
  skillList: [
    {
      icon: <FaPython />,
      name: "Python",
      progress: "70",
    },
    {
      icon: <FaRProject />,
      name: "R",
      progress: "80",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
      progress: "50",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      progress: "50",
    },
  ],
};

// about data
const about = {
  title: "About Me",
  description: "Here is all the information you need to contact me!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rohan Yashraj Gupta",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 9593256368",
    },
    {
      fieldName: "Experiece",
      fieldValue: "7 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "rohanyashraj@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className=" mx-auto xl:mx-0">{experience.description}</p>
                <Timeline />
                <ScrollArea className="h-full pb-10">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="border dark:border-none border-light dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-light dark:text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-light dark:bg-accent"></span>
                            <p className="dark:text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className=" mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-full pb-10">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="border dark:border-none border-light dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-light dark:text-accent">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-light dark:bg-accent"></span>
                            <p className="dark:text-white/60">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className=" text-primary dark:text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] border dark:border-none border-primary dark:bg-[#232329] rounded-xl group">
                              <div className="flex justify-center items-center p-4 gap-4 tect-light dark:text-secondary group-hover:text-light dark:group-hover:text-accent transition-all duration-300">
                                <div className="text-6xl">{skill.icon}</div>
                                <Progress value={skill.progress} />
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-primary dark:text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-{620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start xl:justify-start gap-4"
                      >
                        <span className="text-light dark:text-white/60">
                          {item.fieldName}
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
