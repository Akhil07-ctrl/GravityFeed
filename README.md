# 🌌 GravityFeed

**GravityFeed** is a modern, high-performance news aggregation platform designed to keep you informed with clarity and style. Featuring a premium user interface with smooth animations, it brings the world's pulse directly to your screen.

---

## ✨ Features

- 🌍 **Global Coverage**: Access breaking news and top stories from thousands of reputable publishers worldwide.
- 🎯 **Personalized Feed**: A tailored news experience that focuses on your interests to show you stories that matter most.
- ⚡ **Instant Updates**: Real-time news alerts ensuring you're always ahead of the curve.
- 🔖 **Bookmarking**: Save articles for later reading with a dedicated bookmarks gallery. (Requires login)
- 🔐 **Secure Authentication**: Traditional Email/Password registration and Google OAuth integration using **NextAuth**.
- 🌓 **Dynamic Themes**: Seamless transitions between light and dark modes for a comfortable reading experience.
- 🎭 **Premium UI**: Fluid animations powered by **GSAP** and **Framer Motion** for a high-end feel.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering/) (Smooth Scroll)
- **Backend & Auth**: [NextAuth.js](https://next-auth.js.org/), [Mongoose (MongoDB)](https://mongoosejs.com/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Geist](https://vercel.com/font)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB instance (Local or Atlas)
- News API Key (from [newsapi.org](https://newsapi.org/))
- Google OAuth Credentials (for social login)

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Akhil07-ctrl/GravityFeed.git
   cd gravity-feed
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file and fill in your actual credentials:
   ```bash
   cp .env.example .env.local
   ```
   
   Open `.env.local` and add your keys:
   ```env
   # Database
   MONGODB_URI=your_mongodb_uri
   
   # Auth
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   
   # API Keys
   NEWS_API_KEY=your_news_api_key
   ```

   > [!NOTE]
   > We use `.env.local` because it is specifically designed for local development secrets and is automatically ignored by Git. In Next.js, server-side variables are hidden from the browser by default unless prefixed with `NEXT_PUBLIC_`.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
src/
├── actions/      # Server Actions for data mutations
├── app/          # Next.js App Router (Pages, Layouts, API routes)
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Utilities, API clients, and shared logic
├── models/       # Mongoose schemas/models
├── types/        # TypeScript interfaces/types
└── utils/        # Helper functions
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by [Akhil](https://github.com/Akhil07-ctrl)
