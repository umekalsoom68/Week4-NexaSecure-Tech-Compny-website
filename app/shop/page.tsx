import Navbar from '@/components/shop/Navbar'
import Footer from '@/components/shop/Footer'
import ProductCard from '@/components/shop/ProductCard'
import { products, CATEGORIES } from '@/lib/data'

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-10">
        {/* Header */}
        <div className="mb-8">
          <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-1">All Products</p>
          <h1 className="font-display text-4xl font-bold text-slate-900">Shop All Shoes</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters sidebar */}
          <aside className="lg:w-52 shrink-0">
            <div className="card p-4 sticky top-20">
              <h3 className="font-semibold text-slate-900 text-sm mb-3">Categories</h3>
              <div className="space-y-1">
                {CATEGORIES.map(c => (
                  <button key={c} className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${c === 'All' ? 'bg-brand-500 text-white' : 'text-slate-600 hover:bg-brand-50 hover:text-brand-600'}`}>
                    {c}
                  </button>
                ))}
              </div>
              <div className="divider my-4"/>
              <h3 className="font-semibold text-slate-900 text-sm mb-3">Price Range</h3>
              <div className="space-y-2 text-sm text-slate-600">
                {['Under $100','$100 – $150','$150 – $200','Over $200'].map(r => (
                  <label key={r} className="flex items-center gap-2 cursor-pointer hover:text-brand-600">
                    <input type="checkbox" className="accent-brand-500"/> {r}
                  </label>
                ))}
              </div>
              <div className="divider my-4"/>
              <h3 className="font-semibold text-slate-900 text-sm mb-3">Sort By</h3>
              <select className="input text-sm py-1.5">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
                <option>Most Reviews</option>
              </select>
            </div>
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-slate-500">{products.length} products found</p>
              <div className="flex gap-2">
                <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:border-brand-300 hover:text-brand-500 transition-all">⊞</button>
                <button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:border-brand-300 hover:text-brand-500 transition-all">≡</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {products.map((p, i) => <ProductCard key={p.id} p={p} idx={i}/>)}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
