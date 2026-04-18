import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { contactPageSchema, breadcrumbSchema } from "@/components/StructuredData";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Clock } from "lucide-react";

const KEYNOTE_TOPICS = [
  { value: "brand-humanizing", label: "Brand Humanizing: become irreplaceable in a world of AI" },
  { value: "ai-conversation", label: "The AI conversation most organisations skip" },
  { value: "leading-ai", label: "Leading when AI has a say" },
  { value: "ai-mistake", label: "The biggest AI mistake organisations are making" },
  { value: "ai-law", label: "From AI law to AI advantage" },
  { value: "other", label: "Other / custom topic" },
];

const AUDIENCE_SIZES = [
  { value: "under-50", label: "Under 50" },
  { value: "50-100", label: "50–100" },
  { value: "100-300", label: "100–300" },
  { value: "300-1000", label: "300–1,000" },
  { value: "1000+", label: "1,000+" },
];

const bookingSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  organization: z.string().trim().min(1, "Please enter your organisation").max(200),
  eventName: z.string().trim().max(200).optional().or(z.literal("")),
  eventDate: z.string().trim().max(100).optional().or(z.literal("")),
  eventLocation: z.string().trim().max(200).optional().or(z.literal("")),
  audienceSize: z.string().optional().or(z.literal("")),
  topic: z.string().min(1, "Please select a topic of interest"),
  message: z.string().trim().min(1, "Please share some details about your event").max(5000),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy agreement" }),
  }),
});

const Book = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    organization: "",
    eventName: "",
    eventDate: "",
    eventLocation: "",
    audienceSize: "",
    topic: "",
    message: "",
    privacyAccepted: undefined as boolean | undefined,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const update = (key: string, value: any) => {
    setData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined as any }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (!errs[err.path[0] as string]) errs[err.path[0] as string] = err.message;
      });
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);
    const d = result.data;
    const structuredMessage = [
      d.eventName && `Event: ${d.eventName}`,
      d.eventDate && `Date: ${d.eventDate}`,
      d.eventLocation && `Location: ${d.eventLocation}`,
      d.audienceSize &&
        `Audience size: ${
          AUDIENCE_SIZES.find((a) => a.value === d.audienceSize)?.label || d.audienceSize
        }`,
      d.topic &&
        `Topic: ${
          KEYNOTE_TOPICS.find((t) => t.value === d.topic)?.label || d.topic
        }`,
      "",
      d.message,
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await supabase.from("contact_messages").insert({
      name: d.name,
      email: d.email,
      message: structuredMessage,
      organization: d.organization || null,
      inquiry_type: "talk",
      timeline: null,
      privacy_accepted: true,
    } as any);

    setIsSubmitting(false);
    if (error) {
      setErrors({ name: "Something went wrong. Please try again." });
      return;
    }
    setIsSent(true);
    supabase.functions.invoke("notify-contact", {
      body: {
        name: d.name,
        email: d.email,
        message: structuredMessage,
        organization: d.organization,
        inquiryType: "talk",
      },
    });
  };

  return (
    <>
      <SEOHead
        title="Book Ferry — Speaker Enquiries | Ferry Hoes"
        description="Book Ferry Hoes for your next keynote. Ferry replies personally within two working days. For formal bookings he is exclusively represented by Speakers Academy."
        canonicalUrl="/book"
      />
      <StructuredData
        data={[
          contactPageSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "Book Ferry", url: "https://ferryhoes.com/book" },
          ]),
        ]}
      />

      <SiteHeader />

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="pt-36 md:pt-44 pb-12 md:pb-16">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>Book Ferry</Eyebrow>
              <h1
                className="font-display font-bold text-foreground leading-[1.02]"
                style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
              >
                Let's make it{" "}
                <span className="text-primary">memorable</span>
                <Period />
              </h1>
              <p className="mt-8 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
                Ferry replies personally within two working days. For formal
                bookings he is exclusively represented by Speakers Academy.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="pb-24 md:pb-32">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-2xl">
              {isSent ? (
                <div className="animate-fade-in py-12 bg-background-alt border border-border rounded-2xl px-8">
                  <CheckCircle className="h-10 w-10 text-primary mb-5" />
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Got it<Period />
                  </h2>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Ferry will read this himself and reply within two working
                    days.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-sm text-foreground/75 mb-8 bg-background-alt border border-border rounded-lg px-4 py-3">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    Personal reply within two working days.
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    style={{ opacity: isSubmitting ? 0.6 : 1 }}
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          Full Name <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={data.name}
                          onChange={(e) => update("name", e.target.value)}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email <span className="text-primary">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="name@company.com"
                          value={data.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="org">
                        Organisation <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="org"
                        value={data.organization}
                        onChange={(e) => update("organization", e.target.value)}
                        className={errors.organization ? "border-destructive" : ""}
                      />
                      {errors.organization && (
                        <p className="text-sm text-destructive">{errors.organization}</p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="event">Event name</Label>
                        <Input
                          id="event"
                          value={data.eventName}
                          onChange={(e) => update("eventName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Event date</Label>
                        <Input
                          id="date"
                          placeholder="e.g. September 2026"
                          value={data.eventDate}
                          onChange={(e) => update("eventDate", e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          placeholder="e.g. Amsterdam, Netherlands"
                          value={data.eventLocation}
                          onChange={(e) => update("eventLocation", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Audience size</Label>
                        <Select
                          value={data.audienceSize}
                          onValueChange={(v) => update("audienceSize", v)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select size" />
                          </SelectTrigger>
                          <SelectContent>
                            {AUDIENCE_SIZES.map((s) => (
                              <SelectItem key={s.value} value={s.value}>
                                {s.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>
                        Topic of interest <span className="text-primary">*</span>
                      </Label>
                      <Select value={data.topic} onValueChange={(v) => update("topic", v)}>
                        <SelectTrigger className={errors.topic ? "border-destructive" : ""}>
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {KEYNOTE_TOPICS.map((t) => (
                            <SelectItem key={t.value} value={t.value}>
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.topic && <p className="text-sm text-destructive">{errors.topic}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Tell Ferry about your event <span className="text-primary">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        placeholder="What are the goals for your event? Who will be in the audience?"
                        value={data.message}
                        onChange={(e) => update("message", e.target.value)}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id="privacy"
                          checked={data.privacyAccepted === true}
                          onCheckedChange={(c) =>
                            update("privacyAccepted", c === true ? true : undefined)
                          }
                          className={errors.privacyAccepted ? "border-destructive" : ""}
                        />
                        <div className="space-y-1">
                          <Label htmlFor="privacy" className="leading-snug cursor-pointer">
                            I agree my information will be used to respond to this message.
                          </Label>
                          <p className="text-xs text-muted-foreground">
                            Used only to reply. Nothing else.
                          </p>
                        </div>
                      </div>
                      {errors.privacyAccepted && (
                        <p className="text-sm text-destructive">{errors.privacyAccepted}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <PillButton type="submit" variant="primary">
                        {isSubmitting ? "Sending..." : "Send enquiry"}
                      </PillButton>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Book;
