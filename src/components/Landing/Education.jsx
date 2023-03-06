import { education } from "../../data/dataEducation";
import { motion , useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div id="time-line" ref={ref} className="mt-10 mx-40 w-screnn">
        <div className="flex mx-5 md:mx-10 mt-30 md:mt-10 justify-start">
          <div className="mx-5 md:mx-10">
            <div
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
                <h2 className="md:-mx-4 md:pl-8 md:pr-8 pt-4 pb-4 text-2xl text-[#63d0c7] sm:text-4xl xl:text-5xl">
                  Formación <br /> <span className="font-bold">Academica</span>
                </h2>
              </div>
            </div>
            <div>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {education.map((element) => (
                <li className="mx-5 my-1 md:mb-5 md:ml-4" key={element.id}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {element.date}
                  </time>
                  <h3 className="text-xl font-semibold text-teal-500 dark:text-white">
                    {element.carrer}
                  </h3>
                  <h5 className="text-lg font-semibold text-teal-300 dark:text-white">
                    {element.institute}
                  </h5>
                  <p className=" hidden sm:block sm:mb-4 text-base text-justify font-normal text-gray-500 dark:text-gray-400">
                    {element.type}
                  </p>
                </li>
              ))}
            </ol>
            </div>
          <div  ref={ref} className="abg-orange-400 w-fit rounded-[6rem] mx-20 mt-20 overflow-hidden rounded-tl-none rounded-br-none">
          <motion.div
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            delay :5, 
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                x: 0,
                y: 0,
                scale:0.8,
              }}
              className="flex w-96 flex-wrap"
            >
          <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  duration: 4,
                  ease: "linear",
                  delay:3,
                }}
                className="h-48 w-1/2 rounded-full rounded-br-none bg-[#18C4B8]"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  duration: 4,
                  ease: "linear",
                  delay: 2,
                }}
                className="rounded-[6rem] h-48 w-1/2 rounded-tl-none rounded-br-none bg-purple-400"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  duration: 4 ,
                  ease: "linear",
                  delay: 3,
                }}
                className="h-48 w-1/2 rounded-full rounded-b-none rounded-br-none bg-[#FBCA1B]"
              ></motion.div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  duration: 4,
                  ease: "linear",
                  delay: 3,
                }}
                className="h-48 w-1/2 rounded-full rounded-t-none rounded-br-none bg-[#98EFED]"
              ></motion.div>
              </motion.div>
              </div>
          </div>
          <div>
          </div>
        </div>
    </>
  );
};

export default Education;