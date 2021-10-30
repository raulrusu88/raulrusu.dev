import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Raul Rusu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-main">
        {/* <Header /> */}
        <div className="w-full h-screen flex justify-center items-center flex-col relative">
          <small className="absolute left-0 -rotate-90 text-blueGray-900 filter blur-md hover:blur-none transition cursor-default">
            This is a placeholder, as the main website is in the works.
          </small>
          <small className="absolute right-0 rotate-90 text-blueGray-900 filter blur-md hover:blur-none transition cursor-default">
            This is a placeholder, as the main website is in the works.
          </small>
          <h1 className="text-blueGray-800">Raul Rusu</h1>
          <small>Cluj-Napoca, Romania</small>
          <div className="w-1/2 flex flex-col text-center mt-5 ">
            <h3>Education</h3>
            <p>Technical University Cluj-Napoca</p>
            <small>
              Electronics, Telecommunications and Information Technology
            </small>
            <small>2014 - 2015</small>
            <span className="py-2" />
            <h3>Stack</h3>
            <p className="w-2/4 self-center">
              React, NextJS, NodeJS, ExpressJS, TypeScript, Styled-Components,
              PostgreSQL, Firebase, AWS - basics
            </p>
            <span className="py-2" />
            <h3>Experience</h3>
            <p>Full-Stack Developer</p>
            <small>Feb 2020 - Present</small>
            <p>Cyber Security EMEA Partnership Manager</p>
            <small>Sept 2020 - Feb 2021</small>
            <span className="py-2" />
            <p className="text-blueGray-700">
              Contact me via email -{" "}
              <a
                href="mailto:raulrusu46@gmail.com"
                className="text-blueGray-500 hover:text-blueGray-800 transition"
              >
                raulrusu46@gmail.com
              </a>
            </p>
            {/* <div className="flex flex-col justify-center items-center w-full">
              <h2 className="text-blueGray-800">Stack</h2>
              <div className="mt-3 flex justify-between">
                <div className="w-full flex justify-start flex-col">
                  <p>React + NextJS</p>
                  <p>Node.js + Express.JS</p>
                  <p>TypeScript</p>
                  <p>Styled-Components</p>
                </div>
                <div className="w-full flex  flex-col place-items-end">
                  <p>PostgreSQL</p>
                  <p>Firebase</p>
                  <p>AWS - basics</p>
                </div>
              </div>
            </div>
            <span className="w-1 bg-blueGray-700 h-full" />
            <div className="flex flex-col  items-center w-full">
              <h2 className="text-blueGray-800">Education</h2>
              <h3>Technical University Cluj-Napoca</h3>
              <h4>
                Electronics, Telecommunications and Information Technology
              </h4>
              <small>2014 - 2015</small>
            </div>
          </div>
          <div className="flex w-1/2 justify-between mt-6 text-blueGray-800">
            <div className="flex flex-col justify-center items-center w-full text-center">
              <h2 className="text-blueGray-800">Experience</h2>
              <div className="flex justify-between mt-5">
                <div className="mt-3 w-full">
                  <h3>Full-Stack Developer</h3>
                  <small>Uptrust CyberSec | Feb 2020 - Present</small>
                  <p className="mt-3">
                    &bull; Redesigned and implemented the company's website
                    using React, NextJS, Style-Components, TypeScript,
                    Contentful, AWS S3 for storing website images, AWS
                    CloudFront as CDN, and SendGrid.
                  </p>
                  <p className="mt-3">
                    &bull; Worked as a solo developer on a Management Web
                    Application for Building Managers, where they could manage
                    each apartament facility, payments, residents. The
                    technology used in this project was: React, React Router,
                    Styled-Components, Redux, NodeJS, ExpresJS, TypeScript,
                    Prisma, PostgreSQL. <br />I worked on this porject until
                    recently when the project was put on hold.
                  </p>
                  <p className="mt-3">
                    &bull; Involved in the hiring process for the Mobile Game
                    Development Company (LehBrothers S.R.L, which is a
                    subsidiary company of Uptrust CyberSec)
                  </p>
                  <p className="mt-3">
                    &bull; Helped implement the login system and database for a
                    Unity Social Game with C# and Firebase (
                    <a
                      href="https://play.google.com/store/apps/details?id=com.lehbrothers.drinkhub"
                      target="_blank"
                      className="underline hover:text-blueGray-400 transition "
                    >
                      DrinkHub
                    </a>
                    )
                  </p>
                  <p className="mt-3">
                    &bull; Helped on the Game Mechanics and Backend decisions
                    for{" "}
                    <a
                      href="https://play.google.com/store/apps/details?id=com.LehBrothers.AstroInTheVoid"
                      target="_blank"
                      className="underline hover:text-blueGray-400 transition "
                    >
                      Astronaut in the Void
                    </a>{" "}
                    a hyper-casual 3D game, made with C#, Unity Game Engine and
                    Firebase
                  </p>
                </div>
                <span className="w-1 bg-blueGray-700 h-full mx-2 mt-3" />
                <div className="w-full flex flex-col items-center mt-3">
                  <h3>Cyber Security EMEA Partnership Manager</h3>
                  <small>Uptrust CyberSec | Sept 2020 - Feb 2021</small>
                  <p className="mt-3">
                    &bull; Helped seucre a Distributor partnership with
                    ProDevice a Polish - Data Deletion from Data Carriers
                    Company
                  </p>
                  <p className="mt-3">
                    &bull; Helped secure a resellers partnership with
                    DeepInstinct - Threat Prevention platform.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
