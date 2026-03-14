'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const nav = ['Shop', 'About', 'Contact']

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center h-16 gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">HF</span>
          </div>
          <span className="font-display font-semibold text-slate-900 text-[1.1rem]">HomeFit Ware</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-1 ml-2">
          {nav.map(l => (
            <Link key={l} href={l === 'Shop' ? '/shop' : l === 'About' ? '/about' : '/contact'}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-all">
              {l}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="ml-auto flex items-center gap-2">
          {/* Search */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Search shoes…
          </button>

          {/* Cart */}
          <Link href="/shop" className="relative p-2 text-slate-600 hover:text-brand-500 hover:bg-brand-50 rounded-lg transition-all">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2 3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className="absolute top-1 right-1 w-4 h-4 bg-brand-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">3</span>
          </Link>

          {/* Admin link */}
          <Link href="/admin/dashboard"
            className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-600 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-lg transition-all">
            Admin ↗
          </Link>

          {/* Mobile menu */}
          <button className="md:hidden p-2 text-slate-600 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => setOpen(v=>!v)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-5 py-3 space-y-1">
          {nav.map(l => (
            <Link key={l} href={l === 'Shop' ? '/shop' : l === 'About' ? '/about' : '/contact'}
              className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-500 rounded-lg transition-all"
              onClick={() => setOpen(false)}>
              {l}
            </Link>
          ))}
          <Link href="/admin/dashboard" className="block px-4 py-2.5 text-sm font-semibold text-brand-600 hover:bg-brand-50 rounded-lg transition-all" onClick={() => setOpen(false)}>
            Admin Panel ↗
          </Link>
        </div>
      )}
    </header>
  )
}
