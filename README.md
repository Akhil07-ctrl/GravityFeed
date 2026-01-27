# 🌌 GravityFeed

**GravityFeed** is a modern, high-performance **MERN Stack** news aggregation platform designed to keep you informed with clarity and style. Built with **Next.js 16** and **React 19**, it features a premium user interface with smooth animations, bringing the world's pulse directly to your screen.

---

## ✨ Features

- 🌍 **Global Coverage**: Access breaking news and top stories from thousands of reputable publishers worldwide via the News API.
- 🎯 **Personalized Feed**: A tailored news experience that focuses on your interests to show you stories that matter most.
- ⚡ **Instant Updates**: Real-time news alerts ensuring you're always ahead of the curve.
- 🔖 **Bookmarking**: Save articles for later reading with a dedicated bookmarks gallery. (Persisted to MongoDB)
- 🔐 **Secure Authentication**: Seamless sign-up and sign-in experience powered by **Clerk**.
- 🌓 **Dynamic Themes**: Seamless transitions between light and dark modes for a comfortable reading experience.
- 🎭 **Premium UI**: Fluid animations powered by **GSAP**, **Framer Motion**, and **Lenis** smooth scrolling.

---

## 🚀 Tech Stack

### Frontend & Core
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

### Backend & Database
- **Database**: [MongoDB](https://www.mongodb.com/) (Atlas or Local)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Authentication**: [Clerk](https://clerk.com/)

### UI & Animations
- **Animations**: [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Geist](https://vercel.com/font)

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js 18+** installed on your machine.
- **MongoDB** instance (Local or MongoDB Atlas connection string).
- **News API Key** (Get one for free at [newsapi.org](https://newsapi.org/)).
- **Clerk Account** (Create an application at [clerk.com](https://clerk.com/)).

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
   Create a `.env.local` file in the root directory and add your credentials:

   ```env
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # Authentication (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

   # External Data
   NEWS_API_KEY=your_news_api_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view the application.

---

## 📁 Project Structure

```text
src/
├── actions/      # Server Actions for data mutations (Bookmarks, etc.)
├── app/          # Next.js 16 App Router
│   ├── (public)/ # Public routes (Welcome, Login, Register, Creator)
│   ├── (protected)/ # Protected routes (Feed, Search, Bookmarks)
│   └── api/      # API Routes
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── lib/          # Utilities, API clients (NewsAPI), and shared logic
├── models/       # Mongoose schemas/models (Bookmark)
├── types/        # TypeScript interfaces/types
└── utils/        # Helper functions
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by [Akhil](https://github.com/Akhil07-ctrl)
