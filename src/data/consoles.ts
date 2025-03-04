export interface Console {
  id: number;
  name: string;
  logo: string;
  emuCount: number;
  slug: string;
  description: string;
}

export const consoles: Console[] = [
  {
    id: 1,
    name: 'Nintendo DS',
    logo: 'https://cache.downloadroms.io/static/6550cbbde8b4460941c9d18e2a19051f7c5dc035/image.png',
    emuCount: 7,
    slug: 'nintendo-ds',
    description: 'The Nintendo DS is a dual-screen handheld game console developed and released by Nintendo.'
  },
  {
    id: 2,
    name: 'PlayStation Portable',
    logo: 'https://cache.lategames.net/static/4b7d24f6d15fd0f5e1a98786c7fbead11f561b2a/image.png',
    emuCount: 4,
    slug: 'psp',
    description: 'The PlayStation Portable (PSP) is a handheld game console developed by Sony.'
  },
  {
    id: 3,
    name: 'Game Boy Advance',
    logo: 'https://cache.downloadroms.io/static/5d74210a7b801ab4af36cb8b89fb4e5ddac22701/image.pngc',
    emuCount: 6,
    slug: 'game-boy-advance',
    description: 'The Game Boy Advance is a 32-bit handheld game console developed by Nintendo.'
  },  {
    id: 1,
    name: 'Nintendo DS',
    logo: 'https://cache.downloadroms.io/static/6550cbbde8b4460941c9d18e2a19051f7c5dc035/image.png',
    emuCount: 7,
    slug: 'nintendo-ds',
    description: 'The Nintendo DS is a dual-screen handheld game console developed and released by Nintendo.'
  },
  {
    id: 2,
    name: 'PlayStation Portable',
    logo: 'https://cache.lategames.net/static/4b7d24f6d15fd0f5e1a98786c7fbead11f561b2a/image.png',
    emuCount: 4,
    slug: 'psp',
    description: 'The PlayStation Portable (PSP) is a handheld game console developed by Sony.'
  },
  {
    id: 3,
    name: 'Game Boy Advance',
    logo: 'https://cache.downloadroms.io/static/5d74210a7b801ab4af36cb8b89fb4e5ddac22701/image.pngc',
    emuCount: 6,
    slug: 'game-boy-advance',
    description: 'The Game Boy Advance is a 32-bit handheld game console developed by Nintendo.'
  },{
    id: 2,
    name: 'PlayStation Portable',
    logo: 'https://cache.lategames.net/static/4b7d24f6d15fd0f5e1a98786c7fbead11f561b2a/image.png',
    emuCount: 4,
    slug: 'psp',
    description: 'The PlayStation Portable (PSP) is a handheld game console developed by Sony.'
  },
  {
    id: 3,
    name: 'Game Boy Advance',
    logo: 'https://cache.downloadroms.io/static/5d74210a7b801ab4af36cb8b89fb4e5ddac22701/image.pngc',
    emuCount: 6,
    slug: 'game-boy-advance',
    description: 'The Game Boy Advance is a 32-bit handheld game console developed by Nintendo.'
  },
  // ... add more consoles (up to 20)
]; 