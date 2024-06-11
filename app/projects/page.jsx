"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "SOA Research",
    title: "Integrating ML with Business Rule Triggers for Fraud Detection",
    description:
      "This project endeavors to deliver a comprehensive research paper outlining a framework for interpretable machine learning algorithms tailored for fraud detection in health insurance. Machine learning algorithms excel at constructing intricate models by discerning patterns in data, yet the risk of overfitting to training data necessitates rigorous testing by modelers and users. While certain validation practices for linear models apply to machine learning, the challenge of interpretability remains pronounced.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/projects/01/image.jpeg",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "CAS Research",
    title: "Using Interpretable Machine Learning Methods",
    description:
      "Health insurance fraud is a significant problem affecting the insurance industry, resulting in billions of dollars in losses annually. We propose a novel approach to fraud detection in health insurance by integrating machine learning (ML) models with business rule triggers to identify unusual patterns in claims data and flag them for further investigation. We have demonstrated that incorporating machine learning models with business rule triggers greatly enhanced the performance across all models.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Health Claims Analytics",
    title: "project 3",
    description:
      "The project involved collaborating with a Property and Casualty Insurer in India. The focus was on group health insurance scheme, covering approximately 800 million people. Our primary goal was to design a pricing methodology, real-time claims analytics dashboard and fraud detection for a state-level scheme and provide insights to optimize reinsurance capacity. The effort spanned two person-years and held significant value.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Crop Revenue Protection",
    title: "project 4",
    description:
      "The project involved collaborating with a department within the Government of India. Our objective was to design and a hedging mechanism that effectively protects revenue for farmers arising from price fluctuations. The effort spanned two person-years and held significant value.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Cancer Pool Pricing",
    title: "project 5",
    description:
      "The project centered around developing a medical indemnity insurance solution tailored for the Indian middle class. We meticulously analyzed various factors, including different cancer types, their incidence rates, and treatment costs, to determine an optimal pricing strategy. The resulting dashboard presents premium details, frequency, and severity across diverse options, considering variations in states and age groups. This comprehensive approach ensures effective risk management and affordability for policyholders.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Insurance Fraud Classifier",
    title: "project 6",
    description:
      "The project focused on constructing a robust fraud detection model for insurance claims. Specifically, we developed a machine learning-based solution that enables users to assess the probability of fraud in motor insurance claims. This model enhances the accuracy and efficiency of fraud detection processes within the insurance domain.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get curret slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline-primary dark:text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-primary dark:text-secondary group-hover:text-light dark:group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-light dark:text-accent"
                    >
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-black/20 dark:border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 ">
                {/* live project */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 dark:bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-primary dark:text-secondary text-3xl group-hover:text-light dark:group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/10 dark:bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-primary dark:text-secondary text-3xl group-hover:text-light dark:group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Project Link</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              {/* project description */}
              <p className="text-sm mb-9 text-primary dark:text-white/80">
                {project.description}
              </p>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          // objectFit="contain"
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-light hover:bg-light-hover dark:bg-accent dark:hover:bg-accent-hover text-secondary dark:text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
