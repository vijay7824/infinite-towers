# INFINITE TOWERS - Luxury Real Estate Website

A production-ready Next.js 14 real estate website built with TypeScript, Tailwind CSS, and modern web technologies.

## 🏗️ Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home page
│   ├── properties/   # Properties listing page
│   ├── about/        # About us page
│   ├── contact/      # Contact page
│   └── layout.tsx    # Root layout component
├── components/       # Reusable UI components
│   ├── Navbar.tsx    # Navigation header
│   ├── Footer.tsx    # Footer component
│   ├── Hero.tsx      # Hero section
│   ├── PropertyCard.tsx # Property listing card
│   ├── PropertyGrid.tsx # Properties grid
│   └── Features.tsx  # Features section
├── styles/           # Global styles and CSS
│   └── globals.css   # Tailwind CSS imports and custom styles
└── lib/              # Utility functions and constants
    ├── utils.ts      # Helper functions
    └── constants.ts  # Application constants
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd infinite-towers
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library
- **PostCSS** - CSS transformation tool

## 📦 Dependencies

### Core Dependencies
- `react` ^18.3.1
- `react-dom` ^18.3.1
- `next` ^14.2.0

### Development Dependencies
- `typescript` ^5.4.0
- `@types/node` ^20.12.0
- `@types/react` ^18.3.0
- `@types/react-dom` ^18.3.0
- `tailwindcss` ^3.4.0
- `postcss` ^8.4.0
- `autoprefixer` ^10.4.0
- `eslint` ^8.57.0
- `eslint-config-next` ^14.2.0
- `clsx` ^2.0.0
- `tailwind-merge` ^2.0.0

## 🎨 Features

### ✅ Implemented Features
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, luxury aesthetic with custom color palette
- **Navigation**: Fixed navbar with mobile hamburger menu
- **Property Listings**: Grid layout with filtering and pagination
- **Contact Form**: Functional contact form with validation
- **Hero Section**: Eye-catching hero with call-to-action
- **Features Section**: Service highlights with icons
- **About Page**: Company information and team section
- **SEO Optimized**: Proper meta tags and semantic HTML
- **TypeScript**: Full type safety throughout the application

### 🚧 Backend Integration Ready
The application is structured to easily integrate with:
- REST APIs for property data
- Form submission services
- Authentication systems
- Database connections

## 🎯 Key Components

### Navbar Component
- Fixed positioning with backdrop blur
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Call-to-action button

### PropertyCard Component
- Hover effects and transitions
- Property details display
- Featured property badges
- Action buttons for viewing and scheduling

### Contact Form
- Form validation
- Multiple subject options
- Responsive layout
- Professional styling

## 🔄 Next Steps for Backend Integration

1. **API Integration**: Connect property data from external APIs
2. **Form Handling**: Implement backend form submission
3. **Authentication**: Add user login/registration
4. **Database**: Set up property and user data storage
5. **Search & Filters**: Implement dynamic property filtering
6. **Image Upload**: Add property image management
7. **User Dashboard**: Create personalized user experiences

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🎨 Design System

### Colors
- **Primary**: Blue palette for CTAs and links
- **Luxury**: Gold/brown palette for premium feel
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Serif**: Playfair Display for headings
- **Sans-serif**: Inter for body text

### Components
- Consistent spacing and sizing
- Hover states and transitions
- Shadow system for depth
- Gradient effects for emphasis

## 🚀 Performance Optimizations

- Next.js Image optimization ready
- Tailwind CSS purging in production
- Component-based architecture
- Lazy loading ready for images
- SEO-friendly structure

## 📄 License

This project is licensed under the MIT License.

---

**INFINITE TOWERS** - Luxury Real Estate Redefined
