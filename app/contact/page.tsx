import Navbar from '@/components/shop/Navbar'
import Footer from '@/components/shop/Footer'
import ContactForm from '@/components/shop/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <p className="text-brand-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">We&apos;d Love to Hear From You</h1>
          <p className="text-slate-300">Our team is here to help with any questions about orders, products, or anything else.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-10 py-16 grid lg:grid-cols-3 gap-10">
        {/* Info cards */}
        <div className="space-y-4">
          {[
            { icon:'📍', title:'Visit Us',      lines:['123 Footwear Lane','Lahore, Punjab, Pakistan'] },
            { icon:'📞', title:'Call Us',        lines:['+92 300 0000000','Mon–Fri, 9am–6pm PKT'] },
            { icon:'✉️', title:'Email Us',       lines:['support@homefitware.com','hello@homefitware.com'] },
            { icon:'🚚', title:'Shipping Info',  lines:['Free shipping on orders $100+','3–5 business days'] },
          ].map((item, i) => (
            <div key={item.title} className={`card p-5 anim-up d${i+1}`}>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center text-xl shrink-0">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                  {item.lines.map(l => <p key={l} className="text-sm text-slate-500">{l}</p>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
