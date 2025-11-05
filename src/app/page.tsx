import { Button } from "@/components/ui/button";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import Image from "next/image";
import { cookies } from "next/headers";
import { createServerClient } from "@/utils/supabase";

export default async function Index() {
  const cookieStore = cookies();

  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.
  //   try {
  //     createServerClient(cookieStore)
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

  // const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center transition-colors"
      style={{
        background: "linear-gradient(145deg, #000000 40%, #3CF167 200%)",
      }}
    >
      <div className="relative flex min-h-screen w-full flex-col items-center justify-center gap-4 p-6 md:gap-8">
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
            width: "1240px",
            height: "425px",
            background: "rgba(0, 0, 0, 0.90)",
            filter: "blur(90px)",
          }}
        />

        <h1
          className="relative z-10 max-w-5xl text-center text-4xl font-bold md:text-6xl lg:text-7xl"
          style={{
            background:
              "linear-gradient(to bottom, #000000 -100%, #3CF167 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          WHO ARE WE?
        </h1>
        <p className="relative z-10 max-w-5xl text-center text-2xl text-white md:text-2xl">
          Anargya ITS EV Team is an electric vehicle research team dedicated to
          the research and development of electric vehicles, as well as
          participating in FSAE (Formula Society of Automotive Engineers)
          competitions, in particular and other local and international
          competitions, in general. Our team consists of highly determined and
          enthusiastic individuals from various academic backgrounds at the
          Sepuluh Nopember Institute of Technology.
        </p>
      </div>
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-2 bg-black p-6 pb-24 pt-12 md:gap-[50px] md:pb-64 md:pt-48">
        <div className="absolute inset-0">
          <Image
            src="/images/bg-home.png"
            alt="Home background"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 aspect-[15/8] w-[60%] rounded-2xl md:rounded-3xl overflow-hidden">
          <Image
            src="/images/car.png"
            alt="Car showcase"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 60vw, 60vw"
            priority
          />
        </div>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-2 bg-black px-6 pb-12 md:gap-6">
        <div className="-mt-16 bg-gradient-to-r from-green-400 to-green-100 bg-clip-text text-center text-3xl font-bold text-transparent md:-mt-52 md:text-5xl">
          WHAT IS 180DC ITS?
        </div>
        <p className="text-md font-regular max-w-4xl pb-4 text-center text-white md:pb-8 md:text-2xl">
          180 Degrees Consulting (180DC) is the world’s largest university-based
          consultancy, providing high-quality consulting services to social
          enterprises and non-profits. With over 10,000 members in 165+ branches
          worldwide, 180DC has positively impacted more than 1,500 organizations
          globally.
        </p>
      </div>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-4 bg-black py-16 md:gap-[50px]">
        <h1 className="bg-gradient-to-r from-green-100 to-green-400 bg-clip-text text-center text-2xl font-bold text-transparent md:text-5xl">
          WHAT THEY SAY ABOUT US?
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 px-6 md:flex-row md:gap-8 md:px-[100px] lg:gap-12">
          <div className="relative flex flex-shrink-0 items-center justify-center">
            <Image
              src="/images/driver-2.png"
              alt="Team photo"
              width={192}
              height={192}
              className="z-10 h-24 w-24 rounded-full object-cover md:h-60 md:w-60"
            />{" "}
            {/* Menambahkan object-cover dan rounded-full adalah praktik yang baik */}
            <div className="absolute mb-8 mr-8 h-20 w-20 rounded-full bg-green-500 blur-xl md:mr-36 md:mt-36 md:h-32 md:w-32 md:blur-3xl"></div>
          </div>
          <div className="flex max-w-[400px] flex-1 flex-col-reverse gap-4 md:flex-col md:px-0 lg:max-w-2xl">
            <p className="text-md font-regular text-center text-white md:text-left md:text-lg lg:text-xl">
              It was good! It was contextualised to an international business
              and also very adaptable to the needs of the company. Helps with
              the actual implementation of the recommendations.
            </p>
            <div className="flex flex-col text-center md:text-left">
              <p className="text-sm font-bold text-white md:text-lg">
                CEO, The Body Shop
              </p>
              <p className="font-regular text-sm text-white md:text-lg">
                Client, 180DC ITS
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-6 md:flex-row-reverse md:gap-12 md:px-[100px]">
          <div className="relative flex flex-shrink-0 items-center justify-center">
            <Image
              src="/images/driver-1.png"
              alt="Team photo"
              width={192}
              height={192}
              className="z-10 h-24 w-24 rounded-full object-cover md:h-48 md:w-48"
            />
            <div className="absolute mb-8 ml-8 h-20 w-20 rounded-full bg-green-500 blur-xl md:ml-36 md:mt-36 md:h-32 md:w-32 md:blur-3xl"></div>
          </div>
          <div className="flex max-w-[400px] flex-1 flex-col-reverse gap-4 md:flex-col md:px-0 lg:max-w-2xl">
            <p className="text-md font-regular text-center text-white md:text-right md:text-lg lg:text-xl">
              It was good! It was contextualised to an international business
              and also very adaptable to the needs of the company. Helps with
              the actual implementation of the recommendations.
            </p>
            <div className="flex flex-col text-center md:text-right">
              <p className="text-sm font-bold text-white md:text-lg">
                CEO, The Body Shop
              </p>
              <p className="font-regular text-sm text-white md:text-lg">
                Client, 180DC ITS
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative flex w-full flex-col items-center gap-6 rounded-t-[80px] border-2 border-t-white bg-black px-6 py-12 md:gap-9 md:px-16 md:py-24 lg:px-24 lg:py-36">
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
        <h1 className="relative z-10 max-w-4xl border-white text-center text-2xl font-bold text-white md:text-4xl lg:text-5xl">
          We Welcome the Opportunity to Connect.
        </h1>
        <h2 className="font-regular relative z-10 max-w-3xl text-center text-base text-white md:text-lg lg:text-xl">
          See how our services align with your needs, and get in touch to
          explore how we can help move your business forward.
        </h2>
        <Button className="relative z-10 rounded-full bg-[#3CF167] px-8 py-3 text-lg font-semibold text-[#18652a] hover:bg-[#249740]">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
