# GreenMind AI
> Your Personal Carbon Intelligence System

GreenMind AI is an AI-powered carbon intelligence platform that acts as your personal sustainability coach. It creates a digital carbon twin based on your lifestyle, predicts future emissions, provides personalized AI guidance, and gamifies your journey to a greener lifestyle.

Built for the National AI Sustainability Hackathon.

## ✨ Core Features
- **AI Carbon Twin**: A living digital twin visualizing your footprint across transport, energy, food, and shopping.
- **AI Sustainability Coach**: A smart chat assistant that gives you tailored, context-aware advice on reducing emissions.
- **Future Simulator**: Interactive sliders to model lifestyle changes (e.g., public transport, plant-based meals) and instantly see projected carbon and cost savings.
- **Magic Bill Scanner**: (Mocked) AI extraction of electricity bills and receipts to automatically update your Carbon Twin.
- **Dashboard & Analytics**: Premium charts and weekly trends using Recharts.
- **Gamification**: Earn Green Points, badges, and level up as you complete sustainability goals.

## 🚀 Tech Stack
- **Framework**: React 18, Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, PostCSS, Glassmorphism design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Routing**: React Router DOM

## 🛠️ Local Development

1. **Clone the repository** (if applicable) or navigate to the project directory.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Open** `http://localhost:5173` in your browser.

## 📁 Project Structure
- `/src/components/ui`: Reusable design system components (Button, Card, Badge).
- `/src/components/layout`: Global layout components (Navbar, Footer, MainLayout).
- `/src/components/landing`: Sections for the breathtaking landing page.
- `/src/components/dashboard`: Components for the dashboard (CarbonTwin, CarbonChart).
- `/src/pages`: Main route views (Landing, Dashboard, Coach, Simulator, Scanner).
- `/src/lib/utils.ts`: Utility functions (Tailwind merge/clsx).

## 🎨 Design Philosophy
The design follows an "Eco-Tech Futurism" theme.
- **Colors**: Deep forest green background (`#081C15`), vibrant primary green (`#00C853`), electric accent (`#64FFDA`).
- **Aesthetics**: Glassmorphism cards with subtle white borders, smooth gradients, and glowing drop shadows.
- **Animations**: Fluid scroll reveals, micro-interactions on hover, and a rotating 3D Earth representation on the hero.

## 🤝 Team
Built by an elite hackathon team aiming to shape a greener future.
