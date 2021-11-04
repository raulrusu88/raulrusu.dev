import link from "next/link";
import { Tip } from "../Tip";

interface JobDescriptionProps {
  description: string;
  onHold?: string;
  stack?: string;
  linkTitle?: string;
  linkSrc?: string;
}

const JobDescription = ({
  description,
  stack,
  onHold,
  linkTitle,
  linkSrc,
}: JobDescriptionProps) => {
  return (
    <div className="mt-5 flex flex-col">
      {description && !linkTitle && <p>&bull; {description}</p>}
      {linkTitle && (
        <p>
          &bull; {description} -{" "}
          <a href={linkSrc} target="_blank" className="underline text-blue-900">
            {linkTitle}
          </a>{" "}
        </p>
      )}
      <small>
        <span className="font-semibold">Stack</span>: {stack}
      </small>
      {onHold && <small className="text-red-300">{onHold}</small>}
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="flex layout">
      <div className="flex space-x-10 justify-between w-full py-16">
        <div className="text-center w-1/2">
          <div>
            <h1 className="text-4xl">Experience</h1>
            <div className="flex flex-col mt-5">
              <h3>Full-Stack Developer</h3>
              <p>Uptrust CyberSec</p>
              <small>Feb 2020 - Present</small>
              <JobDescription
                description="Redesigned and implemented the company's website"
                stack="React, NextJS, Styled-Components, TypeScript, Contentful, AWS S3 (storing images), AWS CloudFront (CDN) and SendGrid"
              />
              <JobDescription
                description="Worked as a solo developer on a Management Web Application for Building Managers, where they could manage each apartment facility, payments and residents."
                stack="React, Styled-Components, Redux, Node.js, Express.js, TypeScript, Prisma, PostgreSQL, Docker"
                onHold="Worked on this project until recently when it was put on hold"
              />
              <JobDescription description="Involved in the hiring process for the Mobile Game Development Company (LehBrothers S.R.L)" />
              <JobDescription
                description="Implemented the login system and database for a Unity Social Game"
                linkTitle="DrinkHub"
                linkSrc="https://play.google.com/store/apps/details?id=com.lehbrothers.drinkhub"
                stack="C#, Firebase, Unity"
              />
              <JobDescription
                description="Helped on the Game Mechanics and Backend decisions for a hyper-casual 3D Game"
                linkTitle="Astronaut in the Void"
                linkSrc="https://play.google.com/store/apps/details?id=com.LehBrothers.AstroInTheVoid"
                stack="C#, Firebase, Unity"
              />
            </div>
          </div>
        </div>
        <div className="flex w-2/2">
          <div className="grid grid-cols-3 space-x-3">
            <Tip text="React" />
            <Tip text="React" />
            <Tip text="React" />
            <Tip text="React" />
            <Tip text="React" />
          </div>
        </div>
      </div>
    </div>
  );
};
