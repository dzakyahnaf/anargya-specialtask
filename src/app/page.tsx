"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center"
      style={{
        background: "linear-gradient(145deg, #000000 40%, #3CF167 200%)",
      }}
    >
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-10 p-6 md:gap-8">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.png"
            alt="Header background"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>

        {/* Blur rectangle */}
        <div
          className="absolute z-0"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "min(90vw, 1240px)",
            height: "min(50vh, 425px)",
            background: "rgba(0, 0, 0, 0.90)",
            filter: "blur(90px)",
          }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-5xl text-center text-5xl font-bold md:text-6xl lg:text-7xl"
          style={{
            background:
              "linear-gradient(to bottom, #000000 -100%, #3CF167 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WHO ARE WE?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative z-10 max-w-5xl text-center text-xl text-white md:text-2xl"
        >
          Anargya ITS EV Team is an electric vehicle research team dedicated to
          the research and development of electric vehicles, as well as
          participating in FSAE (Formula Society of Automotive Engineers)
          competitions, in particular and other local and international
          competitions, in general. Our team consists of highly determined and
          enthusiastic individuals from various academic backgrounds at the
          Sepuluh Nopember Institute of Technology.
        </motion.p>
      </div>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "-100px" }}
        className="bg-gradient-to-r from-green-100 to-green-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-5xl mt-32 md:mt-40"
      >
        ANARGYA ITS EV CAR
      </motion.h1>
      <motion.div
        id="about-us"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-100px" }}
        className="relative flex h-fit w-full flex-col items-center justify-center gap-2 bg-black p-6 pb-24 pt-12 md:gap-[50px] md:pb-64 md:pt-24 scroll-smooth"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/bg-home.png"
            alt="Home background"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="relative z-10 aspect-[15/8] w-[60%] rounded-2xl md:rounded-3xl overflow-hidden"
        >
          <Image
            src="/images/car.png"
            alt="Car showcase"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 60vw, 60vw"
            priority
          />
        </motion.div>
      </motion.div>

      <div className="flex h-fit w-full flex-col items-center justify-center gap-16 bg-black pb-20 md:gap-[50px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-100px" }}
          className="bg-gradient-to-r from-green-100 to-green-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-5xl"
        >
          WHAT THEY SAY ABOUT FSAE JOURNEY?
        </motion.h1>
        <div className="flex flex-col items-center justify-center gap-4 px-6 md:flex-row md:gap-8 md:px-[100px] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ margin: "-100px" }}
            className="relative flex flex-shrink-0 items-center justify-center"
          >
            <Image
              src="/images/driver-2.png"
              alt="Team photo"
              width={192}
              height={192}
              className="z-10 h-28 w-28 rounded-full object-cover md:h-60 md:w-60"
            />
            <div className="absolute mb-8 mr-8 h-20 w-20 rounded-full bg-green-500 blur-xl md:mr-36 md:mt-36 md:h-32 md:w-32 md:blur-3xl"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ margin: "-100px" }}
            className="flex max-w-[400px] flex-1 flex-col-reverse gap-4 md:flex-col md:px-0 lg:max-w-2xl"
          >
            <p className="text-md font-regular text-center text-white md:text-left md:text-lg lg:text-xl">
              It was more than just a competition. It was a battle of
              persistence, innovation, and teamwork. The intense heat of the
              track, the roar of engines, and the cheers from the paddock all
              became part of a journey that tested our limits and strengthened
              our unity. Through every struggle and triumph, FSAE Japan 2025
              became a symbol of how far passion can take us.
            </p>
            <div className="flex flex-col text-center md:text-left">
              <p className="text-sm font-bold text-white md:text-lg">
                Charles Leclerc, Scuderia Ferrari
              </p>
              <p className="font-regular text-sm text-white md:text-lg">
                Formula 1 Driver
              </p>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-6 md:flex-row-reverse md:gap-12 md:px-[100px]">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ margin: "-100px" }}
            className="relative flex flex-shrink-0 items-center justify-center"
          >
            <Image
              src="/images/driver-1.png"
              alt="Team photo"
              width={192}
              height={192}
              className="z-10 h-28 w-28 rounded-full object-cover md:h-60 md:w-60"
            />
            <div className="absolute mb-8 ml-8 h-20 w-20 rounded-full bg-green-500 blur-xl md:ml-36 md:mt-36 md:h-32 md:w-32 md:blur-3xl"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ margin: "-100px" }}
            className="flex max-w-[400px] flex-1 flex-col-reverse gap-4 md:flex-col md:px-0 lg:max-w-2xl"
          >
            <p className="text-md font-regular text-center text-white md:text-right md:text-lg lg:text-xl">
              The anticipation before the start, the rush during every lap, and
              the cheers at the finish told one story. A story of perseverance,
              precision, and passion that united everyone on the team. FSAE
              Japan 2025 captured the spirit of engineering and the thrill of
              human achievement.
            </p>
            <div className="flex flex-col text-center md:text-right">
              <p className="text-sm font-bold text-white md:text-lg">
                Max Verstappen, Red Bull Racing
              </p>
              <p className="font-regular text-sm text-white md:text-lg">
                Formula 1 Driver
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Section */}
      <motion.div
        className="relative flex w-full flex-col items-center gap-6 rounded-t-[80px] border-2 border-t-white bg-black px-6 py-12 md:gap-9 md:px-16 md:py-24 lg:px-24 lg:py-36"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ margin: "-100px" }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bg-bawah.svg"
            alt="Contact section background"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Content */}
        <motion.h1
          className="relative z-10 max-w-xl border-white text-center text-2xl font-bold text-white md:text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ margin: "-100px" }}
        >
          See What Drives Innovation.
        </motion.h1>
        <motion.h2
          className="font-regular relative z-10 max-w-3xl text-center text-base text-white md:text-lg lg:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ margin: "-100px" }}
        >
          Browse through our latest vehicle and motorcycle lineup that defines
          style, speed, and sustainability.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ margin: "-100px" }}
        >
          <Link href="/products">
            <Button className="relative z-10 rounded-full bg-[#3CF167] px-8 py-3 text-lg font-semibold text-white hover:bg-[#249740] cursor-pointer">
              Explore Products
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
