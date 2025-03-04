export interface Emulator {
  id: number;
  name: string;
  logo: string;
  console: string;
  consoleSlug: string;
  description: string;
  rating: number;
  ratingCount: number;
  os: string;
  views: number;
  downloads: number;
  fileSize: string;
  slug: string;
  screenshots: string[];
}

export const emulators: Emulator[] = [
  {
    id: 1,
    name: 'DeSmuME',
    logo: '/images/emulators/desmume.png',
    console: 'Nintendo DS',
    consoleSlug: 'nintendo-ds',
    description: 'DeSmuME is a Nintendo DS emulator that allows you to play Nintendo DS games on your computer.',
    rating: 4.7,
    ratingCount: 245,
    os: 'Windows, macOS, Linux',
    views: 15000,
    downloads: 8500,
    fileSize: '25.3 MB',
    slug: 'desmume',
    screenshots: [
      '/images/emulators/desmume-1.png',
      '/images/emulators/desmume-2.png',
      '/images/emulators/desmume-3.png'
    ]
  },
  // ... add more emulators (up to 20)
]; 