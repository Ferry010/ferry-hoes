import { Eyebrow } from "@/components/HeadingDot";
import ActionButton from "@/components/Button";
import HandwrittenCaption from "@/components/HandwrittenCaption";
import { SPEAKERS_ACADEMY_URL } from "@/config/site";
import ferryPhoto from "@/assets/ferry-speaking-audience.jpg";

const Hero = () => {
  return (
    <section className="relative bg-background pt-32 md:pt-40 pb-16 md:pb-24">
      <div className="container px-6 md:px-10 lg:px-14 max-w-[1280px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <Eyebrow>International Keynote Speaker · Author · Host of The Human Era</Eyebrow>

            <h1
              className="font-display headline-muted text-balance"
              style={{
                fontSize: "clamp(48px, 7.5vw, 96px)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 1.02,
              }}
            >
              The 'now what' after AI. For the <strong>humans running the place.</strong>
            </h1>

            <p className="mt-8 text-[19px] md:text-xl text-foreground/80 max-w-[560px] leading-[1.6]">
              AI is settling. The economy has shifted. The real question isn't which tool to buy
              next — it's how to lead organisations that still feel human. That's the work of
              Brand Humanizing. Ten years in the making.
            </p>

            <div className="mt-10 flex flex-wrap gap-6 items-center">
              <ActionButton to="/the-idea" variant="primary">
                Read the idea
              </ActionButton>
              <ActionButton href={SPEAKERS_ACADEMY_URL} external variant="ghost">
                Book Ferry
              </ActionButton>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <figure className="relative bg-card p-2 shadow-polaroid">
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={ferryPhoto}
                    alt="Ferry Hoes mid-conversation with an audience"
                    loading="eager"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </figure>
              <HandwrittenCaption className="absolute -bottom-4 -left-4 md:-left-8 -rotate-6 text-accent" size="lg">
                Listening, mostly.
              </HandwrittenCaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
