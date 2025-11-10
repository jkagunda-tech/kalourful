
# Kalourful

Kalourful is an open-source multi-vendor e-commerce platform built with Next.js, Tailwind CSS, and Prisma. It enables vendors to create stores, manage products, and process orders, while customers enjoy a seamless shopping experience.

---

## 📦 Features

- Multi-vendor support: Vendors can register, create stores, and manage their own products.
- Customer storefront: Modern, responsive UI for browsing, searching, and purchasing products.
- Cart and checkout: Integrated cart and order management for customers.
- Vendor dashboard: Analytics, product management, and order tracking for vendors.
- Admin panel: Manage vendors, stores, products, and platform settings.
- Ratings and reviews: Customers can rate and review products.
- Coupon and pricing management: Flexible pricing and discount features.

---

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Database:** Prisma ORM
- **Icons:** Lucide React

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env` and update values as needed (database, API keys, etc).

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

4. **Database setup:**
   - Update `prisma/schema.prisma` as needed.
   - Run migrations:
     ```bash
     npx prisma migrate dev
     ```

---

## 🗂 Project Structure

- `app/` — Next.js app directory (pages, layouts, routing)
- `components/` — Reusable React components
- `lib/` — Redux slices and store logic
- `prisma/` — Prisma schema and migrations
- `assets/` — Static assets

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 📜 License

This project is licensed under the MIT License. See [LICENSE.md](./LICENSE.md) for details.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

