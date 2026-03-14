import Link from 'next/link'
import { stats, orders, products, monthlyRevenue } from '@/lib/data'

const STATUS_COLORS: Record<string, string> = {
  Delivered:  'badge-green',
  Shipped:    'badge-blue',
  Processing: 'badge-yellow',
  Pending:    'badge-orange',
  Cancelled:  'badge-red',
}

export default function DashboardPage() {
  const maxRev = Math.max(...monthlyRevenue.map(m => m.revenue))
  const recentOrders = orders.slice(0, 5)

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-0.5">Welcome back, Ume Kalsoom 👋</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: 'Total Revenue', value: `$${stats.totalRevenue.toLocaleString()}`,
            growth: `+${stats.revenueGrowth}%`, color: 'text-green-600', bg: 'bg-green-50',
            icon: '💰', desc: 'vs last month',
          },
          {
            label: 'Total Orders',  value: stats.totalOrders,
            growth: `+${stats.ordersGrowth}%`, color: 'text-blue-600', bg: 'bg-blue-50',
            icon: '📦', desc: 'vs last month',
          },
          {
            label: 'Products',  value: stats.totalProducts,
            growth: '8 active', color: 'text-purple-600', bg: 'bg-purple-50',
            icon: '👟', desc: 'in catalogue',
          },
          {
            label: 'Customers', value: stats.totalCustomers,
            growth: '+12 new', color: 'text-orange-600', bg: 'bg-orange-50',
            icon: '👥', desc: 'this month',
          },
        ].map((s, i) => (
          <div key={s.label} className={`stat-card anim-up d${i+1}`}>
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center text-xl`}>{s.icon}</div>
              <span className={`badge text-xs font-semibold ${s.color} bg-transparent`}>{s.growth}</span>
            </div>
            <p className="font-display text-2xl font-bold text-slate-900">{s.value}</p>
            <p className="text-xs text-slate-500 mt-1">{s.label} · {s.desc}</p>
          </div>
        ))}
      </div>

      {/* Chart + Top Products */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Revenue chart */}
        <div className="lg:col-span-2 card p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-semibold text-slate-900">Revenue Overview</h2>
              <p className="text-xs text-slate-400 mt-0.5">Last 7 months</p>
            </div>
            <span className="badge badge-green text-xs">↑ {stats.revenueGrowth}% growth</span>
          </div>
          {/* Bar chart */}
          <div className="flex items-end gap-3 h-44">
            {monthlyRevenue.map((m, i) => {
              const h = Math.round((m.revenue / maxRev) * 100)
              return (
                <div key={m.month} className={`flex-1 flex flex-col items-center gap-2 anim-up d${i+1}`}>
                  <span className="text-[10px] font-semibold text-slate-500">${(m.revenue/1000).toFixed(0)}k</span>
                  <div className="w-full chart-bar" style={{ height: `${h}%`, minHeight: 8 }}/>
                  <span className="text-[10px] text-slate-400">{m.month}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Top products */}
        <div className="card p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900">Top Products</h2>
            <Link href="/admin/products" className="text-xs text-brand-500 hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {products.slice(0, 5).map((p, i) => (
              <div key={p.id} className="flex items-center gap-3">
                <span className="text-slate-400 text-xs font-bold w-4">{i+1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 truncate">{p.name.split('—')[0].trim()}</p>
                  <p className="text-xs text-slate-400">{p.category}</p>
                </div>
                <span className="text-sm font-semibold text-slate-900 shrink-0">${p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="card overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-900">Recent Orders</h2>
          <Link href="/admin/orders" className="text-xs text-brand-500 hover:underline font-medium">View all orders →</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map(o => (
                <tr key={o.id}>
                  <td className="font-mono text-xs text-brand-600 font-semibold">{o.id}</td>
                  <td>
                    <div>
                      <p className="font-medium text-slate-900">{o.customer}</p>
                      <p className="text-xs text-slate-400">{o.email}</p>
                    </div>
                  </td>
                  <td className="text-slate-700 max-w-[180px]">
                    <p className="truncate">{o.product}</p>
                    <p className="text-xs text-slate-400">{o.items} item{o.items > 1 ? 's' : ''}</p>
                  </td>
                  <td className="font-semibold text-slate-900">${o.amount}</td>
                  <td><span className={`badge ${STATUS_COLORS[o.status]}`}>{o.status}</span></td>
                  <td className="text-slate-400 text-xs">{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
