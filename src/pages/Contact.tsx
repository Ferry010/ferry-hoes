import { useState } from "react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Mic, MessageCircle } from "lucide-react";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { contactPageSchema, breadcrumbSchema } from "@/components/StructuredData";
import SectionLabel from "@/components/SectionLabel";

const KEYNOTE_TOPICS = [
  { value: "brand-humanizing", label: "Brand Humanizing: become irreplaceable in a world of AI" },
  { value: "ai-conversation", label: "The AI conversation most organisations skip" },
  { value: "leading-ai", label: "Leading when AI has a say" },
  { value: "ai-mistake", label: "The biggest AI mistake organisations are making right now" },
  { value: "ai-law", label: "From AI law to AI advantage: literacy as a strategic foundation" },
  { value: "other", label: "Other / custom topic" },
];

const AUDIENCE_SIZES = [
  { value: "under-50", label: "Under 50" },
  { value: "50-100", label: "50–100" },
  { value: "100-300", label: "100–300" },
  { value: "300-1000", label: "300–1,000" },
  { value: "1000+", label: "1,000+" },
];

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

const FROM_TO_TAB: Record<string, string> = {
  speaking: "booking",
  press: "general",
};

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

const generalSchema = z.object({
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

const Contact = () => {
  const location = useLocation();
  const fromPage = (location.state as { from?: string })?.from;
  const defaultTab = fromPage ? FROM_TO_TAB[fromPage] || "booking" : "booking";

  // Booking form state
  const [booking, setBooking] = useState({
    name: "", email: "", organization: "", eventName: "", eventDate: "",
    eventLocation: "", audienceSize: "", topic: "", message: "", privacyAccepted: undefined as boolean | undefined,
  });
  const [bookingErrors, setBookingErrors] = useState<Record<string, string>>({});

  // General form state
  const [general, setGeneral] = useState({
    name: "", email: "", organization: "",
    inquiryType: fromPage === "press" ? "press" : "",
    inquiryOther: "", message: "", timeline: "", privacyAccepted: undefined as boolean | undefined,
  });
  const [generalErrors, setGeneralErrors] = useState<Record<string, string>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const updateBooking = (key: string, value: any) => {
    setBooking((prev) => ({ ...prev, [key]: value }));
    if (bookingErrors[key]) setBookingErrors((prev) => ({ ...prev, [key]: undefined as any }));
  };

  const updateGeneral = (key: string, value: any) => {
    setGeneral((prev) => ({ ...prev, [key]: value }));
    if (generalErrors[key]) setGeneralErrors((prev) => ({ ...prev, [key]: undefined as any }));
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = bookingSchema.safeParse(booking);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (!errs[err.path[0] as string]) errs[err.path[0] as string] = err.message; });
      setBookingErrors(errs);
      return;
    }

    setIsSubmitting(true);
    const d = result.data;
    const structuredMessage = [
      d.eventName && `Event: ${d.eventName}`,
      d.eventDate && `Date: ${d.eventDate}`,
      d.eventLocation && `Location: ${d.eventLocation}`,
      d.audienceSize && `Audience size: ${AUDIENCE_SIZES.find(a => a.value === d.audienceSize)?.label || d.audienceSize}`,
      d.topic && `Topic: ${KEYNOTE_TOPICS.find(t => t.value === d.topic)?.label || d.topic}`,
      "",
      d.message,
    ].filter(Boolean).join("\n");

    const { error } = await supabase.from("contact_messages").insert({
      name: d.name, email: d.email, message: structuredMessage,
      organization: d.organization || null,
      inquiry_type: "talk", timeline: null, privacy_accepted: true,
    } as any);

    setIsSubmitting(false);
    if (error) { setBookingErrors({ name: "Something went wrong. Please try again." }); return; }
    setIsSent(true);
    supabase.functions.invoke("notify-contact", {
      body: { name: d.name, email: d.email, message: structuredMessage, organization: d.organization, inquiryType: "talk" },
    });
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = generalSchema.safeParse(general);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.errors.forEach((err) => { if (!errs[err.path[0] as string]) errs[err.path[0] as string] = err.message; });
      setGeneralErrors(errs);
      return;
    }

    setIsSubmitting(true);
    const d = result.data;
    const { error } = await supabase.from("contact_messages").insert({
      name: d.name, email: d.email, message: d.message,
      organization: d.organization || null,
      inquiry_type: d.inquiryType, inquiry_other: d.inquiryOther || null,
      timeline: d.timeline || null, privacy_accepted: true,
    } as any);

    setIsSubmitting(false);
    if (error) { setGeneralErrors({ name: "Something went wrong. Please try again." }); return; }
    setIsSent(true);
    supabase.functions.invoke("notify-contact", {
      body: { name: d.name, email: d.email, message: d.message, organization: d.organization, inquiryType: d.inquiryType, timeline: d.timeline },
    });
  };

  const PrivacyCheckbox = ({ checked, onChange, error }: { checked: boolean | undefined; onChange: (v: any) => void; error?: string }) => (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <Checkbox id="privacy" checked={checked === true} onCheckedChange={(c) => onChange(c === true ? true : undefined)} className={error ? "border-destructive" : ""} />
        <div className="space-y-1">
          <Label htmlFor="privacy" className="leading-snug cursor-pointer">I agree that my information will be used to respond to this message.</Label>
          <p className="text-xs text-muted-foreground">Your information will only be used to reply to you. Nothing else.</p>
        </div>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );

  return (
    <>
      <SEOHead
        title="Book Ferry Hoes | Keynote Speaker Enquiries & Contact"
        description="Get in touch to book Ferry Hoes for your conference or corporate event. Available for keynotes, workshops, panel moderation, and hosting. International speaker based in the Netherlands."
        ogType="website"
        canonicalUrl="/contact"
      />
      <StructuredData
        data={[
          contactPageSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "Contact", url: "https://ferryhoes.com/contact" },
          ]),
        ]}
      />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container px-6 md:px-8 max-w-2xl mx-auto">
            <SectionLabel text="Contact" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact
              <span className="inline-block w-2 h-2 bg-accent rounded-full ml-1.5 mb-1 align-baseline" />
            </h1>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-accent mb-6">Book Ferry for Your Event</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">Choose the option that fits your enquiry best.</p>
          </div>
        </section>

        {/* Form / Confirmation */}
        <section className="pb-24 md:pb-32">
          <div className="container px-6 md:px-8 max-w-2xl mx-auto">
            {isSent ? (
              <div className="animate-fade-in py-16">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">Message received.</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">Thank you for reaching out. I read every message personally and aim to reply within 48 hours.</p>
              </div>
            ) : (
              <Tabs defaultValue={defaultTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="booking" className="gap-2"><Mic className="h-4 w-4" /> Book to Speak</TabsTrigger>
                  <TabsTrigger value="general" className="gap-2"><MessageCircle className="h-4 w-4" /> General Enquiry</TabsTrigger>
                </TabsList>

                {/* ── Booking Form ── */}
                <TabsContent value="booking">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 bg-accent/5 rounded-lg px-4 py-3">
                    <Clock className="h-4 w-4 text-accent shrink-0" />
                    I respond to all speaking enquiries within 2 business days.
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-6" style={{ opacity: isSubmitting ? 0.6 : 1 }} noValidate>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="b-name">Full Name <span className="text-destructive">*</span></Label>
                        <Input id="b-name" value={booking.name} onChange={(e) => updateBooking("name", e.target.value)} className={bookingErrors.name ? "border-destructive" : ""} />
                        {bookingErrors.name && <p className="text-sm text-destructive">{bookingErrors.name}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="b-email">Email Address <span className="text-destructive">*</span></Label>
                        <Input id="b-email" type="email" placeholder="name@company.com" value={booking.email} onChange={(e) => updateBooking("email", e.target.value)} className={bookingErrors.email ? "border-destructive" : ""} />
                        {bookingErrors.email && <p className="text-sm text-destructive">{bookingErrors.email}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="b-org">Organisation <span className="text-destructive">*</span></Label>
                      <Input id="b-org" value={booking.organization} onChange={(e) => updateBooking("organization", e.target.value)} className={bookingErrors.organization ? "border-destructive" : ""} />
                      {bookingErrors.organization && <p className="text-sm text-destructive">{bookingErrors.organization}</p>}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="b-event">Event Name</Label>
                        <Input id="b-event" value={booking.eventName} onChange={(e) => updateBooking("eventName", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="b-date">Event Date</Label>
                        <Input id="b-date" placeholder="e.g. September 2026" value={booking.eventDate} onChange={(e) => updateBooking("eventDate", e.target.value)} />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="b-location">Event Location</Label>
                        <Input id="b-location" placeholder="e.g. Amsterdam, Netherlands" value={booking.eventLocation} onChange={(e) => updateBooking("eventLocation", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label>Expected Audience Size</Label>
                        <Select value={booking.audienceSize} onValueChange={(v) => updateBooking("audienceSize", v)}>
                          <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                          <SelectContent>
                            {AUDIENCE_SIZES.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Topic of Interest <span className="text-destructive">*</span></Label>
                      <Select value={booking.topic} onValueChange={(v) => updateBooking("topic", v)}>
                        <SelectTrigger className={bookingErrors.topic ? "border-destructive" : ""}><SelectValue placeholder="Select a topic" /></SelectTrigger>
                        <SelectContent>
                          {KEYNOTE_TOPICS.map((t) => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      {bookingErrors.topic && <p className="text-sm text-destructive">{bookingErrors.topic}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="b-message">Tell me about your event <span className="text-destructive">*</span></Label>
                      <Textarea id="b-message" rows={5} placeholder="What are the goals for your event? Who will be in the audience?" value={booking.message} onChange={(e) => updateBooking("message", e.target.value)} className={bookingErrors.message ? "border-destructive" : ""} />
                      {bookingErrors.message && <p className="text-sm text-destructive">{bookingErrors.message}</p>}
                    </div>

                    <PrivacyCheckbox checked={booking.privacyAccepted} onChange={(v) => updateBooking("privacyAccepted", v)} error={bookingErrors.privacyAccepted} />

                    <Button type="submit" size="lg" disabled={isSubmitting} className="hover:brightness-[1.05] active:scale-[0.97] transition-all duration-[120ms]">
                      {isSubmitting ? "Sending..." : "Send booking enquiry"}
                    </Button>
                  </form>
                </TabsContent>

                {/* ── General Form ── */}
                <TabsContent value="general">
                  <form onSubmit={handleGeneralSubmit} className="space-y-6" style={{ opacity: isSubmitting ? 0.6 : 1 }} noValidate>
                    <div className="space-y-2">
                      <Label htmlFor="g-name">Full Name <span className="text-destructive">*</span></Label>
                      <Input id="g-name" value={general.name} onChange={(e) => updateGeneral("name", e.target.value)} className={generalErrors.name ? "border-destructive" : ""} />
                      {generalErrors.name && <p className="text-sm text-destructive">{generalErrors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="g-email">Email Address <span className="text-destructive">*</span></Label>
                      <Input id="g-email" type="email" placeholder="name@company.com" value={general.email} onChange={(e) => updateGeneral("email", e.target.value)} className={generalErrors.email ? "border-destructive" : ""} />
                      {generalErrors.email && <p className="text-sm text-destructive">{generalErrors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="g-org">Organization / Company</Label>
                      <Input id="g-org" value={general.organization} onChange={(e) => updateGeneral("organization", e.target.value)} />
                    </div>

                    <div className="space-y-2">
                      <Label>How can I help? <span className="text-destructive">*</span></Label>
                      <Select value={general.inquiryType} onValueChange={(v) => updateGeneral("inquiryType", v)}>
                        <SelectTrigger className={generalErrors.inquiryType ? "border-destructive" : ""}><SelectValue placeholder="Select an option" /></SelectTrigger>
                        <SelectContent>
                          {INQUIRY_OPTIONS.map((o) => <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      {generalErrors.inquiryType && <p className="text-sm text-destructive">{generalErrors.inquiryType}</p>}
                    </div>

                    {general.inquiryType === "other" && (
                      <div className="space-y-2">
                        <Label htmlFor="g-other">Please specify</Label>
                        <Input id="g-other" value={general.inquiryOther} onChange={(e) => updateGeneral("inquiryOther", e.target.value)} />
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="g-message">Your message <span className="text-destructive">*</span></Label>
                      <Textarea id="g-message" rows={5} placeholder="Share some context about what you're looking for…" value={general.message} onChange={(e) => updateGeneral("message", e.target.value)} className={generalErrors.message ? "border-destructive" : ""} />
                      {generalErrors.message && <p className="text-sm text-destructive">{generalErrors.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label>Timeline</Label>
                      <Select value={general.timeline} onValueChange={(v) => updateGeneral("timeline", v)}>
                        <SelectTrigger><SelectValue placeholder="When do you need this?" /></SelectTrigger>
                        <SelectContent>
                          {TIMELINE_OPTIONS.map((t) => <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <PrivacyCheckbox checked={general.privacyAccepted} onChange={(v) => updateGeneral("privacyAccepted", v)} error={generalErrors.privacyAccepted} />

                    <Button type="submit" size="lg" disabled={isSubmitting} className="hover:brightness-[1.05] active:scale-[0.97] transition-all duration-[120ms]">
                      {isSubmitting ? "Sending..." : "Send message"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
