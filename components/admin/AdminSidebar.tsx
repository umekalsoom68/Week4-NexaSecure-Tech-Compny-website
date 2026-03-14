'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: '▦' },
  { href: '/admin/products',  label: 'Products',  icon: '👟' },
  { href: '/admin/orders',    label: 'Orders',    icon: '📦' },
  { href: '/admin/customers', label: 'Customers', icon: '👥' },
]

export default function AdminSidebar() {
  const path = usePathname()

  return (
    <aside className="w-56 shrink-0 bg-white border-r border-slate-200 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-slate-100">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">HF</span>
          </div>
          <div>
            <p className="font-display font-semibold text-slate-900 text-sm leading-tight">HomeFit Ware</p>
            <p className="text-[10px] text-brand-500 font-medium">Admin Panel</p>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="p-3 flex-1 space-y-1">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest px-3 pt-2 pb-1">Main Menu</p>
        {links.map(l => (
          <Link key={l.href} href={l.href}
            className={`sidebar-link ${path === l.href ? 'active' : ''}`}>
            <span className="text-base w-5 text-center">{l.icon}</span>
            {l.label}
          </Link>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-slate-100">
        <Link href="/" className="sidebar-link text-sm">
          <span>🌐</span> View Store
        </Link>
        <div className="flex items-center gap-3 mt-3 px-3 py-2">
          <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
            <span className="text-brand-600 text-xs font-bold">UK</span>
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold text-slate-900 truncate">Ume Kalsoom</p>
            <p className="text-[10px] text-slate-400">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
