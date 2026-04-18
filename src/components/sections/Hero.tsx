import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import Polaroid from "@/components/Polaroid";
import ferryPhoto from "@/assets/ferry-speaking-audience.jpg";

/**
 * Editorial hero — replaces HeroVideo.
 * Polaroid-led, no video, no chat. The signature headline carries the page.
 */
const Hero = () => {
  return (
    <section className="relative bg-background pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="container px-6 md:px-10 lg:px-14 max-w-[1280px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7">
            <Eyebrow>
              International Keynote Speaker · Author · Host of The Human Era
            </Eyebrow>

            <h1
              className="font-display font-bold text-foreground leading-[0.98]"
              style={{
                fontSize: "clamp(48px, 8.5vw, 128px)",
                letterSpacing: "-0.025em",
              }}
            >
              The 'now what' after AI<Period />
              <br />
              For the <span className="text-primary">humans running the place</span>
              <Period />
            </h1>

            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-[1.55]">
              AI is settling. The economy has shifted. The real question isn't
              which tool to buy next — it's how to lead organisations that still
              feel human. That's the work of Brand Humanizing. Ten years in the
              making.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
              <PillButton to="/the-idea" variant="primary">
                Read the idea
              </PillButton>
              <PillButton
                href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                arrow={false}
              >
                Book Ferry
              </PillButton>
            </div>
          </div>

          {/* Polaroid column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <Polaroid
                src={ferryPhoto}
                alt="Ferry Hoes mid-conversation with an audience"
                caption="Listening, mostly."
                rotate={2}
                aspect="portrait"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
