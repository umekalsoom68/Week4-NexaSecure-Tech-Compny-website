import { orders } from '@/lib/data'

const STATUS_COLORS: Record<string, string> = {
  Delivered:  'badge-green',
  Shipped:    'badge-blue',
  Processing: 'badge-yellow',
  Pending:    'badge-orange',
  Cancelled:  'badge-red',
}

export default function AdminOrdersPage() {
  const summary = {
    total:      orders.length,
    delivered:  orders.filter(o=>o.status==='Delivered').length,
    shipped:    orders.filter(o=>o.status==='Shipped').length,
    pending:    orders.filter(o=>o.status==='Pending'||o.status==='Processing').length,
    cancelled:  orders.filter(o=>o.status==='Cancelled').length,
    revenue:    orders.filter(o=>o.status!=='Cancelled').reduce((a,o)=>a+o.amount,0),
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Orders</h1>
          <p className="text-sm text-slate-500 mt-0.5">{orders.length} total orders</p>
        </div>
        <button className="btn-outline text-sm px-5 py-2.5">Export CSV</button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
        {[
          { label:'Total',     value: summary.total,     color:'badge-slate'  },
          { label:'Delivered', value: summary.delivered, color:'badge-green'  },
          { label:'Shipped',   value: summary.shipped,   color:'badge-blue'   },
          { label:'Pending',   value: summary.pending,   color:'badge-orange' },
          { label:'Cancelled', value: summary.cancelled, color:'badge-red'    },
        ].map(s => (
          <div key={s.label} className="stat-card text-center">
            <p className="font-display text-2xl font-bold text-slate-900">{s.value}</p>
            <span className={`badge ${s.color} text-xs mt-1`}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card p-4 flex flex-wrap gap-3 items-center">
        <input placeholder="Search orders…" className="input text-sm py-2 max-w-xs flex-1"/>
        <select className="input text-sm py-2 w-auto">
          <option>All Statuses</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Cancelled</option>
        </select>
        <select className="input text-sm py-2 w-auto">
          <option>All Dates</option>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>

      {/* Orders table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id}>
                  <td className="font-mono text-xs text-brand-600 font-semibold">{o.id}</td>
                  <td>
                    <p className="font-medium text-slate-900">{o.customer}</p>
                    <p className="text-xs text-slate-400">{o.email}</p>
                  </td>
                  <td className="max-w-[160px]">
                    <p className="text-sm text-slate-700 truncate">{o.product}</p>
                  </td>
                  <td className="text-slate-600">{o.items}</td>
                  <td className="font-semibold text-slate-900">${o.amount.toFixed(2)}</td>
                  <td><span className={`badge ${STATUS_COLORS[o.status]}`}>{o.status}</span></td>
                  <td className="text-xs text-slate-400">{o.date}</td>
                  <td>
                    <div className="flex gap-1">
                      <button className="btn-ghost text-xs px-2 py-1">View</button>
                      <button className="btn-ghost text-xs px-2 py-1 text-brand-600 hover:bg-brand-50">Update</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100">
          <p className="text-xs text-slate-400">Total revenue (excl. cancelled): <strong className="text-slate-900">${summary.revenue.toFixed(2)}</strong></p>
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
