'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/lib/types'

export default function ProductCard({ p, idx = 0 }: { p: Product; idx?: number }) {
  const [liked, setLiked] = useState(false)
  const disc = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : null
  const delays = ['d1','d2','d3','d4','d5','d6','d7','d8']

  return (
    <div className={`anim-up ${delays[idx % 8]}`}>
      <div className="card card-product group overflow-hidden h-full flex flex-col">
        {/* Image */}
        <div className="relative bg-slate-50 overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <Image src={p.images[0]} alt={p.name} fill sizes="(max-width:640px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"/>

          {/* Badges */}
          {p.badge && (
            <span className={`badge absolute top-3 left-3 ${p.badge === 'Sale' ? 'badge-red' : p.badge === 'New' ? 'badge-blue' : p.badge === 'Premium' ? 'badge-purple' : 'badge-orange'}`}>
              {p.badge}
            </span>
          )}
          {disc && (
            <span className="badge badge-red absolute top-3 right-10">-{disc}%</span>
          )}
          {!p.inStock && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
              <span className="badge badge-slate text-xs">Out of Stock</span>
            </div>
          )}

          {/* Wishlist */}
          <button onClick={e => { e.preventDefault(); setLiked(v => !v) }}
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110 transition-transform">
            <svg width="14" height="14" viewBox="0 0 24 24" fill={liked ? '#F97316' : 'none'} stroke={liked ? '#F97316' : '#64748B'} strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>
        </div>

        {/* Info */}
        <div className="p-4 flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="badge badge-slate text-[10px]">{p.category}</span>
            <div className="flex items-center gap-1">
              <span className="stars text-xs">★</span>
              <span className="text-xs font-medium text-slate-700">{p.rating}</span>
              <span className="text-xs text-slate-400">({p.reviewCount.toLocaleString()})</span>
            </div>
          </div>

          <Link href={`/product/${p.id}`}>
            <h3 className="font-display font-semibold text-slate-900 leading-snug hover:text-brand-600 transition-colors line-clamp-2 mt-1">
              {p.name}
            </h3>
          </Link>

          <div className="flex items-center gap-2 mt-auto pt-2">
            <span className="text-lg font-bold text-slate-900">${p.price}</span>
            {p.originalPrice && <span className="text-sm text-slate-400 line-through">${p.originalPrice}</span>}
          </div>

          <Link href={`/product/${p.id}`}>
            <button className="btn-primary w-full mt-1 text-sm py-2.5">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
