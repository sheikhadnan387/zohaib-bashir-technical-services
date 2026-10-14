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
  siteUrl: "https://www.zohaibbashirtechnical.com",
} as const;

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
