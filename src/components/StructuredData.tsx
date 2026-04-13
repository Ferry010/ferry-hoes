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

// ── Person schema (expanded) ──
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ferry Hoes",
  jobTitle: "International Keynote Speaker",
  description:
    "Ferry Hoes is an international keynote speaker on AI, technology, and Brand Humanizing. He helps organisations combine artificial intelligence and human judgment to grow faster without losing what makes them distinctive. Author of Brand Humanizing (co-written with Jonathan Flores) and founder of the Brand Humanizing Institute.",
  url: "https://ferryhoes.com",
  image: "https://ferryhoes.com/og-image.jpg",
  nationality: "Dutch",
  address: { "@type": "PostalAddress", addressCountry: "NL" },
  sameAs: [
    "https://www.linkedin.com/in/ferryhoes/",
    "https://www.youtube.com/@ferry-hoes",
    "https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu",
    "https://brandhumanizing.com",
  ],
  knowsAbout: [
    "Artificial Intelligence", "Brand Humanizing", "Future of Work",
    "Human-Centred Leadership", "Technology and Marketing", "Keynote Speaking", "EU AI Act",
  ],
  hasOccupation: { "@type": "Occupation", name: "Keynote Speaker", occupationLocation: { "@type": "Country", name: "Netherlands" } },
  affiliation: { "@type": "Organization", name: "Brand Humanizing Institute", url: "https://brandhumanizing.com" },
};

// ── Website schema ──
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ferry Hoes",
  url: "https://ferryhoes.com",
  description: "Essays, insights, and perspectives on technology, humanity, and everything in between.",
  author: { "@type": "Person", name: "Ferry Hoes" },
};

// ── Book schema ──
export const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Brand Humanizing",
  author: [
    { "@type": "Person", name: "Ferry Hoes" },
    { "@type": "Person", name: "Jonathan Flores" },
  ],
  description: "The superpower that makes your brand more human and your business grow faster.",
  url: "https://brandhumanizingboek.nl",
  inLanguage: "nl",
};

// ── Podcast schema ──
export const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  name: "The Human Era Podcast",
  description: "Deep conversations with founders, artists, scientists, and anyone doing interesting work at the intersection of humans and technology.",
  url: "https://ferryhoes.com/podcast",
  author: { "@type": "Person", name: "Ferry Hoes" },
  webFeed: [
    "https://open.spotify.com/show/6eGkXe767cYZ5Rw627Xpgu",
    "https://podcasts.apple.com/nl/podcast/the-human-era-podcast/id1598552331",
  ],
};

// ── Breadcrumb schema ──
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem", position: i + 1, name: item.name, item: item.url,
  })),
});

// ── Speaking Service schema ──
export const speakingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Keynote Speaking by Ferry Hoes",
  description: "International keynote speaking on AI, technology, Brand Humanizing, the future of work, and human-centred leadership. Talks tailored for corporate events, conferences, and summits worldwide.",
  provider: { "@type": "Person", name: "Ferry Hoes", url: "https://ferryhoes.com" },
  areaServed: { "@type": "Place", name: "International" },
  serviceType: "Keynote Speaking",
  audience: { "@type": "Audience", audienceType: "Event organisers, conference planners, corporate event teams" },
  offers: { "@type": "Offer", description: "Keynote speaking engagements. Contact via Speakers Academy or directly for fee information.", url: "https://ferryhoes.com/contact" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5", reviewCount: "9", bestRating: "5" },
};

// ── FAQ Page schema ──
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What topics does Ferry Hoes speak about?", acceptedAnswer: { "@type": "Answer", text: "Ferry speaks about the human side of technology. His core topics include AI and the future of work, Brand Humanizing, human-centred leadership in an era of automation, the EU AI Act and AI literacy, and the biggest mistakes organisations make with AI adoption. Every talk is tailored to the specific audience and event." } },
    { "@type": "Question", name: "Is Ferry Hoes available for international events?", acceptedAnswer: { "@type": "Answer", text: "Yes. Ferry is based in the Netherlands and speaks at conferences and corporate events worldwide. He speaks in both Dutch and English." } },
    { "@type": "Question", name: "How do you book Ferry Hoes for a keynote?", acceptedAnswer: { "@type": "Answer", text: "You can book Ferry directly via the contact page on this website, or through Speakers Academy. Ferry or his team will respond within 1–2 business days." } },
    { "@type": "Question", name: "What makes Ferry Hoes different from other AI speakers?", acceptedAnswer: { "@type": "Answer", text: "Ferry is not a technologist explaining AI features. He focuses on the human dimension: how organisations can use AI to become more human, more distinctive, and more trusted. His keynotes are built around Brand Humanizing, a concept he created and wrote a book about, making him one of the few speakers with a proprietary, deeply researched idea at the core of his talks." } },
    { "@type": "Question", name: "Does Ferry Hoes offer workshops as well as keynotes?", acceptedAnswer: { "@type": "Answer", text: "Yes. In addition to keynote talks, Ferry facilitates workshops, panel moderation, and full-day sessions. Contact him to discuss the right format for your event." } },
  ],
};

