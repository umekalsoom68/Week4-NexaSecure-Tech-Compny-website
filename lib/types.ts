export interface Product {
  id: number
  name: string
  brand: string
  category: 'Running' | 'Casual' | 'Luxury' | 'Sports' | 'Formal'
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  description: string
  sizes: string[]
  colors: { name: string; hex: string }[]
  images: string[]
  inStock: boolean
  badge?: string
  featured?: boolean
}

export interface Order {
  id: string
  customer: string
  email: string
  product: string
  amount: number
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
  date: string
  items: number
}

export interface Customer {
  id: number
  name: string
  email: string
  orders: number
  spent: number
  joined: string
  status: 'Active' | 'Inactive'
}

export interface DashboardStats {
  totalRevenue: number
  totalOrders: number
  totalProducts: number
  totalCustomers: number
  revenueGrowth: number
  ordersGrowth: number
}
