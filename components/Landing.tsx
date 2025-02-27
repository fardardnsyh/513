"use client";

import { Caveat } from "next/font/google";
import { MdArrowOutward } from "react-icons/md";
import { WavyBackground } from "./ui";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariantsXl,
  fadeInAnimationVariantsXr,
  fadeInAnimationVariantsY,
} from "@/utils/framer-animations";
import { TransitionButton } from ".";

const caveat = Caveat({ subsets: ["latin"] });

const Landing = () => {
  return (
    <div className="w-screen overflow-hidden">
      <WavyBackground />
      <div className="pt-44 sm:pt-28 py-16 sm:pl-48 px-4 flex flex-col gap-8 sm:gap-14">
        <motion.div
          variants={fadeInAnimationVariantsY}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="relative"
        >
          <h2
            className={`${caveat.className} absolute -top-20 sm:-top-16 -left-4 sm:-left-6 text-violet-700 text-4xl leading-8 sm:leading-7 transform origin-center -rotate-12`}
          >
            Hey, I’m <span className="block">Rishabh Singh</span>
          </h2>
          <h1 className="text-5xl sm:text-[120px] sm:leading-[100px] tracking-tight font-medium">
            Full-Stack Explorer Unraveling the Wonders of the Code Universe.
          </h1>
        </motion.div>
        <div className="flex sm:flex-row flex-col-reverse gap-6 justify-between">
          <motion.div
            variants={fadeInAnimationVariantsXl}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="sm:self-end"
          >
            <TransitionButton
              href="/contact"
              className="flex gap-3 items-center justify-center sm:w-fit h-fit py-4 px-6 rounded-full border border-black dark:border-white uppercase hover:bg-black/[0.2] dark:hover:bg-white/[0.2] transition-all ease-in-out"
            >
              <h1 className="text-xl sm:text-2xl tracking-tighter uppercase">
                Let’s connect
              </h1>
              <MdArrowOutward size={28} />
            </TransitionButton>
          </motion.div>
          <motion.h2
            variants={fadeInAnimationVariantsXr}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className="uppercase px-3 max-w-md text-sm sm:text-base text-justify"
          >
            Crafting digital solutions with expertise in full stack Mern, Mean
            development, as well as mobile app using React Native, learning
            UI/UX design.
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
