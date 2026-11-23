export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'black' | 'white' | 'signature' | 'mocktail';
  description?: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  tag?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  moment: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'atmosphere' | 'drinks' | 'moments';
  image: string;
  description: string;
  featured?: boolean;
  aspect?: 'tall' | 'wide' | 'square';
}
