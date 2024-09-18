import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";
import { useRouter } from "next/router";

const Socials = ({ className }) => {
  const router = useRouter();
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>

      ))}
      <Button
        onClick={() =>
          router.push("/resume")
        }>
        Resume
      </Button>
    </div>
  );
};

export default Socials;
