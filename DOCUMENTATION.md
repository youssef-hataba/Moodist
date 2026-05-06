# 🎨 Moodist Frontend Technical Documentation

This document provides a comprehensive breakdown of the **Moodist** frontend application, detailing every page, its components, and the overall technical architecture.

---

## 🏗️ Technical Architecture
Moodist is built with **Next.js 15+ (App Router)** and **TypeScript**. It utilizes a component-driven architecture for scalability and reusability.

### Key Technologies:
- **Styling**: Tailwind CSS 4 for a modern, utility-first UI.
- **3D Engine**: React Three Fiber (R3F) for interactive hoodie customization.
- **Animations**: Framer Motion for premium micro-interactions.
- **UI Kit**: Shadcn/UI (Radix UI) for accessible, consistent components.

---

## 🌐 Global Components (Layout)
These components are present across all pages, defined in the `RootLayout`.

- **AnnouncementBar**: Top-level banner for discounts or important news.
- **Navbar**: Main navigation containing links to Home, Collections, About, and Profile. It also includes the Shopping Cart trigger.
- **WhatsAppFAB**: A floating action button for direct customer support via WhatsApp.
- **Footer**: Contains brand info, quick links (Shop, About, FAQ), and social media handles.

---

## 📄 Pages Breakdown

### 1. Home Page (`/`)
The landing page is designed to "WOW" the user with high-impact visuals and 3D interactions.
- **Hero Section**: The first impression, featuring bold typography and call-to-action buttons.
- **MakeHoodie (3D Lab)**: An interactive section using Three.js where users can see a hoodie model in 3D.
- **Categories**: A visual grid to navigate through different product types (Hoodies, T-shirts, etc.).
- **Offers Section**: Displays active promotions or specific bundle deals.
- **ProductCarousel (Most Popular)**: A horizontal scrolling list of best-selling products.
- **StoryFeatures**: Explains the brand's unique selling points (Quality, Design, Community).
- **Reviews**: A testimonial section showing customer feedback with a sleek layout.
- **FAQ**: An accordion-style section answering common customer queries.
- **ContactNewsletter**: A form for users to subscribe to updates or contact the team.

### 2. Collections Page (`/collections`)
A dynamic store-front that fetches products from the backend and groups them.
- **CategoryNav**: A sub-navigation bar to filter products by category (e.g., "All", "Winter", "Essentials").
- **Dynamic Product Sections**: Each category is displayed as a separate section with a large background text indicator.
- **ProductCard**: Individual product displays featuring:
    - Hover effects for secondary images.
    - Status tags (e.g., "BEST SELLER", "NEW").
    - Price and availability status.

### 3. Product Detail Page (`/product/[slug]`)
A deep-dive into a specific product with customization options.
- **ProductConfigurator**: The core of the product page, allowing users to:
    - Select sizes and colors.
    - View product images (Front/Back).
    - Add the product to the cart.
- **Offers**: Displays specific discounts applicable to this product.
- **ProductReviews**: A dedicated area for customers to read and leave ratings.
- **Related Products Carousel**: Suggests similar items ("People Also Liked").

### 4. Profile Page (`/profile`)
A private dashboard for authenticated users to manage their account.
- **Sidebar Navigation**: Allows switching between different account sections:
    - **My Orders**: History and status of previous purchases.
    - **My Custom Lab**: Saved 3D designs or customized items.
    - **Wishlist**: Saved products for later purchase.
    - **Addresses**: Management of shipping and billing info.
    - **Settings**: Updating personal profile details.
- **Dynamic Content Area**: Changes based on the selected tab in the sidebar.

### 5. Authentication Pages (`/login` & `/signup`)
Clean, focused layouts for user onboarding.
- **Login Form**: Email and password entry with validation.
- **Signup Form**: User registration with multiple fields (Name, Email, Phone, Password).
- Uses **React Hook Form** and **Zod** for real-time error handling.

### 6. About Page (`/about`)
A content-rich page detailing the brand's mission, history, and craftsmanship.
- Features high-quality imagery and structured text blocks explaining the "Moodist" philosophy.

---

## 🧩 Core Components Detail

### 3D Customizer (`MakeHoodie.tsx`)
Located in `src/components/makeHoodie`, this component initializes a Three.js canvas. It loads a `.glb` or `.gltf` model of a hoodie, allowing users to interact with it using mouse/touch.

### Product Carousel (`ProductCarousel.tsx`)
Uses **Embla Carousel** for smooth, touch-friendly horizontal scrolling. It is highly reusable and supports different titles and product arrays.

### Animated FAQ (`FAQ.tsx`)
Built using **Shadcn Accordion**, enhanced with **Framer Motion** for smooth opening/closing transitions.

---

## 🛠️ Development Standards

- **State Management**: Local state is handled via React `useState`/`useContext`. API data is fetched using `Axios`.
- **Responsive Logic**: Uses Tailwind's breakpoint system (`sm:`, `md:`, `lg:`, `xl:`).
- **Iconography**: Standardized using the `Lucide React` library for consistency.

---
*Last Updated: May 2026*
