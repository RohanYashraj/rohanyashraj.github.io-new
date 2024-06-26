import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="flex flex-col items-center text-center xl:items-start xl:text-left order-2 xl:order-none">
            <span className="text-3xl pb-8">
              Pricing Actuary, PhD, ASA, AIA
            </span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-light dark:text-accent">
                Rohan Yashraj Gupta
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 pt-4">
              As a highly skilled and experienced Actuarial Data Science
              professional with a Ph.D., I am an Associate of the Institute of
              Actuaries and Associate of Society of Actuaries with over 7 years
              of experience in the areas of pricing, experience studies, rater
              delivery, R modeling, and predictive analytics.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/resume/resume.pdf" download="Rohan-Resume.pdf">
                <Button
                  // variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-light dark:border-accent rounded-full flex justify-center items-center text-light dark:text-accent text-base hover:bg-light dark:hover:bg-accent hover:text-secondary dark:hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
