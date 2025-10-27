# ErgoHub

A modern, psychologically-optimized e-commerce product page for ergonomic office chairs. Built with React, TypeScript, and Tailwind CSS, featuring advanced UX principles including scarcity, social proof, and trust signals.

## Features

- **Product Showcase**: High-quality image gallery with thumbnail navigation
- **Interactive Selection**: Color picker and quantity selector with real-time updates
- **Psychological UX**: Scarcity indicators, trust badges, social proof, and cognitive load reduction
- **Responsive Design**: Mobile-first approach with adaptive layouts and hamburger menu
- **Modern UI**: Clean navbar with search, smooth animations, and professional styling
- **Purchase Flow**: Modal checkout with form validation and success animations
- **Related Products**: Horizontal scroll carousel with navigation controls

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons React
- **Build Tool**: Vite
- **Package Manager**: npm

## Installation & Setup

```bash
# Clone repository
git clone [repository-url]

# Navigate to project directory
cd psych-ecom-page

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with search and user account
│   ├── ProductPage.tsx     # Main page layout and low stock banner
│   ├── ImageGallery.tsx    # Product image carousel with zoom
│   ├── DetailsCTA.tsx      # Product details, options, and purchase modal
│   ├── ReviewsSummary.tsx  # Rating and review statistics
│   ├── ReviewsSection.tsx  # Customer reviews display
│   └── RelatedProducts.tsx # Related items carousel
├── data/
│   └── productData.ts      # Product information, reviews, and related items
└── App.tsx                 # Root component
```

## Key Components

### Navbar
- Sticky navigation bar with ShopHub branding
- Search input (UI only)
- User account display with circular icon
- Shopping cart with item count badge
- Mobile-responsive hamburger menu

### ImageGallery
- Main product image display
- Thumbnail navigation for multiple images
- Responsive grid layout

### DetailsCTA
- Product pricing with discount display
- Color selection with visual swatches
- Quantity selector with increment/decrement
- Add to Cart and Buy Now buttons
- Modal purchase flow with form and success animation

### Purchase Modal
- Product summary with selected options
- Pricing breakdown (subtotal, shipping, total)
- Simple checkout form (name, email, address)
- Trust badges (secure, SSL encrypted)
- Success animation with bouncing checkmark and confetti
- Auto-close after 5 seconds

### ReviewsSection
- Customer reviews with ratings and timestamps
- Review summary with average rating and count
- Social proof elements

### RelatedProducts
- Horizontal scroll carousel
- Navigation arrows with disabled states
- Product cards with ratings and pricing

## Psychological UX Principles

This project implements several psychological principles to optimize user experience:

- **Scarcity**: Low stock warnings create urgency
- **Social Proof**: Prominent customer reviews and ratings
- **Trust Signals**: Security badges, free shipping, return policy
- **Fitts' Law**: Large, easily clickable buttons and targets
- **Cognitive Load Reduction**: Clear visual hierarchy and progressive disclosure
- **Anchoring**: Original price display reinforces perceived value

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- Uses TypeScript for type safety
- Tailwind CSS for utility-first styling
- Component-based architecture
- Responsive design principles
- Accessibility considerations (ARIA labels, keyboard navigation)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Future Enhancements

- User authentication and account management
- Shopping cart persistence with localStorage
- Payment gateway integration
- Order history and tracking
- Admin dashboard for product management
- Advanced search and filtering
- Wishlist functionality
- Multi-language support

## License

MIT License - see LICENSE file for details

## Credits

- **Icons**: Heroicons (MIT License)
- **Images**: Unsplash (free for commercial use)
- **Fonts**: System fonts via Tailwind CSS
