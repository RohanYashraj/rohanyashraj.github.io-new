"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9593256368",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rohanyashraj@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Gurugram 122002, India",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-secondary border-2 dark:border-none border-light dark:bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-light dark:text-accent">
                Let&apos;s connect
              </h3>
              <p className="text-primary dark:text-white/60">
                Feel free to reach out for collaborations, inquiries, or just to
                say hello!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstame" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>

              {/* select */}
              {/* <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Dev</SelectItem>
                      <SelectItem value="cst">Frontend</SelectItem>
                      <SelectItem value="mst">Backend</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select> */}

              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
              />
              {/* button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] border dark:border-none border-light bg-secondary dark:bg-[#27272c] text-light dark:text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-light dark:text-white/60">
                        {item.title}
                      </p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
