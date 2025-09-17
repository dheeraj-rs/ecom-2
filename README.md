# Royalwood - Premium Handcrafted Furniture Ecommerce

A modern, scalable ecommerce platform built for handcrafted wood furniture, designed to handle millions of users with excellent performance and user experience.

## 🚀 Tech Stack

### Frontend
- **Next.js 13+** with App Router and TypeScript
- **Tailwind CSS** for styling with custom wood theme
- **Framer Motion** for smooth animations
- **Shadcn/ui** for consistent UI components
- **React Hook Form** with Zod validation

### Backend
- **MongoDB Atlas** for data storage with optimized schemas
- **Next.js API Routes** for serverless functions
- **Stripe** for secure payment processing
- **NextAuth.js** for authentication

### Performance & Scale
- **Redis** for caching and session management
- **CDN** for asset delivery and image optimization
- **Horizontal scaling** architecture ready
- **Edge functions** for global performance

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   API Routes    │    │   Database      │
│   (Next.js)     │◄──►│   (Serverless)  │◄──►│   (MongoDB)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CDN/Assets    │    │   Redis Cache   │    │   File Storage  │
│   (Images/3D)   │    │   (Sessions)    │    │   (AWS S3)      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Stripe account
- Redis instance (optional for development)

### Local Development

1. **Clone the repository**
```bash
git clone <repository-url>
cd royalwood
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Database Setup**
```bash
# The app will automatically connect to MongoDB
# Ensure your connection string is correct in .env.local
```

5. **Run Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` for the main site and `http://localhost:3000/admin` for the admin dashboard.

## 📊 Database Schema

### Products Collection
```typescript
{
  _id: ObjectId,
  name: string,
  slug: string,
  description: string,
  category: string[],
  basePrice: number,
  priceBreakdown: {
    materialCost: number,
    laborCost: number,
    overhead: number,
    profit: number,
    total: number
  },
  variants: [{
    id: string,
    woodType: WoodType,
    finish: string,
    priceAdjustment: number,
    stockQuantity: number
  }],
  images: {
    main: string,
    gallery: string[],
    thumbnail: string
  },
  specifications: {...},
  availability: {...},
  ratings: {...}
}
```

### Users Collection
```typescript
{
  _id: ObjectId,
  email: string,
  password: string, // hashed
  firstName: string,
  lastName: string,
  addresses: Address[],
  cart: {
    items: CartItem[],
    updatedAt: Date
  },
  orderHistory: ObjectId[],
  wishlist: ObjectId[],
  loyaltyPoints: number
}
```

### Orders Collection
```typescript
{
  _id: ObjectId,
  orderNumber: string,
  userId: ObjectId,
  items: OrderItem[],
  subtotal: number,
  shipping: {...},
  tax: {...},
  total: number,
  payment: {...},
  status: OrderStatus,
  timeline: StatusUpdate[]
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Warm wood tones (#8B4513 to #CD853F)
- **Secondary**: Golden accent (#FFC107)
- **Neutral**: Professional grays
- **Success/Error**: Standard semantic colors

### Typography
- **Headings**: Inter Bold
- **Body**: Inter Regular
- **Line Height**: 150% body, 120% headings

### Components
All components follow the design system with:
- 8px spacing system
- Consistent border radius (0.5rem)
- Smooth transitions (300ms)
- Hover states and micro-interactions

## 🚀 Deployment

### Staging Environment
```bash
npm run build
npm run start
```

### Production Deployment

#### Vercel (Recommended for Frontend)
```bash
vercel --prod
```

#### Docker Deployment
```bash
docker build -t royalwood .
docker run -p 3000:3000 royalwood
```

#### Environment Variables
Ensure all production environment variables are set:
- Database connections
- Stripe keys
- File storage credentials
- Email service keys

## 📈 Performance Optimization

### Current Optimizations
- **Image Optimization**: Next.js Image component with WebP
- **Code Splitting**: Automatic route-based splitting
- **Caching**: API responses and static assets
- **Database Indexes**: Optimized for common queries

### Scaling Considerations
- **CDN**: Cloudflare or AWS CloudFront
- **Database**: Read replicas for heavy read operations
- **Caching**: Redis for sessions and frequent queries
- **Load Balancing**: Multiple app instances

## 🔐 Security

### Implemented Security
- **Input Validation**: Zod schemas for all inputs
- **Rate Limiting**: API routes protection
- **CSRF Protection**: Built-in Next.js protection
- **Data Encryption**: Hashed passwords, secure sessions
- **PCI Compliance**: Stripe handles payment data

## 🧪 Testing

### Test Structure
```bash
npm run test        # Unit tests
npm run test:e2e    # End-to-end tests
npm run lint        # Code quality
```

### Testing Strategy
- Unit tests for utilities and components
- Integration tests for API routes
- E2E tests for critical user flows
- Performance testing for scaling

## 📚 API Documentation

### Public Endpoints
- `GET /api/products` - Product catalog with filtering
- `GET /api/products/[slug]` - Product details
- `POST /api/cart` - Cart operations
- `POST /api/checkout` - Payment processing

### Admin Endpoints
- `GET /api/admin/orders` - Order management
- `POST /api/admin/products` - Product CRUD
- `GET /api/admin/analytics` - Business metrics

## 🎯 Roadmap

### Phase 1 (MVP) - ✅ Complete
- [x] Product catalog with filtering
- [x] Shopping cart functionality
- [x] User authentication
- [x] Basic admin dashboard
- [x] Stripe integration setup
- [x] Responsive design

### Phase 2 (V1) - 🚧 In Progress
- [ ] Advanced product customization
- [ ] 3D model viewer integration
- [ ] Review and rating system
- [ ] Email notifications
- [ ] Inventory management
- [ ] Advanced analytics

### Phase 3 (V2) - 📋 Planned
- [ ] Multi-vendor support
- [ ] Advanced reporting
- [ ] Mobile app
- [ ] AI-powered recommendations
- [ ] Advanced SEO features
- [ ] International shipping

## 📞 Support

### Development Team
- **Lead Developer**: [Your Name]
- **UI/UX Designer**: [Designer Name]
- **DevOps Engineer**: [DevOps Name]

### Documentation
- [API Documentation](./docs/api.md)
- [Component Documentation](./docs/components.md)
- [Database Schema](./docs/database.md)

---

Built with ❤️ for craftsmen who create furniture that lasts generations.