// ── Review schemas ──
export const reviewSchemas = [
  { "@context": "https://schema.org", "@type": "Review", itemReviewed: { "@type": "ProfessionalService", name: "Ferry Hoes - Keynote Speaker" }, author: { "@type": "Person", name: "Avans Hogeschool representative" }, reviewBody: "Ferry took us on an inspiring journey, with the topic perfectly tailored to our audience. He engaged the room from the first minute.", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" } },
  { "@context": "https://schema.org", "@type": "Review", itemReviewed: { "@type": "ProfessionalService", name: "Ferry Hoes - Keynote Speaker" }, author: { "@type": "Person", name: "Laurens" }, reviewBody: "I recently organized a workshop where Ferry Hoes and the Brand Humanizing Institute delivered a lecture on the Ethics of AI. No 'Death by PowerPoint,' but a smooth and captivating story that got us as an IT organization thinking. Ferry is second to none at keeping his audience engaged.", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" } },
  { "@context": "https://schema.org", "@type": "Review", itemReviewed: { "@type": "ProfessionalService", name: "Ferry Hoes - Keynote Speaker" }, author: { "@type": "Person", name: "Abel" }, reviewBody: "From our very first meeting with Ferry, the collaboration was wonderful. He's incredibly enthusiastic, flexible, and loves thinking along about both content and practical matters. Participants of the keynote and the in-depth workshop said they felt inspired and gained new insights about ChatGPT and AI.", reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" } },
];

// ── Video Object schema ──
export const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Ferry Hoes Speaker Reel",
  description: "Speaker reel for Ferry Hoes, international keynote speaker on AI, technology, and Brand Humanizing.",
  thumbnailUrl: "https://img.youtube.com/vi/foEehJ_pwck/maxresdefault.jpg",
  uploadDate: "2025-01-01",
  embedUrl: "https://www.youtube.com/embed/foEehJ_pwck",
  publisher: { "@type": "Person", name: "Ferry Hoes" },
};

// ── BlogPosting schema generator ──
export const blogPostingSchema = (post: {
  title: string; excerpt?: string | null; header_image_url?: string | null;
  published_at?: string | null; updated_at?: string; slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.excerpt || post.title,
  ...(post.header_image_url ? { image: post.header_image_url } : {}),
  author: { "@type": "Person", name: "Ferry Hoes", url: "https://ferryhoes.com" },
  publisher: { "@type": "Person", name: "Ferry Hoes", logo: { "@type": "ImageObject", url: "https://ferryhoes.com/og-image.jpg" } },
  datePublished: post.published_at || post.updated_at,
  dateModified: post.updated_at,
  mainEntityOfPage: { "@type": "WebPage", "@id": `https://ferryhoes.com/blog/${post.slug}` },
});

// ── ContactPage schema ──
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Book Ferry Hoes for Keynote Speaking",
  description: "Contact Ferry Hoes to book a keynote speaking engagement for your conference or corporate event.",
  url: "https://ferryhoes.com/contact",
  mainEntity: { "@type": "Person", name: "Ferry Hoes", jobTitle: "Keynote Speaker" },
};

// ── Press ItemList schema ──
export const pressItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ferry Hoes Media Kit: Downloadable Assets",
  description: "Headshots and media resources for journalists and event organisers.",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Portrait headshot", url: "https://ferryhoes.com/press" },
    { "@type": "ListItem", position: 2, name: "Speaking headshot", url: "https://ferryhoes.com/press" },
    { "@type": "ListItem", position: 3, name: "On stage with audience", url: "https://ferryhoes.com/press" },
    { "@type": "ListItem", position: 4, name: "Presenting headshot", url: "https://ferryhoes.com/press" },
  ],
};
