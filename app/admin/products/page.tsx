import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/data'

export default function AdminProductsPage() {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Products</h1>
          <p className="text-sm text-slate-500 mt-0.5">{products.length} products in catalogue</p>
        </div>
        <button className="btn-primary text-sm px-5 py-2.5">
          + Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4 flex flex-wrap gap-3 items-center">
        <input placeholder="Search products…" className="input text-sm py-2 max-w-xs flex-1"/>
        <select className="input text-sm py-2 w-auto">
          <option>All Categories</option>
          <option>Running</option>
          <option>Casual</option>
          <option>Luxury</option>
          <option>Sports</option>
          <option>Formal</option>
        </select>
        <select className="input text-sm py-2 w-auto">
          <option>All Status</option>
          <option>In Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Reviews</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => {
                const disc = p.originalPrice ? Math.round((1-p.price/p.originalPrice)*100) : null
                return (
                  <tr key={p.id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                          <Image src={p.images[0]} alt={p.name} width={48} height={48} className="w-full h-full object-cover"/>
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-slate-900 text-sm truncate max-w-[200px]">{p.name}</p>
                          <p className="text-xs text-slate-400">{p.brand}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="badge badge-slate text-xs">{p.category}</span>
                    </td>
                    <td>
                      <p className="font-semibold text-slate-900">${p.price}</p>
                      {p.originalPrice && (
                        <p className="text-xs text-slate-400 line-through">${p.originalPrice}</p>
                      )}
                      {disc && <span className="badge badge-red text-[10px]">-{disc}%</span>}
                    </td>
                    <td>
                      <div className="flex items-center gap-1">
                        <span className="text-amber-400 text-sm">★</span>
                        <span className="text-sm font-medium text-slate-700">{p.rating}</span>
                      </div>
                    </td>
                    <td className="text-slate-600">{p.reviewCount.toLocaleString()}</td>
                    <td>
                      <span className={`badge ${p.inStock ? 'badge-green' : 'badge-red'}`}>
                        {p.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-1">
                        <Link href={`/product/${p.id}`}>
                          <button className="btn-ghost text-xs px-2.5 py-1.5">View</button>
                        </Link>
                        <button className="btn-ghost text-xs px-2.5 py-1.5 text-brand-600 hover:bg-brand-50">Edit</button>
                        <button className="btn-ghost text-xs px-2.5 py-1.5 text-red-500 hover:bg-red-50">Delete</button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100">
          <p className="text-xs text-slate-400">Showing 1–{products.length} of {products.length}</p>
          <div className="flex gap-1">
            {[1,2,3].map(n => (
              <button key={n} className={`w-8 h-8 text-xs rounded-lg font-medium transition-all ${n===1?'bg-brand-500 text-white':'text-slate-600 hover:bg-slate-100'}`}>{n}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
