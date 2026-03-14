# 👟 HomeFit Ware — Shoes E-Commerce + Admin Panel
### Week 4 · NexaSecure Tech · Final Capstone Project

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel)

**Professional-level Shoes E-Commerce website with full Admin Dashboard**

### 🚀 [Live Demo](#) &nbsp;·&nbsp; 📂 [Repository](https://github.com/umekalsoom68)

</div>

---

## 📌 About

Final Capstone Project for **NexaSecure Tech Week 4** training.  
A full-stack-ready shoes e-commerce platform with a public-facing shop and a complete admin panel — built with Next.js 15, TypeScript, and Tailwind CSS.

---

## ✅ Week 4 Requirements

| Requirement | Status |
|---|---|
| ✦ Professional-Level Project | ✅ Completed |
| ✦ Company Website | ✅ Homepage, Shop, Product, About, Contact |
| ✦ Admin Dashboard | ✅ Dashboard, Products, Orders, Customers |
| ✦ Fully Responsive Design | ✅ Mobile-first, all breakpoints |
| ✦ Clean UI & Proper Folder Structure | ✅ |
| ✦ Complete README Documentation | ✅ |
| ✦ Live Deployment Link | ✅ Deployed on Vercel |

---

## 🌐 Public Website Pages

| Route | Page |
|---|---|
| `/` | Homepage — Hero, Featured, Categories, Banner |
| `/shop` | All Products with filters & sidebar |
| `/product/[id]` | Product detail — gallery, size/color picker, cart |
| `/about` | Company story, team, values |
| `/contact` | Contact form with validation |

## ⚙️ Admin Panel Pages

| Route | Page |
|---|---|
| `/admin/dashboard` | Stats, revenue chart, recent orders |
| `/admin/products` | Product management table |
| `/admin/orders` | Order management with status |
| `/admin/customers` | Customer list with stats |

---

## 🔥 Features

**Public Side:**
- 🎨 Light & Professional design with Playfair Display + Plus Jakarta Sans
- 🦶 8 shoe products across 5 categories (Running, Casual, Luxury, Sports, Formal)
- 🖼️ Product image gallery with size/color picker
- 🛒 Add to cart with quantity selector
- 📋 Contact form with real-time validation
- 📱 Fully responsive on all screen sizes

**Admin Side:**
- 📊 Dashboard with revenue bar chart & stats cards
- 📦 Products table with images, badges, stock status
- 🧾 Orders table with status badges & filters
- 👥 Customers table with spending analytics

---

## 🛠️ Tech Stack

| Tech | Version | Use |
|---|---|---|
| Next.js | 15.2.3 | Framework, routing, SSR |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Styling |
| Vercel | — | Deployment |

---

## 📁 Folder Structure

```
homefitware/
├── app/
│   ├── admin/
│   │   ├── layout.tsx           ← Admin layout with sidebar
│   │   ├── dashboard/page.tsx   ← Stats + chart + recent orders
│   │   ├── products/page.tsx    ← Product management
│   │   ├── orders/page.tsx      ← Order management
│   │   └── customers/page.tsx   ← Customer management
│   ├── product/[id]/page.tsx    ← Dynamic product detail
│   ├── shop/page.tsx            ← All products + filters
│   ├── about/page.tsx           ← About page
│   ├── contact/page.tsx         ← Contact + form
│   ├── globals.css              ← Design system
│   ├── layout.tsx               ← Root layout
│   └── page.tsx                 ← Homepage
├── components/
│   ├── admin/
│   │   └── AdminSidebar.tsx
│   └── shop/
│       ├── AddToCartSection.tsx
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       ├── Navbar.tsx
│       └── ProductCard.tsx
├── lib/
│   ├── data.ts                  ← Products, orders, customers
│   └── types.ts                 ← TypeScript interfaces
└── README.md
```

---

## 🚀 Getting Started

```bash
# 1. Clone
git clone https://github.com/umekalsoom68/Week4-NexaSecure-Tech-Capstone.git
cd Week4-NexaSecure-Tech-Capstone

# 2. Install
npm install

# 3. Run
npm run dev
# → http://localhost:3000
# → http://localhost:3000/admin/dashboard
```

---

## 👩‍💻 Author

**Ume Kalsoom** · [@umekalsoom68](https://github.com/umekalsoom68)  
NexaSecure Tech Training — Week 4 Final Capstone

---
<div align="center">Built with ❤️ for Week 4 — NexaSecure Tech</div>
