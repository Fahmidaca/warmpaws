# WarmPaws - Pet Care in Winter 🐾❄️

A cozy winter companion platform designed for pet owners to ensure their furry friends stay warm, safe, and healthy during the cold season. Users can explore local pet care services, winter pet clothing, grooming options, and expert tips — all in one friendly interface.

## 🌟 Live Demo

**Live URL:** [WarmPaws - Pet Care Platform](https://your-netlify-url.netlify.app)

## 🎯 Project Purpose

WarmPaws addresses the unique challenges of winter pet care by providing:

- Comprehensive winter pet care services
- Expert advice and safety tips
- Emergency care information
- Easy booking system
- User-friendly interface designed for pet parents

## ✨ Key Features

### 🔐 Authentication System
- **Firebase Authentication** with email/password
- **Google OAuth** integration
- Password validation (uppercase, lowercase, 6+ characters)
- Password visibility toggle
- Forgot password functionality with Gmail redirect

### 🏠 Home Page
- **Hero Slider** showcasing winter pet care with Swiper.js
- **Popular Services** section displaying JSON data
- **Winter Care Tips** with helpful advice
- **Expert Vets** section featuring our team
- **24/7 Emergency Care** section highlighting urgent services

### 🛠️ Service Management
- **Service Details** page (protected route)
- **Booking System** with form validation
- **Real-time availability** tracking
- Service provider information
- Related services suggestions

### 👤 User Profile
- **Profile management** with photo upload
- **Update functionality** using Firebase updateProfile()
- User statistics dashboard
- Activity tracking
- Account settings

### 🎨 Design & UX
- **Minimalist & Modern** design
- **Fully Responsive** (mobile, tablet, desktop)
- **AOS Animations** for smooth interactions
- **Custom Color Scheme** with warm winter theme
- **Toast Notifications** for user feedback

### 🗂️ Additional Features
- **Protected Routes** for authenticated pages
- **Environment Variables** for Firebase configuration
- **JSON-based** service data management
- **SEO-friendly** routing with React Router
- **Performance Optimized** with lazy loading

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Swiper.js** - Modern slider component
- **AOS** - Animate On Scroll library

### Backend & Services
- **Firebase Authentication** - User authentication
- **Firebase Firestore** - Database (optional)
- **Firebase Hosting** - Deployment (optional)

### Development Tools
- **React Hot Toast** - Toast notifications
- **React Firebase Hooks** - Firebase integration
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📦 NPM Packages Used

### Required Packages
- `firebase` - Firebase SDK for authentication
- `react-router-dom` - Client-side routing
- `swiper` - Modern slider for hero section
- `aos` - Animate On Scroll library
- `react-hot-toast` - Toast notifications
- `daisyui` - Tailwind CSS component library
- `@tailwindcss/typography` - Typography plugin

### Additional Dependencies
- `react-firebase-hooks` - Firebase React hooks
- `@vitejs/plugin-react` - React plugin for Vite

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/warmpaws-pet-care.git
   cd warmpaws-pet-care
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase Configuration**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Email/Password provider
   - Enable Google Sign-in provider
   - Create a `.env` file in the root directory:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   VITE_FIREBASE_PROJECT_ID=your_project_id_here
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id_here
   VITE_FIREBASE_APP_ID=your_app_id_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
warmpaws/
├── public/
│   ├── data/
│   │   └── services.json          # Service data
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Footer.jsx             # Footer component
│   │   ├── Navbar.jsx             # Navigation component
│   │   └── ProtectedRoute.jsx     # Route protection
│   ├── contexts/
│   │   └── AuthContext.jsx        # Authentication context
│   ├── pages/
│   │   ├── ForgotPassword.jsx     # Password reset
│   │   ├── Home.jsx               # Main landing page
│   │   ├── Login.jsx              # User login
│   │   ├── MyProfile.jsx          # User profile
│   │   ├── ServiceDetails.jsx     # Service booking
│   │   └── Signup.jsx             # User registration
│   ├── config/
│   │   └── firebase.js            # Firebase configuration
│   ├── App.jsx                    # Main app component
│   ├── index.css                  # Global styles
│   └── main.jsx                   # Entry point
├── .env                           # Environment variables
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary:** Warm Orange (#f1761a)
- **Secondary:** Warm Light (#f49537)
- **Accent:** Yellow (#fbbf24)
- **Background:** Warm Gradient
- **Text:** Gray scale for readability

### Animations
- **AOS Library** for scroll animations
- **Hover Effects** on cards and buttons
- **Loading States** with spinners
- **Smooth Transitions** throughout the app

### Responsive Design
- **Mobile First** approach
- **Breakpoints:** sm, md, lg, xl
- **Touch-Friendly** interface
- **Optimized Images** for different screen sizes

## 🔐 Authentication Features

### Password Validation
- ✅ At least one uppercase letter
- ✅ At least one lowercase letter
- ✅ Minimum 6 characters
- 🔒 Password visibility toggle

### Social Authentication
- 🔗 Google OAuth integration
- 📧 Email verification ready
- 🔄 Automatic redirect after login

### Security
- 🔒 Protected routes
- 🎯 Route-based access control
- 📱 Session management
- 🚪 Auto-logout on errors

## 📱 Responsive Breakpoints

- **Mobile:** 320px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px+

## 🚀 Deployment

### Netlify Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Add environment variables in Netlify dashboard

3. **Configure Firebase**
   - Add your Netlify domain to Firebase authorized domains
   - Update Firebase authentication settings

### Alternative Hosting
- **Vercel** - Zero-config deployment
- **Surge.sh** - Simple static hosting
- **GitHub Pages** - Free hosting for public repos

## 🔧 Environment Setup

### Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication
4. Add web app and copy config
5. Update `.env` file with Firebase values

### Development Environment
- **Node.js:** v18+ recommended
- **Package Manager:** npm or yarn
- **Editor:** VS Code (recommended)
- **Browser:** Chrome, Firefox, Safari, Edge

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

## 📋 Assignment Requirements Checklist

- ✅ **GitHub Commits:** 10+ meaningful commits with descriptive messages
- ✅ **README.md:** Comprehensive project documentation
- ✅ **Responsiveness:** Fully responsive on all devices
- ✅ **Environment Variables:** Firebase config secured
- ✅ **Unique Design:** Minimalist and modern with subtle animations
- ✅ **SPA Behavior:** No errors on route reloads
- ✅ **Hosting Ready:** Configured for Netlify deployment
- ✅ **Authentication:** Complete login/signup system
- ✅ **Protected Routes:** Service details and profile pages
- ✅ **JSON Data:** 8+ pet care services
- ✅ **Additional Features:** Emergency care section
- ✅ **Toast Notifications:** Success/error feedback
- ✅ **Password Validation:** Comprehensive validation
- ✅ **Profile Updates:** Firebase updateProfile() integration

## 📞 Support

For support and questions:
- 📧 Email: info@warmpaws.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/warmpaws-pet-care/issues)
- 📖 Documentation: [Wiki](https://github.com/yourusername/warmpaws-pet-care/wiki)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Firebase** for authentication services
- **Tailwind CSS** for styling framework
- **React Team** for the amazing framework
- **Contributors** who helped improve this project
- **Pet Lovers** who inspired this application

---

Made with ❤️ for pet parents everywhere 🐾

**"Keeping your furry friends warm, one service at a time"**
