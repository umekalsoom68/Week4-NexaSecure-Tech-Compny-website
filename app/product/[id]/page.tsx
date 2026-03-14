import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/shop/Navbar'
import Footer from '@/components/shop/Footer'
import ProductCard from '@/components/shop/ProductCard'
import { getProductById, getRelated } from '@/lib/data'
import AddToCartSection from '@/components/shop/AddToCartSection'

interface Props { params: Promise<{ id: string }> }

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = getProductById(Number(id))
  if (!product) notFound()
  const related = getRelated(product.id)
  const disc = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : null

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-brand-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-brand-500 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-slate-700 font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="anim-in">
            <div className="card overflow-hidden bg-slate-50 aspect-square mb-3">
              <Image src={product.images[0]} alt={product.name} width={600} height={600}
                className="w-full h-full object-cover" priority/>
            </div>
            <div className="flex gap-2">
              {product.images.map((src, i) => (
                <div key={i} className="flex-1 card overflow-hidden aspect-square cursor-pointer hover:border-brand-400 transition-all">
                  <Image src={src} alt="" width={120} height={120} className="w-full h-full object-cover"/>
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="anim-up">
            {product.badge && (
              <span className={`badge mb-3 inline-flex ${product.badge === 'Sale' ? 'badge-red' : product.badge === 'New' ? 'badge-blue' : product.badge === 'Premium' ? 'badge-purple' : 'badge-orange'}`}>
                {product.badge}
              </span>
            )}
            <p className="text-sm font-medium text-brand-500 mb-1">{product.brand}</p>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-slate-900 mb-3">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center gap-1">
                <span className="stars">{'★'.repeat(Math.floor(product.rating))}</span>
                <span className="text-sm font-semibold text-slate-700 ml-1">{product.rating}</span>
              </div>
              <span className="text-sm text-slate-400">({product.reviewCount.toLocaleString()} reviews)</span>
              <span className={`badge ${product.inStock ? 'badge-green' : 'badge-red'}`}>
                {product.inStock ? '● In Stock' : '○ Out of Stock'}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-5 pb-5 border-b border-slate-100">
              <span className="font-display text-4xl font-bold text-slate-900">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-slate-400 line-through">${product.originalPrice}</span>
                  <span className="badge badge-red">Save {disc}%</span>
                </>
              )}
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>

            {/* Client interactive section */}
            <AddToCartSection product={product} />

            {/* Details */}
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
              {[
                ['Category', product.category],
                ['Brand', product.brand],
                ['Availability', product.inStock ? 'In Stock' : 'Out of Stock'],
              ].map(([k,v]) => (
                <div key={k} className="flex gap-4 text-sm">
                  <span className="text-slate-400 w-24 shrink-0">{k}</span>
                  <span className="font-medium text-slate-800">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        <div>
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((p, i) => <ProductCard key={p.id} p={p} idx={i}/>)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
