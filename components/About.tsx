import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="pt-40 pb-20">
      <h2 className="h2">About me</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-3/5">
          <div className="bg-primary rounded-lg p-4">
            <p className="p">
              Hello! My name is Sava and I enjoy building things that live on
              the internet. I got here after
            </p>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li className="li">
                building a{" "}
                <a href="https://minilogues.net" className="text-link">
                  blog on Squarespace
                </a>
              </li>
              <li className="li">
                taking a{" "}
                <a
                  href="https://www.coursera.org/specializations/ui-ux-design"
                  className="text-link"
                >
                  CalArts course on UI/UX design
                </a>
              </li>
              <li className="li">
                taking{" "}
                <a
                  href="https://www.udemy.com/course/the-web-developer-bootcamp/?couponCode=ST22FS22724"
                  className="text-link"
                >
                  Colt Steele&apos;s web dev bootcamp
                </a>
                , and finally
              </li>
              <li className="li">
                getting a{" "}
                <a href="https://softuni.bg/curriculum" className="text-link">
                  software engineering degree
                </a>{" "}
                focused on web development with JavaScript from SoftUni.
              </li>
            </ul>
            <p className="p">
              While doing all of that, I also got a BA in{" "}
              <a
                href="https://www.aubg.edu/academics/bachelor-degrees/political-science-and-international-relations/"
                className="text-link"
              >
                Political Science
              </a>{" "}
              and{" "}
              <a
                href="https://www.aubg.edu/academics/bachelor-degrees/journalism-and-mass-communications/"
                className="text-link"
              >
                Journalism
              </a>
              , a MA in{" "}
              <a
                href="https://www.sciencespo.fr/ecole-affaires-publiques/en/academics/masters/master-public-policy/"
                className="text-link"
              >
                Public Policy
              </a>
              , and 4 years of experience{" "}
              <a
                href="https://www.aubg.edu/student-life/residential-life-housing/"
                className="text-link"
              >
                managing an international team of 14
              </a>
              .
            </p>
            <p className="p">
              Here is what I&apos;ve been working with recently:
            </p>
          </div>
          <ul className="flex flex-wrap my-6 list-none [&>li]:mt-2">
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              HTML
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              CSS
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              JavaScript
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              TypeScript
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              React
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              Angular
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              Firebase
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              Tailwind
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              Python
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              NumPy
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              pandas
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              matplotlib
            </li>
            <li className="inline-flex border border-gray-300 rounded-md px-2 py-1 mr-2">
              seaborn
            </li>
          </ul>
        </div>
        <div className="w-full md:w-2/5 md:ml-3 rounded-lg overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Photo of Sava Stoyanov"
            className="rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
