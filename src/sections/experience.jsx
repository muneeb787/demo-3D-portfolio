// @flow strict

import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../utils/helper/animation-lottie";
import GlowCard from "../utils/helper/glow-card";
import experience from '../utils/lottie/code.json';
import heroSvg from "../utils/hero.svg"
import blurSvg from "../utils/blur-23.svg"

const experiences = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: "Techanzy Limited",
    duration: "(Jan 2022 - Present)"
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "IT Genesis",
    duration: "(Jun 2021 - Jan 2022)"
  },
  {
    id: 3,
    title: "Self Employed",
    company: "Code and build something in everyday.",
    duration: "(Jan 2018 - Present)"
  }
]


function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 lg:my-24">

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#0756755d]"></span>
          <span className="bg-[#0756755d] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#0756755d]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="p-3 relative">
                      {/* <img
                        src={blurSvg}
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      /> */}
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-green-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {experience.title}
                          </p>
                          <p className="text-sm sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>

          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;