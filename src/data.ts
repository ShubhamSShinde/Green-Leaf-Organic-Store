import { Product, TeamMember, Review, SubscriptionPlan, BlogPost } from './types';

export const STORE_INFO = {
  name: 'Green Leaf Organic Store',
  owner: 'Neha Deshmukh',
  founded: 2020,
  address: 'Shop No. 7, College Road, Nashik, Maharashtra 422005',
  phone: '+91 75593 67115',
  email: 'hello@greenleaforganic.in',
  website: 'www.greenleaforganic.in',
  hours: '8:00 AM – 10:00 PM (Daily)',
  rating: 4.7,
  totalRatingCount: 342,
  whatsappNumber: '917559367115' // without '+' of formatted order
};

export const INSTALLED_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Organic Wheat Flour',
    category: 'Grains & Flours',
    price: 320,
    unit: '5 kg',
    isFeatured: true,
    localNashikSource: 'Sourced from organic fields in Niphad, Nashik',
    description: 'Stone-ground whole wheat flour retaining all fiber and natural nutrition. Zero chemical bleaches, high in gluten-absorbing capacity.',
    stockStatus: 'In Stock',
    nutritionInfo: 'Rich in Dietary Fiber, Protein, B-vitamins, and minerals.'
  },
  {
    id: 'p2',
    name: 'Cold-Pressed Groundnut Oil',
    category: 'Oils & Ghee',
    price: 290,
    unit: '1 L',
    isFeatured: true,
    localNashikSource: 'Pressed locally using traditional Chekku frames in Nashik',
    description: 'Extracted at low temperatures below 45°C. Retains natural nutty taste, golden colour, and high smoke-point ideal for Indian cooking.',
    stockStatus: 'In Stock',
    nutritionInfo: 'High in Monounsaturated Fats (MUFA), Vitamin E, and antioxidants.'
  },
  {
    id: 'p3',
    name: 'Organic Tur Dal',
    category: 'Pulses & Lentils',
    price: 180,
    unit: '1 kg',
    isFeatured: true,
    localNashikSource: 'Cultivated in Dindori valley, Nashik region',
    description: 'Unpolished pigeon pea lentils showcasing their organic earthy texture. Extremely quick cooking and uncompromised protein profile.',
    stockStatus: 'In Stock',
    nutritionInfo: 'Excellent plant protein source, rich in Iron and Folic Acid.'
  },
  {
    id: 'p4',
    name: 'Farm Fresh Eggs',
    category: 'Fresh Dairy & Eggs',
    price: 110,
    unit: '12 pcs',
    isFeatured: true,
    localNashikSource: 'Free-range poultry farm in Trimbakeshwar hills',
    description: 'Eggs from happy, hormone-free pasture-raised clean birds fed with standard organic greens and natural seeds.',
    stockStatus: 'In Stock',
    nutritionInfo: 'High Biological Value Protein, loaded with Vitamin D and B12.'
  },
  {
    id: 'p5',
    name: 'Mixed Fruit Basket',
    category: 'Fruits',
    price: 450,
    unit: '1 Basket (approx 4kg)',
    isFeatured: true,
    localNashikSource: 'Handpicked from fruit orchards in Sinnar and Niphad',
    description: 'An assortment of nutrient-loaded seasonal organic fruits: Pomegranates, table grapes, sweet limes, papayas, and Nashik guava.',
    stockStatus: 'Limited Stock',
    nutritionInfo: 'Abundant in Vitamin C, minerals, organic enzymes, and water weight.'
  },
  {
    id: 'p6',
    name: 'Organic Jaggery',
    category: 'Sweeteners',
    price: 95,
    unit: '1 kg',
    isFeatured: true,
    localNashikSource: 'Sugarcane cooperatives in Malegaon, Nashik',
    description: 'Non-chemical, unbleached golden jaggery crafted block-by-block. Highly effective healthy substitute for white processed sugar.',
    stockStatus: 'In Stock',
    nutritionInfo: 'Loaded with Iron, Magnesium, and helps digestive enzyme activation.'
  },
  // Additional items for rich shop list
  {
    id: 'p7',
    name: 'Premium Finger Millet (Ragi)',
    category: 'Grains & Flours',
    price: 85,
    unit: '1 kg',
    isFeatured: false,
    localNashikSource: 'Tribal farmers in Trimbak taluka',
    description: 'Rich whole-grain Ragi loaded with calcium. Ideal for nutritious baby food, ragi rotis, and breakfast porridges.',
    stockStatus: 'In Stock',
    nutritionInfo: 'Highest calcium content among cereals, exceptionally rich in amino acids.'
  },
  {
    id: 'p8',
    name: 'Desi Cow Bilona Ghee',
    category: 'Oils & Ghee',
    price: 850,
    unit: '500 ml',
    isFeatured: false,
    localNashikSource: 'Nashik Gaushala milk processing',
    description: 'Hand-churned A2 cow ghee cooked slowly using the traditional bilona method. Gives aromatic granules and supreme medicinal properties.',
    stockStatus: 'Limited Stock',
    nutritionInfo: 'Pure A2 Butterfats, butyric acid for gut health, Vitamins A, D, E, K.'
  },
  {
    id: 'p9',
    name: 'Organic Desi Tomato',
    category: 'Vegetables',
    price: 45,
    unit: '1 kg',
    isFeatured: false,
    localNashikSource: 'Local Nashik organic growers',
    description: 'Juicy, slightly tart desi tomatoes with rich natural seeds. Grown without pesticide sprays, harvested at peak vine ripeness.',
    stockStatus: 'In Stock',
    nutritionInfo: 'High Lycopene (antioxidant), Vitamin C, and Potassium.'
  },
  {
    id: 'p10',
    name: 'Fresh Organic Spinach',
    category: 'Vegetables',
    price: 35,
    unit: '250 g bunch',
    isFeatured: false,
    localNashikSource: 'Sharanpur eco-gardens, Nashik',
    description: 'Crispy green spinach leaves carefully harvested in the early morning. Washed with clean spring water and tied beautifully with jute.',
    stockStatus: 'In Stock',
    nutritionInfo: 'Exceptional source of Dietary Iron, Folate, and Lutein.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 't1',
    name: 'Neha Deshmukh',
    role: 'Founder & Certified Organic Specialist',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'With a background in Environmental Science from Pune University, Neha started Green Leaf to bridge Nashik’s organic farmers directly with urban consumers, promoting a chemical-free lifestyle.',
    keyTask: 'Farm verification, organic auditing, and farmer alliances.'
  },
  {
    id: 't2',
    name: 'Sagar Patil',
    role: 'Operations & Procurement Manager',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Sagar oversees warehouse sorting, packaging purity, and coordinates daily harvest collections from Niphad and Sinnar farms to Nashik College Road hub.',
    keyTask: 'Logistics control, cold-chain checks, and packaging standards.'
  },
  {
    id: 't3',
    name: 'Pooja Shinde',
    role: 'Customer Support Lead',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Pooja handles subscriptions, processes customized order requests, and manages customer satisfaction queries with her signature warm and helpful attitude.',
    keyTask: 'WhatsApp order processing, subscription customization, feedback loops.'
  },
  {
    id: 't4',
    name: 'Rohan More',
    role: 'Lead Delivery Executive',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    description: 'Knowing every alleyway of Nashik like the back of his hand, Rohan delivers fresh harvests to your doorstep daily in our clean, zero-waste packaging.',
    keyTask: 'Express door delivery, customer interaction, eco-bag collection.'
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Priya S.',
    rating: 5,
    comment: 'Fresh products and timely delivery. The fruits in the basket were extremely juicy and smelled exactly like natural organic orchards. Looking forward to my next weekly subscription!',
    date: '2026-05-18',
    verified: true,
    replied: 'Thank you Priya! We pick the fruits early morning from Niphad specifically to preserve that refreshing orchard smell!'
  },
  {
    id: 'r2',
    name: 'Amit K.',
    rating: 5,
    comment: 'Best organic store in Nashik with reasonable prices. The unpolished Tur Dal has rich authentic flavour and cooks beautifully. Glad to support our local regional Nashik farmers.',
    date: '2026-06-02',
    verified: true,
    replied: 'We appreciate it, Amit! Keeping prices fair for both you and our hardworking local growers is our core mission.'
  },
  {
    id: 'r3',
    name: 'Rajendra Joshi',
    rating: 4,
    comment: 'Consistent quality for cold-pressed groundnut oil. We have completely transitioned our family kitchen to Green Leaf. Jaggery is also great. Slightly queuey on Sunday evening but worth the wait.',
    date: '2026-06-10',
    verified: true
  },
  {
    id: 'r4',
    name: 'Meera Deshpande',
    rating: 5,
    comment: 'I subscribed to the Weekly Fresh Hamper and they customize it perfectly for my joint family. Beautiful chemical-free leafy greens. Customer response on WhatsApp is incredibly fast!',
    date: '2026-06-19',
    verified: true,
    replied: 'Thank you Meera! Pooja and the packing team pay personal attention to each joint family custom list!'
  }
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'sub1',
    name: 'Weekly Fresh Hamper',
    frequency: 'Per Week',
    price: 650,
    description: 'Perfect for small families looking to enjoy freshly harvested organic seasonal fruits & vegetables.',
    itemsIncluded: [
      '3 kg Assorted Seasonal Vegetables',
      '1.5 kg Fresh Local Nashik Fruits',
      '1 Bunch Organic Spinach or Coriander',
      'Eco-friendly express home delivery'
    ],
    tag: 'Popular',
    colorTheme: 'emerald'
  },
  {
    id: 'sub2',
    name: 'Daily Essentials Combo',
    frequency: 'Per Month',
    price: 1800,
    description: 'Ensure a pure, hormone-free supply of nutrition for your kitchen on demand every single week.',
    itemsIncluded: [
      '3 Dozen Pasture-Raised Eggs (weekly 12)',
      'Special cold-pressed cooking oil choice (1L)',
      '1 kg Unpolished Pulse of the month',
      'Guaranteed morning delivery slots'
    ],
    tag: 'Convenient',
    colorTheme: 'teal'
  },
  {
    id: 'sub3',
    name: 'Farm Fresh Organic Pantry',
    frequency: 'Per Month',
    price: 2490,
    description: 'Complete pantry overhaul with organic staples sourced directly from Nashik region cooperatives.',
    itemsIncluded: [
      '10 kg Stone-Ground Organic Wheat Flour',
      '2 kg Organic Tur Dal / Chana Dal combo',
      '2 kg Non-chemical Golden Jaggery blocks',
      '2 L Cold-Pressed Groundnut or Sunflower Oil',
      'Zero-waste cotton bag replacement kit'
    ],
    tag: 'Complete Value',
    colorTheme: 'amber'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Unlocking the Power of Millets: Nashik’s Ancient Superfood',
    date: 'June 15, 2026',
    readTime: '4 min read',
    excerpt: 'Millet cultivation is returning to the roots of Nashik valleys. Explore the nutritional density of Finger Millet (Ragi) and how it aids digestion.',
    category: 'Nutrition',
    author: 'Neha Deshmukh',
    content: [
      'Millets have played a central role in traditional Indian plates for millennials, but recent agricultural industrialization drifted us away. Today, Nashik cooperatives are witnessing a silent revolution where organic tribal communities are harvesting Finger Millet (Ragi) and Pearl Millet (Bajra) under rainfed conditions.',
      'Unlike white rice or processed flour, millets are whole grains packed with complex carbohydrates and incredible dietary fiber. Ragi contains up to 10 times more calcium than wheat or polished rice. This slow-absorbing glycemic profile prevents sudden insulin spikes, making it an excellent pantry addition for diabetics and fitness enthusiastic individuals.',
      'At Green Leaf, we collaborate directly with farmers in Trimbak highlands to clean and sun-dry Ragi grains without polished chemical glazes, keeping their fibrous outer coat pristine. Consider adding Ragi-based chilla, porridge, or rotis into your weekly meals to experience increased stamina and gut ease.'
    ]
  },
  {
    id: 'b2',
    title: 'Why Cold-Pressed Oils Stand Superior to Refined Alternatives',
    date: 'May 28, 2026',
    readTime: '3 min read',
    excerpt: 'Deep-dive into the thermal changes that destroy nutrients in highly refined oils, and how low-temperature wooden pressings benefit your heart.',
    category: 'Sustainable Cooking',
    author: 'Sagar Patil',
    content: [
      'Have you ever wondered why commercial refined oils look completely uniform, crystal clear, and odorless? The answer lies in intensive chemical treatment. Refined oils are subjected to temperatures exceeding 200°C, chemical hexane solvents, bleaching agents, and synthetic deodorizers to increase shelf-life and neutralize low-quality seed defects.',
      'This extreme heat completely breaks the molecular integrity of the fats, destroying vital Vitamin E, essential fatty acids, and natural phytosterols, transforming wholesome seeds into empty lipids.',
      'Cold-pressed extraction (Lakdi Ghana or Chekku), on the other hand, utilizes a heavy wooden pestle sliding gently at slow speeds. This friction-only technique ensures temperatures never cross 40-45°C. The oil squeezed matches the exact biological structure found within the groundnuts. It retains its genuine light yellowish hue, deep earthy peanut aroma, and natural antioxidant layers which protect cells from oxidation.',
      'Switching to cold-pressed groundnut or mustard oil is a powerful change you can make today to support cholesterol management and clean cellular well-being.'
    ]
  },
  {
    id: 'b3',
    title: 'Ditching Pesticides: How Direct Farmer Alliances Revive Our Soil',
    date: 'April 14, 2026',
    readTime: '5 min read',
    excerpt: 'Our soil is a living entity, not a sterile medium. Discover how our farmers use Jeevamrutha and organic techniques in Niphad and Sinnar fields.',
    category: 'Organic Farming',
    author: 'Neha Deshmukh',
    content: [
      'Sustaining the soil biology is the cornerstone of organic farming. Decades of heavy mineral fertilizers and synthetic chemical sprays have hardened clay soils, killed earthworm populations, and contaminated groundwater reservoirs in major Nashik farming strips.',
      'At Green Leaf, our supplier-farmers in Niphad and Malegaon practice the principles of Zero Budget Natural Farming. Instead of chemically active NPK solutions, they brew "Jeevamrutha" — a fermented culture of cow dung, cow urine, pulse flour, and forest soil which multiplies beneficial native microbes exponentially within 72 hours of soil spraying.',
      'These microbes act as natural mining workers, dissolving solid minerals so that plants can naturally drink calcium, phosphorus, and zinc on their own. This results in crops with greater mineral density, deeper sweetness, and high resistance. When you buy our organic produce, you are directly funding the physical restoration of Maharashtra’s rich agricultural mother soil.'
    ]
  }
];
