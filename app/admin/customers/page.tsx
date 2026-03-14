import { customers } from '@/lib/data'

export default function AdminCustomersPage() {
  const active = customers.filter(c => c.status === 'Active').length
  const totalSpent = customers.reduce((a, c) => a + c.spent, 0)
  const avgSpent = (totalSpent / customers.length).toFixed(2)

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-slate-900">Customers</h1>
          <p className="text-sm text-slate-500 mt-0.5">{customers.length} registered customers</p>
        </div>
        <button className="btn-outline text-sm px-5 py-2.5">Export CSV</button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label:'Total Customers', value: customers.length,   icon:'👥', color:'bg-blue-50 text-blue-600'   },
          { label:'Active',          value: active,             icon:'✅', color:'bg-green-50 text-green-600' },
          { label:'Total Revenue',   value:`$${totalSpent.toFixed(0)}`, icon:'💰', color:'bg-orange-50 text-orange-600' },
          { label:'Avg. Spent',      value:`$${avgSpent}`,      icon:'📊', color:'bg-purple-50 text-purple-600'},
        ].map((s, i) => (
          <div key={s.label} className={`stat-card anim-up d${i+1}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 ${s.color.split(' ')[0]}`}>{s.icon}</div>
            <p className="font-display text-2xl font-bold text-slate-900">{s.value}</p>
            <p className="text-xs text-slate-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="card p-4 flex flex-wrap gap-3 items-center">
        <input placeholder="Search customers…" className="input text-sm py-2 max-w-xs flex-1"/>
        <select className="input text-sm py-2 w-auto">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
        <select className="input text-sm py-2 w-auto">
          <option>Sort: Most Spent</option>
          <option>Sort: Most Orders</option>
          <option>Sort: Newest</option>
          <option>Sort: Name A–Z</option>
        </select>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c, i) => (
                <tr key={c.id}>
                  <td className="text-slate-400 text-xs font-bold">{i+1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-brand-100 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-brand-600 text-xs font-bold">
                          {c.name.split(' ').map(n=>n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{c.name}</p>
                        <p className="text-xs text-slate-400">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-slate-900">{c.orders}</span>
                      <span className="text-xs text-slate-400">orders</span>
                    </div>
                  </td>
                  <td className="font-semibold text-slate-900">${c.spent.toFixed(2)}</td>
                  <td className="text-xs text-slate-400">{c.joined}</td>
                  <td>
                    <span className={`badge ${c.status === 'Active' ? 'badge-green' : 'badge-slate'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td>
                    <div className="flex gap-1">
                      <button className="btn-ghost text-xs px-2 py-1">View</button>
                      <button className="btn-ghost text-xs px-2 py-1 text-brand-600 hover:bg-brand-50">Email</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100">
          <p className="text-xs text-slate-400">Showing {customers.length} of {customers.length} customers</p>
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
