export const company = {
  legalName: "Zohaib Bashir Technical Services",
  shortName: "Zohaib Bashir",
  tagline: "Technical Services",
  businessType: "Sole Establishment",
  licenseNo: "1009851",
  phoneDisplay: "+971 54 334 7187",
  phoneE164: "+971543347187",
  phoneHref: "tel:+971543347187",
  whatsappHref: "https://wa.me/971543347187",
  email: "ranaibrar119@gmail.com",
  emailHref: "mailto:ranaibrar119@gmail.com",
  officeLine1: "Dubai Investment Park 1",
  officeLine2: "Dubai, United Arab Emirates",
  city: "Dubai",
  country: "United Arab Emirates",
  countryCode: "AE",
  siteUrl: "https://www.zohaibbashirtechnical.com",
} as const;

export const socialLinks = {
  whatsapp: company.whatsappHref,
  phone: company.phoneHref,
  email: company.emailHref,
} as const;
