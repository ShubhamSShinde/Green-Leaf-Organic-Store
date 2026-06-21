export interface Product {
  id: string;
  name: string;
  category: string;
  price: number; // in INR
  unit: string;
  isFeatured: boolean;
  localNashikSource: string; // Detail onNashik location sourced
  description: string;
  stockStatus: 'In Stock' | 'Limited Stock' | 'Out of Stock';
  nutritionInfo?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  description: string;
  keyTask: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  replied?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  frequency: string;
  price: number;
  description: string;
  itemsIncluded: string[];
  tag: string;
  colorTheme: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  author: string;
  content: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
