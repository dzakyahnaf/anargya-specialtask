# ANARGYA — Special Task (Web Design & Web Development Division)

This project is my submission for the **Web Design & Web Development Division Special Task**, where I combined all required levels (High, Medium, and Mandatory) into a single cohesive project built using **Next.js**.

---

## 📋 Task Notes

I decided to **integrate all three levels** of the task into one full-featured project to demonstrate both **design and development capabilities**.  
Below are the original task requirements that I covered:

### 🧩 High Level

1. **Design and develop a fully responsive car showcase landing page** featuring smooth, high-quality animations for an engaging user experience.

   - Built using the preferred front-end library (**Next.js + React + Tailwind CSS**).
   - Enhanced for **SEO performance and accessibility**.

2. **Develop a responsive and interactive Products page** integrated with the public API:  
   🔗 [https://dummyjson.com/docs/products](https://dummyjson.com/docs/products)
   - Includes filtering, category fetching (vehicle & motorcycle), and detailed product pages (`/products/[id]`).
   - Responsive and interactive UI for better user experience.

### ⚙️ Medium Level

1. **Develop a fully responsive car showcase landing page** without animations, focusing on **clean design and layout**.
   - The base version of the landing page was developed first before enhancements and animations were added in the high-level version.

### 🧱 Mandatory Task

1. **Develop a fully responsive car showcase landing page** (core requirement).

   - This serves as the foundation of the project, ensuring layout responsiveness and visual consistency across devices.

   🔗 Link Figma: [https://www.figma.com/design/SgixIcE3jTnzlFbs6UKX1h/ANARGYA-TASK---WEB-DESIGN?node-id=2-2&t=VqatNCrhCKJnN9Oc-1](https://www.figma.com/design/SgixIcE3jTnzlFbs6UKX1h/ANARGYA-TASK---WEB-DESIGN?node-id=2-2&t=VqatNCrhCKJnN9Oc-1)

---

## ✨ Features Implemented

- **Next.js 16** with App Router for modern routing and performance.
- **Responsive design** for desktop, tablet, and mobile viewports.
- **SEO optimization** using Next Metadata API and semantic HTML.
- **Smooth animations** (Framer Motion & Tailwind transitions).
- **Dynamic product fetching** from DummyJSON API:
  - `/products` → displays vehicle & motorcycle products.
  - `/products/[id]` → shows detailed info including description, rating, reviews, and warranty.
- **Reusable UI components** (Navbar, Footer, ProductCard, Hero, Testimonial Section).
- **Accessibility-first approach** (ARIA labels, alt text, readable contrast).

---

## 🧠 Design Philosophy

This project emphasizes a balance between:

- **Visual storytelling** — through clean typography, engaging motion, and immersive color contrast.
- **Technical performance** — fast page loads, SEO-friendly structure, and reusable component architecture.
- **User experience** — responsive layout, smooth navigation, and interactive product browsing.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (React 19)
- **Styling:** Tailwind CSS + Framer Motion
- **API Integration:** DummyJSON API
- **Deployment:** Vercel
- **Version Control:** Git & GitHub

---

## 🌐 Live Preview

🔗 **[Visit the Live Demo](https://your-deployed-link.vercel.app)**  
_(Replace with your actual deployment link)_

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
