import { Eyebrow, Period } from "@/components/HeadingDot";
import Polaroid from "@/components/Polaroid";
import PillButton from "@/components/PillButton";
import ferryPhoto from "@/assets/ferry-speaking-audience.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * My Story — short narrative block with a polaroid.
 * Editorial cadence, one accent word, period.
 */
const AboutBlock = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 order-first lg:order-first flex justify-center lg:justify-start">
            <div className="w-full max-w-sm">
              <Polaroid
                src={ferryPhoto}
                alt="Ferry Hoes on stage in front of an audience"
                caption="Mid-keynote, somewhere in 2025."
                rotate={-2}
              />
            </div>
          </div>

          {/* Copy */}
          <div ref={revealRef} className="scroll-reveal lg:col-span-7">
            <Eyebrow>My Story</Eyebrow>

            <h2
              className="font-display font-bold text-foreground leading-[1.02]"
              style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
            >
              How I got <span className="text-primary">here</span>
              <Period />
            </h2>

            <p className="mt-7 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-xl">
              Talkative kid from Delft. Introverted student. Teenager writing
              lyrics. IT sales account manager. Growth hacker. Then one lunch
              with my best friend Jonathan in 2017 and a term that stuck: Brand
              Humanizing. This is the long version.
            </p>

            <div className="mt-9">
              <PillButton to="/my-story" variant="ghost">
                More about me
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
