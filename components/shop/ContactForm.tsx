'use client'
import { useState } from 'react'

interface F { name:string; email:string; subject:string; message:string }
type E = Partial<Record<keyof F, string>>
const BLANK: F = { name:'', email:'', subject:'', message:'' }

export default function ContactForm() {
  const [form, setForm] = useState<F>(BLANK)
  const [errors, setErrors] = useState<E>({})
  const [touched, setTouched] = useState<Partial<Record<keyof F, boolean>>>({})
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)

  function validate(d: Partial<F>): E {
    const e: E = {}
    if (!d.name?.trim()) e.name = 'Name is required'
    else if (d.name.length < 2) e.name = 'Too short'
    if (!d.email?.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) e.email = 'Invalid email'
    if (!d.subject?.trim()) e.subject = 'Subject is required'
    if (!d.message?.trim()) e.message = 'Message is required'
    else if (d.message.length < 10) e.message = 'Message too short (min 10 chars)'
    return e
  }

  function change(f: keyof F, v: string) {
    setForm(p => ({ ...p, [f]: v }))
    if (touched[f]) {
      const e = validate({ ...form, [f]: v })
      setErrors(p => ({ ...p, [f]: e[f] }))
    }
  }

  function blur(f: keyof F) {
    setTouched(p => ({ ...p, [f]: true }))
    const e = validate(form)
    setErrors(p => ({ ...p, [f]: e[f] }))
  }

  function submit() {
    const allTouched: Partial<Record<keyof F, boolean>> = {}
    ;(Object.keys(BLANK) as (keyof F)[]).forEach(k => { allTouched[k] = true })
    setTouched(allTouched)
    const e = validate(form)
    setErrors(e)
    if (!Object.keys(e).length) {
      setBusy(true)
      setTimeout(() => { setBusy(false); setSent(true) }, 1500)
    }
  }

  if (sent) return (
    <div className="card p-12 text-center h-full flex flex-col items-center justify-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
      <p className="text-slate-500 mb-6">We&apos;ll get back to you within 24 hours.</p>
      <button onClick={() => { setSent(false); setForm(BLANK); setTouched({}) }} className="btn-outline">Send Another</button>
    </div>
  )

  const fields: { f: keyof F; label: string; placeholder: string; type?: string; rows?: number }[] = [
    { f: 'name',    label: 'Your Name',     placeholder: 'Ahmed Khan' },
    { f: 'email',   label: 'Email Address', placeholder: 'ahmed@email.com', type: 'email' },
    { f: 'subject', label: 'Subject',       placeholder: 'Order enquiry, size help…' },
    { f: 'message', label: 'Message',       placeholder: 'Tell us how we can help you…', rows: 5 },
  ]

  return (
    <div className="card p-8">
      <h2 className="font-display text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
      <div className="grid grid-cols-2 gap-5">
        {fields.map(({ f, label, placeholder, type, rows }) => {
          const hasErr = Boolean(errors[f] && touched[f])
          const isOk   = Boolean(touched[f] && !errors[f] && form[f])
          return (
            <div key={f} className={rows ? 'col-span-2' : 'col-span-2 sm:col-span-1'}>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">{label}</label>
              {rows ? (
                <textarea value={form[f]} onChange={e => change(f, e.target.value)} onBlur={() => blur(f)}
                  placeholder={placeholder} rows={rows}
                  className={`input resize-none ${hasErr ? '!border-red-400' : isOk ? '!border-green-500' : ''}`}/>
              ) : (
                <input type={type || 'text'} value={form[f]} onChange={e => change(f, e.target.value)} onBlur={() => blur(f)}
                  placeholder={placeholder}
                  className={`input ${hasErr ? '!border-red-400' : isOk ? '!border-green-500' : ''}`}/>
              )}
              {hasErr && <p className="text-red-500 text-xs mt-1">⚠ {errors[f]}</p>}
              {isOk  && <p className="text-green-600 text-xs mt-1">✓ Looks good</p>}
            </div>
          )
        })}
        <div className="col-span-2">
          <button onClick={submit} disabled={busy} className="btn-primary w-full py-3 disabled:opacity-60">
            <span className="flex items-center justify-center gap-2">
              {busy ? 'Sending…' : 'Send Message →'}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
