import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/sections/Footer";
import AskFerryBubble from "@/components/AskFerryBubble";
import SEOHead from "@/components/blog/SEOHead";

const INQUIRY_OPTIONS = [
  { value: "talk", label: "Enquiry about a talk / event" },
  { value: "workshop", label: "Workshop or team session" },
  { value: "podcast", label: "Podcast / interview request" },
  { value: "press", label: "Press / media enquiry" },
  { value: "collaboration", label: "Collaboration" },
  { value: "general", label: "Curious / general question" },
  { value: "other", label: "Other" },
];

const TIMELINE_OPTIONS = [
  { value: "weeks", label: "Within a few weeks" },
  { value: "1-3months", label: "1–3 months" },
  { value: "flexible", label: "Flexible" },
  { value: "exploring", label: "Just exploring" },
];

const FROM_TO_INQUIRY: Record<string, string> = {
  speaking: "talk",
  podcast: "podcast",
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  organization: z.string().trim().max(200).optional().or(z.literal("")),
  inquiryType: z.string().min(1, "Please select how I can help"),
  inquiryOther: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please share some details about your request").max(5000),
  timeline: z.string().optional().or(z.literal("")),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "Please accept the privacy agreement" }),
  }),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const location = useLocation();
  const fromPage = (location.state as { from?: string })?.from;

  const [form, setForm] = useState<Partial<ContactForm>>({
    name: "",
    email: "",
    organization: "",
    inquiryType: fromPage ? FROM_TO_INQUIRY[fromPage] || "" : "",
    inquiryOther: "",
    message: "",
    timeline: "",
    privacyAccepted: undefined,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const updateField = <K extends keyof ContactForm>(key: K, value: ContactForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: result.data.name,
      email: result.data.email,
      message: result.data.message,
      organization: result.data.organization || null,
      inquiry_type: result.data.inquiryType,
      inquiry_other: result.data.inquiryOther || null,
      timeline: result.data.timeline || null,
      privacy_accepted: true,
    } as any);

    setIsSubmitting(false);
    if (error) {
      setErrors({ name: "Something went wrong. Please try again." });
      return;
    }
    setIsSent(true);
  };

  return (
    <>
      <SEOHead
        title="Contact | Ferry Hoes"
        description="Get in touch with Ferry Hoes. Whether it's about a keynote, workshop, podcast or collaboration — reach out directly."
        ogType="website"
        canonicalUrl="/contact"
      />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container px-6 md:px-8 max-w-2xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Please find a way to connect with me or my team that suits you best.
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="pb-12 md:pb-16">
          <div className="container px-6 md:px-8 max-w-2xl mx-auto grid gap-6 sm:grid-cols-2">
            {/* Press card */}
            <div className="rounded-lg border-l-4 border-l-primary bg-brand-teal-light p-6 space-y-4">
              <h2 className="font-display text-lg font-semibold text-foreground">Press</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                For all interviews, media opportunities, and anything else press-related, please use this option.
              </p>
              <Button
                variant="default"
                size="sm"
                onClick={() => {
                  updateField("inquiryType", "press");
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Press enquiry
              </Button>
            </div>

            {/* Book to speak card */}
            <div className="rounded-lg border-l-4 border-l-accent bg-brand-coral-light p-6 space-y-4">
              <h2 className="font-display text-lg font-semibold text-foreground">Book Ferry To Speak</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm exclusively represented by Speakers Academy. Go here to book me to speak at your next event.
              </p>
              <Button
                size="sm"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a
                  href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book via Speakers Academy
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Form / Confirmation */}
        <section className="pb-24 md:pb-32">
          <div className="container px-6 md:px-8 max-w-2xl mx-auto">
            {isSent ? (
              <div className="animate-fade-in py-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Message received.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Thank you for reaching out. I read every message personally and aim to reply within 48 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8 transition-opacity duration-200"
                style={{ opacity: isSubmitting ? 0.6 : 1 }}
                noValidate
              >
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                {/* Organization */}
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization / Company</Label>
                  <Input
                    id="organization"
                    value={form.organization}
                    onChange={(e) => updateField("organization", e.target.value)}
                  />
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <Label>How can I help? <span className="text-destructive">*</span></Label>
                  <Select
                    value={form.inquiryType}
                    onValueChange={(v) => updateField("inquiryType", v)}
                  >
                    <SelectTrigger className={errors.inquiryType ? "border-destructive" : ""}>
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {INQUIRY_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.inquiryType && <p className="text-sm text-destructive">{errors.inquiryType}</p>}
                </div>

                {/* Conditional "Other" field */}
                {form.inquiryType === "other" && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="inquiryOther">Tell me more</Label>
                    <Input
                      id="inquiryOther"
                      value={form.inquiryOther}
                      onChange={(e) => updateField("inquiryOther", e.target.value)}
                    />
                  </div>
                )}

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Tell me about your request <span className="text-destructive">*</span></Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="What are you thinking? The more context you share, the better the conversation."
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <Label>Preferred timeline</Label>
                  <Select
                    value={form.timeline}
                    onValueChange={(v) => updateField("timeline", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIMELINE_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Privacy */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy"
                      checked={form.privacyAccepted === true}
                      onCheckedChange={(checked) =>
                        updateField("privacyAccepted", checked === true ? true : undefined as any)
                      }
                      className={errors.privacyAccepted ? "border-destructive" : ""}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="privacy" className="leading-snug cursor-pointer">
                        I agree that my information will be used to respond to this message.
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Your information will only be used to reply to you. Nothing else.
                      </p>
                    </div>
                  </div>
                  {errors.privacyAccepted && <p className="text-sm text-destructive">{errors.privacyAccepted}</p>}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="hover:brightness-[1.05] active:scale-[0.97] transition-all duration-[120ms]"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <AskFerryBubble />
    </>
  );
};

export default Contact;
