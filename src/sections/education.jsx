// @flow strict

import { BsPersonWorkspace } from "react-icons/bs";

import lottieFile from '../utils/lottie/study.json';
import heroSvg from "../utils/hero.svg"
import blurSvg from "../utils/blur-23.svg"

import AnimationLottie from "../utils/helper/animation-lottie";
import GlowCard from "../utils/helper/glow-card";

const educations = [
  {
    id: 1,
    title: "BS Computer Science",
    duration: "2021 - Present",
    institution: "The Superior University",
  },
  {
    id: 2,
    title: "Intermediate",
    duration: "2018 - 2020",
    institution: "Govt. Degree College Muridke",
  },
  {
    id: 3,
    title: "Matriculation",
    duration: "2016 - 2018",
    institution: "JInnah Ideal High School",
  }
]

function Education() {
  return (
    <div id="education" className="relative z-50 my-12 lg:my-24 border-[#25213b]">
      {/* <img
        src={heroSvg}
        alt="Hero"
        className="absolute top-0 -z-10"
      /> */}

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#0756755d]"></span>
          <span className="bg-[#0756755d] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#0756755d]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <img
                        src={blurSvg}
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-green-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;