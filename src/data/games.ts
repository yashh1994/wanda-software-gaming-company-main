export interface Game {
  id: string;
  title: string;
  genre: string;
  rating: number;
  downloads: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  screenshots: string[];
  systemRequirements: {
    minimum: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
    recommended: {
      os: string;
      processor: string;
      memory: string;
      graphics: string;
      storage: string;
    };
  };
  videoUrl?: string;
  downloadUrl: string;
  releaseDate: string;
  lastUpdate: string;
  thumbnail: string;
}

export const games: Game[] = [
  {
    id: 'truckers-europe-3',
    title: 'Truckers of Europe 3',
    genre: 'Simulation',
    rating: 4.8,
    downloads: '5M+',
    shortDescription: 'The most realistic truck driving simulation with European routes and authentic vehicles.',
    fullDescription: 'Experience the ultimate trucking adventure across Europe with our most advanced simulation engine yet. Drive authentic trucks through meticulously recreated European cities and highways, managing your cargo, fuel, and driving time according to real traffic regulations.',
    features: [
      'Realistic truck physics and handling',
      '15+ European countries to explore',
      '50+ authentic truck models',
      'Dynamic weather and day/night cycles',
      'Economic management system',
      'Multiplayer convoy mode',
      'Mod support for custom content',
      'VR compatibility'
    ],
    screenshots: [
      'https://play-lh.googleusercontent.com/4B1BdBtOBkw_Fq7DOblCNjmA1snJG2ZQdwpvc3Lb-v9KG0q5UFEWaNklpopMGvm3PJw=w5120-h2880-rw',
      'https://play-lh.googleusercontent.com/JAPmJZvxFHe04NPyeGsiNXSsu8WThasFKUsBH1Vb2HkJRcBnBblS0Gr_UzQZVNyI8cYc=w5120-h2880-rw',
      'https://play-lh.googleusercontent.com/ypgEpiqrz7uzhhQvZ6w_Y9fng2FY0bRzwIXSJI3tjTEnTrKyuBX9zuWeMTJaKOWY4gBr=w1052-h592-rw'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4460 / AMD FX-6300',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 750 Ti / AMD Radeon R7 260X',
        storage: '25 GB available space'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        processor: 'Intel Core i7-8700K / AMD Ryzen 5 3600',
        memory: '16 GB RAM',
        graphics: 'NVIDIA GTX 1660 / AMD RX 580',
        storage: '35 GB available space'
      }
    },
    downloadUrl: '#',
    releaseDate: '2024-03-15',
    lastUpdate: '2024-12-01',
    thumbnail: 'https://play-lh.googleusercontent.com/cljHXoByAw7vRthvZIlhKQx-YEg-lziCcY1cd2Vcei6-mSX3miupy4oiIe0L9lN2fI4=w5120-h2880-rw'
  },
  {
    id: 'truckers-europe-2',
    title: 'Truckers of Europe 2',
    genre: 'Simulation',
    rating: 4.6,
    downloads: '10M+',
    shortDescription: 'The classic trucking simulation that started it all, now with enhanced graphics.',
    fullDescription: 'The beloved trucking simulator that captured millions of hearts worldwide. Drive through iconic European routes with improved graphics and gameplay mechanics.',
    features: [
      'Classic trucking gameplay',
      '25+ truck models',
      '10 European countries',
      'Career progression system',
      'Realistic damage system',
      'Weather effects',
      'Radio stations',
      'Achievement system'
    ],
    screenshots: [
    'https://play-lh.googleusercontent.com/Vrj2_2DTCP8BKPSjg2vnwxNVkgF0ngKrhjK5gTwQwTKSgYEb96tA-73jsrrUJ_U6vZQ=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/QOOCL9stfdIn7Mhv7SZRh1r1NOjxUDjEEQWM8VmLTIleJRSZD0OeTD9UlGY9DS72nXA=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/353w92ETI73FoFGTffwiXxswMpMaHLXMPhbBqDl-ZRWgM7AuK7QUhU64RMiULXQJFYSD=w1052-h592-rw'  
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-4130 / AMD FX-4300',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GTX 650 / AMD Radeon HD 7750',
        storage: '15 GB available space'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600K / AMD Ryzen 3 2300X',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1050 / AMD RX 560',
        storage: '20 GB available space'
      }
    },
    downloadUrl: '#',
    releaseDate: '2022-08-20',
    lastUpdate: '2024-11-15',
    thumbnail: 'https://play-lh.googleusercontent.com/353w92ETI73FoFGTffwiXxswMpMaHLXMPhbBqDl-ZRWgM7AuK7QUhU64RMiULXQJFYSD=w5120-h2880-rw'
  },
  {
    id: 'farm-life-simulator',
    title: 'Truckers of Europe',
   genre: 'Simulation',
    rating: 4.8,
    downloads: '5M+',
    shortDescription: 'The most realistic truck driving simulation with European routes and authentic vehicles.',
    fullDescription: 'Experience the ultimate trucking adventure across Europe with our most advanced simulation engine yet. Drive authentic trucks through meticulously recreated European cities and highways, managing your cargo, fuel, and driving time according to real traffic regulations.',
     features: [
      'Crop cultivation system',
      'Livestock management',
      'Seasonal weather cycles',
      'Agricultural equipment',
      'Market trading system',
      'Farm customization',
      'Cooperative multiplayer',
      'Mod support'
    ],
    screenshots: [
    'https://play-lh.googleusercontent.com/xwC1hk-KWKNHm118imLo65QmR4K4pgrq9-76n1ACadJvlzFGGfJnkwt08A7PDcHfiZI=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/hahY4ads5HHqq_ixylnaR2ZinVtzzEaNxRwpckro3-Z7DuftG2jNlRYjn0zN7ES-hA=w1052-h592-rw',
    'https://play-lh.googleusercontent.com/PlW6cvUPB9L4CMiILtv5wxydAojYC7cDD3qcM6p6ztJHsFNn6ixLSdZUzo2OW62cNA=w1052-h592-rw'
    ],
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i3-6100 / AMD FX-4300',
        memory: '4 GB RAM',
        graphics: 'NVIDIA GTX 750 / AMD Radeon R7 250',
        storage: '12 GB available space'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-8400 / AMD Ryzen 5 2600',
        memory: '8 GB RAM',
        graphics: 'NVIDIA GTX 1050 Ti / AMD RX 570',
        storage: '18 GB available space'
      }
    },
    downloadUrl: '#',
    releaseDate: '2023-11-08',
    lastUpdate: '2024-12-05',
    thumbnail: 'https://play-lh.googleusercontent.com/teZX76az2KoC2zNZWVRVGV4qo_5tQA8-a9BCjAsvCY2B0BlBcLK7MFnO8o3IWUMZSw=w5120-h2880-rw'
  }
];

export const newsArticles = [
  {
    id: '1',
    title: 'Truckers of Europe 3 - Major Update 2.1 Now Available',
    date: '2024-12-01',
    excerpt: 'New trucks, improved physics engine, and expanded multiplayer features.',
    content: 'We are excited to announce the release of Update 2.1 for Truckers of Europe 3...',
    image: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '2',
    title: 'Community Event: European Convoy Championship',
    date: '2024-11-25',
    excerpt: 'Join thousands of players in our biggest multiplayer event yet.',
    content: 'Get ready for the most exciting trucking event of the year...',
    image: 'https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: '3',
    title: 'Farm Life Simulator - Seasonal Update',
    date: '2024-11-20',
    excerpt: 'Experience authentic seasonal farming with our latest update.',
    content: 'The harvest season is here with new crops, weather patterns...',
    image: 'https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];