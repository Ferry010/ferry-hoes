import { Helmet } from "react-helmet-async";

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

const StructuredData = ({ data }: StructuredDataProps) => {
  const items = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default StructuredData;

// Reusable schema generators
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ferry Hoes",
  jobTitle: "Keynote Speaker & Author",
  url: "https://ferryhoes.com",
  image: "https://ferryhoes.com/og-image.jpg",
  sameAs: [
    "https://www.linkedin.com/in/ferryhoes/",
    "https://www.youtube.com/@ferry-hoes",
  ],
  description:
    "International keynote speaker, published author, and creator of Brand Humanizing.",
  knowsAbout: ["Brand Humanizing", "Keynote Speaking", "AI", "Technology", "Marketing"],
  brand: {
    "@type": "Brand",
    name: "Brand Humanizing",
    url: "https://brandhumanizingboek.nl",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ferry Hoes",
  url: "https://ferryhoes.com",
  description:
    "Essays, insights, and perspectives on technology, humanity, and everything in between.",
  author: { "@type": "Person", name: "Ferry Hoes" },
};

export const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Brand Humanizing",
  author: [
    { "@type": "Person", name: "Ferry Hoes" },
    { "@type": "Person", name: "Jonathan Flores" },
  ],
  description:
    "The superpower that makes your brand more human and your business grow faster.",
  url: "https://brandhumanizingboek.nl",
  inLanguage: "nl",
};

export const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "The Human Era Podcast",
  description:
    "Deep conversations with founders, artists, scientists, and anyone doing interesting work at the intersection of humans and technology.",
  url: "https://ferryhoes.com/podcast",
  author: { "@type": "Person", name: "Ferry Hoes" },
  webFeed: [
    "https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu",
    "https://podcasts.apple.com/nl/podcast/the-human-era-podcast/id1598552331",
  ],
};

export const breadcrumbSchema = (
  items: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const speakerEventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Ferry Hoes Keynote",
  description:
    "Keynotes on AI, technology, and Brand Humanizing that inspire action.",
  performer: {
    "@type": "Person",
    name: "Ferry Hoes",
  },
  organizer: {
    "@type": "Organization",
    name: "Speakers Academy",
    url: "https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966",
  },
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
};
