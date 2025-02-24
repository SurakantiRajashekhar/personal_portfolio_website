import React from "react";
import { IoMdMenu } from "react-icons/io";
import { GoMail } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";
import { TbBrandLeetcode } from "react-icons/tb";
import { Link } from "react-router-dom";

const Icons = () => {
  return (
    <div className="flex gap-6">
      <a
        href="mailto:rajashekharsurakanti@gmail.com"
        className=" mt-6 p-2 hover:bg-gray-800 rounded-full transition-colors cursor-pointer"
        title="Email"
      >
        <GoMail className="h-8 w-8" />
      </a>
      <a
        href="https://github.com/SurakantiRajashekhar"
        target="_blank"
        rel="noopener noreferrer"
        title="Github"
        className=" mt-6 p-2 hover:bg-gray-800 rounded-full transition-colors"
      >
        <FaGithub className="h-8 w-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/rajashekharsurakanti"
        target="_blank"
        rel="noopener noreferrer"
        title="Linkedin"
        className="mt-6 p-2 hover:bg-gray-800 rounded-full transition-colors"
      >
        <PiLinkedinLogo className="h-8 w-8" />
      </a>
      <a
        href="https://leetcode.com/Rajashekhar55/"
        target="_blank"
        rel="noopener noreferrer"
        title="Leetcode"
        className="mt-6 p-2 hover:bg-gray-800 rounded-full transition-colors"
      >
        <TbBrandLeetcode className="h-8 w-8" />
      </a>
    </div>
  );
};

export default Icons;
