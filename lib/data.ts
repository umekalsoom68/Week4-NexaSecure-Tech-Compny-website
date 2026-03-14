import { Product, Order, Customer, DashboardStats } from './types'

export const products: Product[] = [
  {
    id: 1,
    name: 'AirStride Pro Runner',
    brand: 'HomeFit Ware',
    category: 'Running',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.8,
    reviewCount: 2341,
    description: 'Engineered for the serious runner. Ultra-lightweight foam midsole delivers responsive cushioning mile after mile. Breathable mesh upper keeps you cool and comfortable.',
    sizes: ['6','7','8','9','10','11','12'],
    colors: [{ name: 'Midnight Black', hex: '#1a1a2e' }, { name: 'Arctic White', hex: '#f0f4f8' }, { name: 'Ember Orange', hex: '#f97316' }],
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80',
      'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80',
    ],
    inStock: true, badge: 'Best Seller', featured: true,
  },
  {
    id: 2,
    name: 'Urban Comfort Slip-On',
    brand: 'HomeFit Ware',
    category: 'Casual',
    price: 89.99,
    rating: 4.6,
    reviewCount: 1876,
    description: 'All-day comfort meets effortless style. Memory foam insole and flexible outsole make these the perfect everyday companion.',
    sizes: ['6','7','8','9','10','11'],
    colors: [{ name: 'Tan', hex: '#c8a882' }, { name: 'Navy', hex: '#2c3e6b' }, { name: 'Olive', hex: '#6b7c3e' }],
    images: [
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80',
      'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80',
    ],
    inStock: true, featured: true,
  },
  {
    id: 3,
    name: 'Luxe Leather Oxford',
    brand: 'HomeFit Ware',
    category: 'Luxury',
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.9,
    reviewCount: 543,
    description: 'Hand-crafted from full-grain Italian leather. A timeless silhouette with modern refinements — for those who demand excellence.',
    sizes: ['7','8','9','10','11','12'],
    colors: [{ name: 'Cognac', hex: '#8b4513' }, { name: 'Black', hex: '#1a1a1a' }, { name: 'Dark Brown', hex: '#4a2c0a' }],
    images: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80',
      'https://images.unsplash.com/photo-1582897085656-c636d006a246?w=800&q=80',
    ],
    inStock: true, badge: 'Premium', featured: true,
  },
  {
    id: 4,
    name: 'PowerBoost Training Shoe',
    brand: 'HomeFit Ware',
    category: 'Sports',
    price: 109.99,
    originalPrice: 139.99,
    rating: 4.7,
    reviewCount: 987,
    description: 'Maximum support for gym sessions, HIIT workouts, and everything in between. Lateral stability wings and cushioned collar keep you locked in.',
    sizes: ['6','7','8','9','10','11','12','13'],
    colors: [{ name: 'Stealth Grey', hex: '#4a5568' }, { name: 'Volt Green', hex: '#84cc16' }, { name: 'Red Alert', hex: '#ef4444' }],
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80',
      'https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80',
    ],
    inStock: true, badge: 'New',
  },
  {
    id: 5,
    name: 'CloudWalk Sneaker',
    brand: 'HomeFit Ware',
    category: 'Casual',
    price: 74.99,
    rating: 4.5,
    reviewCount: 3210,
    description: 'Walk on clouds. Our proprietary CloudFoam technology provides unparalleled softness with every step. Perfect for long days on your feet.',
    sizes: ['5','6','7','8','9','10','11'],
    colors: [{ name: 'Cloud White', hex: '#f8fafc' }, { name: 'Sky Blue', hex: '#7dd3fc' }, { name: 'Rose', hex: '#fda4af' }],
    images: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80',
    ],
    inStock: true,
  },
  {
    id: 6,
    name: 'Executive Derby',
    brand: 'HomeFit Ware',
    category: 'Formal',
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.8,
    reviewCount: 421,
    description: 'Command the boardroom. Sleek silhouette, Goodyear welt construction, and a cushioned insole for all-day comfort during long meetings.',
    sizes: ['7','8','9','10','11','12'],
    colors: [{ name: 'Jet Black', hex: '#0a0a0a' }, { name: 'Mahogany', hex: '#6b2d0a' }],
    images: [
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80',
      'https://images.unsplash.com/photo-1612623169530-e7b97e060509?w=800&q=80',
    ],
    inStock: true, badge: 'Sale',
  },
  {
    id: 7,
    name: 'TrailBlaze Hiker',
    brand: 'HomeFit Ware',
    category: 'Sports',
    price: 149.99,
    rating: 4.7,
    reviewCount: 654,
    description: 'Conquer any terrain. Waterproof membrane, aggressive lugged outsole, and ankle support that keeps you going further.',
    sizes: ['7','8','9','10','11','12','13'],
    colors: [{ name: 'Earth Brown', hex: '#92400e' }, { name: 'Forest Green', hex: '#166534' }, { name: 'Slate Grey', hex: '#475569' }],
    images: [
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    ],
    inStock: true,
  },
  {
    id: 8,
    name: 'Velvet Loafer',
    brand: 'HomeFit Ware',
    category: 'Luxury',
    price: 219.99,
    rating: 4.9,
    reviewCount: 312,
    description: 'Italian velvet upper on a leather sole — the ultimate in smart-casual luxury. From evening dinners to gallery openings.',
    sizes: ['7','8','9','10','11'],
    colors: [{ name: 'Deep Burgundy', hex: '#7c1d3f' }, { name: 'Midnight Navy', hex: '#1e3a5f' }, { name: 'Forest', hex: '#1a4731' }],
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    ],
    inStock: false, badge: 'Limited',
  },
]

