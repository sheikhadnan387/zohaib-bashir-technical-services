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
  email: "Raiswaris777@gmail.com",
  emailHref: "mailto:Raiswaris777@gmail.com",
  officeLine1: "Dubai Investment Park 1",
  officeLine2: "Dubai, United Arab Emirates",
  city: "Dubai",
  country: "United Arab Emirates",
  countryCode: "AE",
  siteUrl: "https://zohaibbashirtechnicalservices.com",
  // Approximate centre of Dubai Investment Park 1 — replace with the exact office pin.
  geo: { latitude: 24.985, longitude: 55.17 },
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
  responseTime: null,
  guarantee: null,
  established: null,
};

// Areas shown in the "Serving Dubai" section — confirm with the client.
export const serviceAreas = [
  "Dubai Investment Park",
  "Jumeirah Village Circle",
  "Dubai Marina",
  "Business Bay",
  "Downtown Dubai",
  "Arabian Ranches",
  "Dubai Hills",
  "Jumeirah",
  "Al Barsha",
  "Dubai Silicon Oasis",
  "Motor City",
  "Mirdif",
] as const;

export const socialLinks = {
  whatsapp: company.whatsappHref,
  phone: company.phoneHref,
  email: company.emailHref,
} as const;
