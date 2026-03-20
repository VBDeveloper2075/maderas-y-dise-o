export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  location?: string;
  mainImage: SanityImage;
  images?: SanityImage[];
  description?: string;
}
