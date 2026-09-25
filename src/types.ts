export interface ColorSpec {
  name: string;
  role: string;
  hex: string;
  rgb: string;
  cmyk: string;
  pantone?: string;
  usageRule: string;
  previewClass?: string;
  textClass?: string;
}

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  supportedPrograms?: string[];
  isVisaExcluded?: boolean;
}

export interface PosterData {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: string;
  targetAudience: string;
  keyMessage: string;
  badge?: string;
  theme: 'navy' | 'orange' | 'gold' | 'verification' | 'bilingual';
  contentBlocks: {
    heading: string;
    points: string[];
  }[];
  officialFooter: string;
  officialContact: string;
  trustLine: string;
  image?: string;
}

export interface ContactInfo {
  brandName: string;
  tagline: string;
  owner: string;
  phone: string;
  formattedPhone: string;
  email: string;
  oldEmailDoNotUse: string;
  address: string;
  landmark: string;
  district: string;
  province: string;
  country: string;
  googleFocusLocations: string[];
  facebookUrl?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  category: 'pwwf' | 'admission' | 'verification' | 'parent';
  source: 'Facebook' | 'Google' | 'Direct Verification';
  verifiedBadge: string;
  comment: string;
  helpfulCount: number;
  officialReply?: string;
}
