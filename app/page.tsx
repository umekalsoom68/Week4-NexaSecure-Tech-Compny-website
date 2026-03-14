import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/shop/Navbar'
import Footer from '@/components/shop/Footer'
import ProductCard from '@/components/shop/ProductCard'
import { getFeatured, CATEGORIES } from '@/lib/data'

export default function HomePage() {
  const featured = getFeatured()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-96 h-96 bg-brand-500 rounded-full blur-[120px]"/>
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-orange-400 rounded-full blur-[100px]"/>
        </div>
        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="anim-up">
            <span className="badge badge-orange mb-5 inline-flex">New Collection 2025</span>
            <h1 className="font-display text-[3.2rem] lg:text-[4.5rem] font-bold leading-none text-white mb-5">
              Every Step.<br/>
              <span className="text-brand-400">Perfectly</span> Crafted.
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-md mb-8">
              Premium footwear engineered for performance and crafted for style. From the track to the boardroom — HomeFit Ware has your next step covered.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/shop"><button className="btn-primary px-8 py-3 text-base">Shop Now →</button></Link>
              <Link href="/about"><button className="btn-outline px-8 py-3 text-base border-white/20 text-white hover:bg-white/10">Our Story</button></Link>
            </div>
            <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
              {[['10K+','Happy Customers'],['8','Collections'],['4.8★','Avg Rating']].map(([val,lbl])=>(
                <div key={lbl}>
                  <p className="text-2xl font-bold font-display text-brand-400">{val}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative anim-up d3 hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                alt="Hero shoe" fill className="object-contain drop-shadow-2xl" sizes="500px"/>
              {/* Floating cards */}
              <div className="absolute -left-8 top-16 card p-3 shadow-card-hover anim-slide d4">
                <p className="text-xs text-slate-500 font-medium">Best Seller</p>
                <p className="font-display font-bold text-slate-900 text-sm">AirStride Pro</p>
                <p className="text-brand-500 font-bold text-sm mt-0.5">$129.99</p>
              </div>
              <div className="absolute -right-4 bottom-20 card p-3 shadow-card-hover anim-slide d5">
                <div className="flex items-center gap-2">
                  <span className="stars text-sm">★★★★★</span>
                  <span className="text-xs font-bold text-slate-700">4.8</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">2,341 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16">
        <div className="text-center mb-10">
          <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-2">Browse by Type</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900">Shop by Category</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {CATEGORIES.filter(c => c !== 'All').map((cat, i) => {
            const emoji: Record<string,string> = { Running:'🏃', Casual:'👟', Luxury:'✨', Sports:'⚽', Formal:'👔' }
            return (
              <Link key={cat} href="/shop" className={`anim-up d${i+1}`}>
                <div className="card px-5 py-3 flex items-center gap-3 cursor-pointer hover:border-brand-300 hover:bg-brand-50 transition-all group">
                  <span className="text-xl">{emoji[cat]}</span>
                  <span className="font-medium text-sm text-slate-700 group-hover:text-brand-600">{cat}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-1">Hand-Picked</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-slate-900">Featured Collection</h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-brand-500 hover:text-brand-600 flex items-center gap-1">
            View All <span>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => <ProductCard key={p.id} p={p} idx={i}/>)}
        </div>
      </section>

      {/* ── BANNER ── */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-500 to-orange-400 p-10 lg:p-14 text-white">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full"/>
          <div className="absolute right-20 bottom-0 w-32 h-32 bg-white/10 rounded-full"/>
          <div className="relative max-w-xl">
            <p className="text-white/80 text-sm font-medium uppercase tracking-widest mb-3">Limited Time Offer</p>
            <h3 className="font-display text-3xl lg:text-4xl font-bold mb-4">Up to 30% Off<br/>Selected Styles</h3>
            <p className="text-white/80 mb-6">Grab your favourite pair before stock runs out. New deals added weekly.</p>
            <Link href="/shop"><button className="bg-white text-brand-600 font-semibold px-7 py-3 rounded-lg hover:bg-slate-50 transition-colors">Shop Sale →</button></Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <h2 className="font-display text-3xl font-bold text-slate-900 text-center mb-10">Why HomeFit Ware?</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon:'🚚', title:'Free Shipping', sub:'On all orders over $100' },
              { icon:'↩️', title:'30-Day Returns', sub:'Hassle-free return policy' },
              { icon:'🛡️', title:'Authentic Only', sub:'100% genuine products' },
              { icon:'💬', title:'24/7 Support', sub:'Always here to help you' },
            ].map((f, i) => (
              <div key={f.title} className={`text-center anim-up d${i+1}`}>
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-3 text-2xl">{f.icon}</div>
                <h4 className="font-semibold text-slate-900 mb-1 text-sm">{f.title}</h4>
                <p className="text-xs text-slate-500">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
