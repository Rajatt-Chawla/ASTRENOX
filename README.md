# Xtract-Style Dark Gradient Agency

A modern, dark-themed agency website built with Next.js, TypeScript, and Tailwind CSS. Features a premium design system with smooth animations and responsive layouts.

## 🎨 Design System

This project implements the "Xtract-Style / Dark Gradient Agency" theme with:

### Color Palette
- **Background**: Deep blue-black (#0B0F14) with elevated surfaces
- **Accent**: Violet (#7C3AED) and Cyan (#22D3EE) gradient
- **Text**: High contrast white with opacity variations
- **Borders**: Subtle white overlays for depth

### Typography
- **Font**: Inter (Google Fonts)
- **Scale**: Display, Heading, Body, and Caption sizes
- **Weights**: 400-800 with proper line heights

### Components
- **Buttons**: Primary, Secondary, Tertiary variants
- **Cards**: Elevated surfaces with hover effects
- **Navigation**: Sticky header with blur effects
- **Animations**: Framer Motion for smooth transitions

## 🚀 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Theme** - Premium dark gradient aesthetic
- ✅ **Smooth Animations** - Framer Motion integration
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Modern Stack** - Next.js 15 with App Router
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Accessibility** - Focus states and ARIA labels

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Header navigation
│   │   └── Footer.tsx     # Footer component
│   ├── sections/
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Features.tsx   # Features grid
│   │   ├── Benefits.tsx   # Benefits section
│   │   ├── Pricing.tsx    # Pricing cards
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── FAQ.tsx        # FAQ accordion
│   │   └── CTA.tsx        # Call-to-action
│   └── ui/
│       └── Button.tsx     # Reusable button component
└── styles/
    └── globals.css        # Global styles and CSS variables
```

## 🛠️ Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Sections

### Hero Section
- Gradient background with floating elements
- Animated statistics
- Call-to-action buttons
- Responsive layout

### Features Section
- Icon-based feature cards
- Hover animations
- Grid layout with responsive design

### Benefits Section
- Split layout with content and visual
- Animated statistics
- Feature checklist

### Pricing Section
- Three-tier pricing cards
- Popular plan highlighting
- Feature comparisons

### Testimonials Section
- Client testimonials grid
- Star ratings
- Author information

### FAQ Section
- Accordion-style questions
- Smooth expand/collapse animations
- Search-friendly content

### CTA Section
- Prominent call-to-action
- Trust indicators
- Gradient background effects

## 🎨 Customization

### Colors
Update colors in `tailwind.config.ts` and `src/styles/globals.css`:

```typescript
colors: {
  'bg-base': '#0B0F14',
  'accent-primary': '#7C3AED',
  'accent-secondary': '#22D3EE',
  // ... more colors
}
```

### Typography
Modify font sizes in `tailwind.config.ts`:

```typescript
fontSize: {
  'display-lg': ['64px', { lineHeight: '1.05', fontWeight: '800' }],
  'h1': ['40px', { lineHeight: '1.10', fontWeight: '800' }],
  // ... more sizes
}
```

### Animations
Customize animations in `src/styles/globals.css`:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact us at hello@xtract.com
