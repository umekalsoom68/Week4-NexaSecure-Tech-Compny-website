import Navbar from '@/components/shop/Navbar'
import Footer from '@/components/shop/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const team = [
    { name: 'James Carter',   role: 'Founder & CEO',        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80' },
    { name: 'Sofia Rahman',   role: 'Head of Design',        img: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&q=80' },
    { name: 'David Park',     role: 'Lead Engineer',         img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80' },
    { name: 'Amina Hassan',   role: 'Customer Experience',   img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-display text-[3rem] lg:text-[4rem] font-bold leading-tight mb-5">
            Built on Passion.<br/>Refined by Purpose.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            HomeFit Ware was founded with one belief — that great footwear should never compromise between comfort, style, and durability.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="anim-up">
          <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-3">Who We Are</p>
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-5">More Than Just Shoes</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Founded in 2020, HomeFit Ware started as a small workshop with a simple goal: craft footwear that performs as well as it looks. Today, we serve customers across 50+ countries.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Every pair is engineered with premium materials, tested by real athletes, and designed by passionate footwear experts. We believe your shoes should work as hard as you do.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
            {[['2020','Founded'],['50+','Countries'],['10K+','Customers']].map(([v,l])=>(
              <div key={l}>
                <p className="font-display text-3xl font-bold text-brand-500">{v}</p>
                <p className="text-sm text-slate-500 mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card overflow-hidden aspect-video anim-in">
          <Image
            src="https://images.unsplash.com/photo-1556906781-9a412961a28c?w=800&q=80"
            alt="Our story" width={700} height={400} className="w-full h-full object-cover"/>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="text-center mb-12">
            <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-2">What Drives Us</p>
            <h2 className="font-display text-3xl font-bold text-slate-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon:'🎯', title:'Precision', desc:'Every stitch, every sole, every seam is crafted with exacting standards.' },
              { icon:'♻️', title:'Sustainability', desc:'Committed to eco-friendly materials and responsible manufacturing.' },
              { icon:'💡', title:'Innovation', desc:'Constantly pushing boundaries in materials and design technology.' },
              { icon:'🤝', title:'Community', desc:'Supporting athletes, artists, and everyday people around the world.' },
            ].map((v, i) => (
              <div key={v.title} className={`card p-6 text-center anim-up d${i+1}`}>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-20">
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm font-semibold tracking-widest uppercase mb-2">The People</p>
          <h2 className="font-display text-3xl font-bold text-slate-900">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <div key={m.name} className={`text-center anim-up d${i+1}`}>
              <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-3 shadow-card">
                <Image src={m.img} alt={m.name} width={96} height={96} className="w-full h-full object-cover"/>
              </div>
              <h4 className="font-display font-semibold text-slate-900">{m.name}</h4>
              <p className="text-sm text-slate-500 mt-0.5">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 lg:px-10 pb-20">
        <div className="card p-10 lg:p-14 text-center bg-gradient-to-br from-brand-50 to-orange-50 border-brand-100">
          <h3 className="font-display text-3xl font-bold text-slate-900 mb-3">Ready to Find Your Perfect Pair?</h3>
          <p className="text-slate-600 mb-7 max-w-md mx-auto">Browse our full collection and step into comfort and style today.</p>
          <Link href="/shop"><button className="btn-primary px-10 py-3">Shop Now →</button></Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
