export const company = {
  legalName: "Zohaib Bashir Technical Services",
  shortName: "Zohaib Bashir",
  tagline: "Technical Services",
  businessType: "Sole Establishment",
  licenseNo: "1009851",
  phoneDisplay: "+971 58 817 0040",
  phoneE164: "+971588170040",
  phoneHref: "tel:+971588170040",
  whatsappHref: "https://wa.me/971588170040",
  // Forwards to the business Gmail (cPanel forwarder). Also forwarded: sales@, quotes@.
  email: "info@zohaibbashirtechnicalservices.com",
  emailHref: "mailto:info@zohaibbashirtechnicalservices.com",
  officeLine1: "Dubai Investment Park 1",
  officeLine2: "Dubai, United Arab Emirates",
  city: "Dubai",
  country: "United Arab Emirates",
  countryCode: "AE",
  siteUrl: "https://zohaibbashirtechnicalservices.com",
  // Approximate centre of Dubai Investment Park 1 — replace with the exact office pin.
  geo: { latitude: 24.985, longitude: 55.17 },
  // Client-confirmed (Oct 2026).
  foundingYear: 2021,
  whatsappHours: "7am – 12am",
} as const;

/**
 * Client-confirmed proof points for the "Why Choose Us" section.
 * Each renders only when set. See CLIENT-QUESTIONNAIRE.md — do not guess these.
 */
export const proofPoints: {
  responseTime: string | null; // e.g. "WhatsApp replies within 30 minutes, 8am–8pm"
  guarantee: string | null; // e.g. "Workmanship guaranteed for 12 months"
  established: string | null; // e.g. "Serving Dubai since 2018"
} = {
  responseTime: "WhatsApp replies every day, 7am to 12am",
  guarantee: "Fixed written quote, no hidden charges. Not happy? Tell us within 48 hours and we come back to fix it free.",
  established: "Serving Dubai since 2021",
};

// Areas shown in the "Serving Dubai" section — confirmed by the client (Oct 2026).
export const serviceAreas = [
  "Downtown Dubai",
  "Business Bay",
  "Dubai Creek Harbour",
  "Nad Al Sheba",
  "Dubai Hills Estate",
  "Jumeirah Village Circle (JVC)",
  "Jumeirah Village Triangle (JVT)",
  "Jumeirah Park",
  "Jumeirah Lake Towers (JLT)",
  "Dubai Marina",
  "Jumeirah Beach Residence (JBR)",
  "Bluewaters Island",
  "Arabian Ranches",
  "DAMAC Hills",
  "The Springs",
  "The Meadows",
  "Town Square",
  "Mira Oasis",
] as const;

export const socialLinks = {
  whatsapp: company.whatsappHref,
  phone: company.phoneHref,
  email: company.emailHref,
} as const;
