'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Product } from '@/lib/types'

export default function AddToCartSection({ product }: { product: Product }) {
  const [size, setSize] = useState('')
  const [color, setColor] = useState(product.colors[0].name)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [sizeErr, setSizeErr] = useState(false)

  function addToCart() {
    if (!size) { setSizeErr(true); return }
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <div className="space-y-5">
      {/* Color */}
      <div>
        <p className="text-sm font-semibold text-slate-800 mb-2">
          Color: <span className="font-normal text-slate-600">{color}</span>
        </p>
        <div className="flex gap-2.5">
          {product.colors.map(c => (
            <button key={c.name} title={c.name} onClick={() => setColor(c.name)}
              className={`w-9 h-9 rounded-full border-2 transition-all ${color === c.name ? 'border-brand-500 scale-110 shadow-md' : 'border-white shadow hover:scale-105'}`}
              style={{ background: c.hex }}/>
          ))}
        </div>
      </div>

      {/* Size */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-semibold text-slate-800">Size</p>
          <button className="text-xs text-brand-500 hover:underline">Size Guide →</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map(s => (
            <button key={s} onClick={() => { setSize(s); setSizeErr(false) }}
              className={`w-12 h-10 text-sm font-medium rounded-lg border transition-all ${size === s ? 'bg-brand-500 text-white border-brand-500 shadow-btn' : sizeErr ? 'border-red-400 text-red-500 hover:border-brand-400' : 'border-slate-200 text-slate-700 hover:border-brand-400 hover:text-brand-600'}`}>
              {s}
            </button>
          ))}
        </div>
        {sizeErr && <p className="text-red-500 text-xs mt-1.5">Please select a size</p>}
      </div>

      {/* Qty */}
      <div className="flex items-center gap-4">
        <p className="text-sm font-semibold text-slate-800">Qty:</p>
        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
          <button onClick={() => setQty(q => Math.max(1, q - 1))}
            className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors text-lg">−</button>
          <span className="w-10 text-center text-sm font-semibold text-slate-900">{qty}</span>
          <button onClick={() => setQty(q => q + 1)}
            className="w-10 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors text-lg">+</button>
        </div>
        <span className="text-sm text-slate-500">Total: <strong className="text-slate-900">${(product.price * qty).toFixed(2)}</strong></span>
      </div>

      {/* CTAs */}
      <div className="flex gap-3 pt-2">
        <button onClick={addToCart}
          className={`btn-primary flex-1 py-3 text-sm ${added ? '!bg-green-600' : ''}`}>
          {added ? '✓ Added to Cart!' : 'Add to Cart'}
        </button>
        <Link href="/shop" className="flex-1">
          <button className="btn-outline w-full py-3 text-sm">Buy Now →</button>
        </Link>
      </div>
    </div>
  )
}
