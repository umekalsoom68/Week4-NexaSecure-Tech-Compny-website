import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">HF</span>
            </div>
            <span className="font-display font-semibold text-white text-lg">HomeFit Ware</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">Premium footwear crafted for every step of your journey. Quality you can feel.</p>
        </div>
        {[
          { h: 'Shop', links: ['Running', 'Casual', 'Luxury', 'Sports', 'Formal'] },
          { h: 'Company', links: ['About Us', 'Careers', 'Press', 'Contact'] },
          { h: 'Support', links: ['Size Guide', 'Returns', 'Shipping', 'FAQ'] },
        ].map(col => (
          <div key={col.h}>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">{col.h}</h4>
            <ul className="space-y-2.5">
              {col.links.map(l => (
                <li key={l}><Link href="/shop" className="text-sm text-slate-400 hover:text-brand-400 transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800 py-5 px-5 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3 max-w-7xl mx-auto">
        <p className="text-xs text-slate-500">© 2026 HomeFit Ware · NexaSecure Tech.</p>
        <p className="text-xs text-slate-500">Built with Next.js 15 + TypeScript</p>
      </div>
    </footer>
  )
}