export const orders: Order[] = [
  { id: 'HFW-1001', customer: 'Ahmed Khan',     email: 'ahmed@email.com',   product: 'AirStride Pro Runner',  amount: 129.99, status: 'Delivered',   date: '2025-03-10', items: 1 },
  { id: 'HFW-1002', customer: 'Sara Ali',       email: 'sara@email.com',    product: 'Luxe Leather Oxford',   amount: 249.99, status: 'Shipped',     date: '2025-03-11', items: 1 },
  { id: 'HFW-1003', customer: 'Bilal Hussain',  email: 'bilal@email.com',   product: 'CloudWalk Sneaker',     amount: 149.98, status: 'Processing',  date: '2025-03-12', items: 2 },
  { id: 'HFW-1004', customer: 'Fatima Sheikh',  email: 'fatima@email.com',  product: 'Urban Comfort Slip-On', amount: 89.99,  status: 'Pending',     date: '2025-03-12', items: 1 },
  { id: 'HFW-1005', customer: 'Omar Farooq',    email: 'omar@email.com',    product: 'PowerBoost Training',   amount: 219.98, status: 'Delivered',   date: '2025-03-09', items: 2 },
  { id: 'HFW-1006', customer: 'Ayesha Malik',   email: 'ayesha@email.com',  product: 'Executive Derby',       amount: 189.99, status: 'Cancelled',   date: '2025-03-08', items: 1 },
  { id: 'HFW-1007', customer: 'Usman Raza',     email: 'usman@email.com',   product: 'TrailBlaze Hiker',      amount: 149.99, status: 'Shipped',     date: '2025-03-11', items: 1 },
  { id: 'HFW-1008', customer: 'Hina Baig',      email: 'hina@email.com',    product: 'Velvet Loafer',         amount: 219.99, status: 'Processing',  date: '2025-03-12', items: 1 },
]

export const customers: Customer[] = [
  { id: 1, name: 'Ahmed Khan',    email: 'ahmed@email.com',   orders: 5,  spent: 649.95,  joined: '2024-08-15', status: 'Active'   },
  { id: 2, name: 'Sara Ali',      email: 'sara@email.com',    orders: 3,  spent: 549.97,  joined: '2024-09-20', status: 'Active'   },
  { id: 3, name: 'Bilal Hussain', email: 'bilal@email.com',   orders: 8,  spent: 1124.92, joined: '2024-07-01', status: 'Active'   },
  { id: 4, name: 'Fatima Sheikh', email: 'fatima@email.com',  orders: 2,  spent: 219.98,  joined: '2024-11-10', status: 'Active'   },
  { id: 5, name: 'Omar Farooq',   email: 'omar@email.com',    orders: 1,  spent: 89.99,   joined: '2025-01-05', status: 'Inactive' },
  { id: 6, name: 'Ayesha Malik',  email: 'ayesha@email.com',  orders: 6,  spent: 879.94,  joined: '2024-06-22', status: 'Active'   },
  { id: 7, name: 'Usman Raza',    email: 'usman@email.com',   orders: 4,  spent: 599.96,  joined: '2024-10-14', status: 'Active'   },
  { id: 8, name: 'Hina Baig',     email: 'hina@email.com',    orders: 2,  spent: 409.98,  joined: '2025-02-01', status: 'Active'   },
]

export const stats: DashboardStats = {
  totalRevenue: 48750,
  totalOrders: 342,
  totalProducts: 8,
  totalCustomers: 156,
  revenueGrowth: 18.5,
  ordersGrowth: 12.3,
}

export const getProductById = (id: number) => products.find(p => p.id === id)
export const getFeatured = () => products.filter(p => p.featured)
export const getByCategory = (cat: string) => products.filter(p => p.category === cat)
export const getRelated = (id: number) => products.filter(p => p.id !== id).slice(0, 4)

export const CATEGORIES = ['All', 'Running', 'Casual', 'Luxury', 'Sports', 'Formal']

export const monthlyRevenue = [
  { month: 'Sep', revenue: 28400 },
  { month: 'Oct', revenue: 32100 },
  { month: 'Nov', revenue: 38700 },
  { month: 'Dec', revenue: 45200 },
  { month: 'Jan', revenue: 41800 },
  { month: 'Feb', revenue: 44300 },
  { month: 'Mar', revenue: 48750 },
]
