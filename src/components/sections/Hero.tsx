import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import Polaroid from "@/components/Polaroid";
import ferryPhoto from "@/assets/ferry-speaking-audience.jpg";
import { useBlogPosts } from "@/hooks/useBlogPosts";

/**
 * Editorial hero — replaces HeroVideo.
 * Polaroid-led, no video, no chat. The signature headline carries the page.
 */
const Hero = () => {
  const { data: posts } = useBlogPosts(1);
  const latestSlug = posts?.[0]?.slug;
  const essayHref = latestSlug ? `/blog/${latestSlug}` : "/writing";

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
              Technology should make us more{" "}
              <span className="text-primary">human,</span>
              <br />
              not less<Period />
            </h1>

            <p className="mt-8 text-lg md:text-xl text-foreground/80 max-w-2xl leading-[1.55]">
              I'm Ferry Hoes. I write, speak, and podcast about one idea ten
              years in the making: technology that amplifies what's human
              instead of replacing it. Everything below is a way in.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 md:gap-4">
              <PillButton to={essayHref} variant="primary">
                Read the latest essay
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
