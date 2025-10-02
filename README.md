# ContentFlow CMS

A modern, full-stack Content Management System built for efficient content creation and organization. Perfect for blogs, documentation sites, and any content-driven application.

![ContentFlow CMS](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Features

- 📊 **Dashboard Overview** - Real-time statistics and recent content activity
- ✍️ **Content Management** - Create, edit, delete, and organize articles
- 🏷️ **Category System** - Organize content with custom categories
- 🔍 **Search & Filter** - Quickly find content with powerful search and filters
- 🌗 **Dark/Light Mode** - Built-in theme switching for better user experience
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Modern** - Built with the latest web technologies

## 🚀 Tech Stack

### Frontend
- **[React 18](https://react.dev/)** - Modern UI library with hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn UI](https://ui.shadcn.com/)** - High-quality component library
- **[Wouter](https://github.com/molefrog/wouter)** - Lightweight routing
- **[TanStack Query](https://tanstack.com/query)** - Data fetching & state management
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon set
- **[date-fns](https://date-fns.org/)** - Modern date utility library

### Backend
- **[Node.js](https://nodejs.org/)** - JavaScript runtime
- **[Express.js](https://expressjs.com/)** - Web application framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe server code

### Development Tools
- **[TSX](https://github.com/esbuild-kit/tsx)** - TypeScript execution
- **[ESBuild](https://esbuild.github.io/)** - Fast bundler
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM (ready for database integration)

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/modiviveks/contentflow-cms.git
   cd contentflow-cms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Run TypeScript type checking

## 🏗️ Project Structure

```
contentflow-cms/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── lib/           # Utilities and helpers
│   │   └── App.tsx        # Main app component
│   └── index.html         # HTML entry point
├── server/                # Backend application
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
│   └── schema.ts          # Data models
└── package.json           # Project dependencies
```

## 🎨 Features in Detail

### Dashboard
- Overview statistics (total articles, views, drafts, scheduled posts)
- Recent content activity table
- Quick action buttons for common tasks

### Content Management
- Create and edit articles with a clean interface
- Publish, draft, or schedule content
- Search and filter by status, category, or author
- Bulk actions support

### Category System
- Create and manage categories
- Assign articles to categories
- View article count per category
- Edit and delete categories

### Settings
- User profile management
- Theme customization (dark/light mode)
- Password management
- Avatar upload support

## 🔮 Future Enhancements

- [ ] Rich text editor integration (TipTap/Quill)
- [ ] Image upload and media library
- [ ] User roles and permissions
- [ ] Article revision history
- [ ] SEO optimization tools
- [ ] Article scheduling system
- [ ] Comments and engagement tracking
- [ ] Export/import functionality
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**John Doe**
- GitHub: [@modiviveks](https://github.com/modiviveks)

## 🙏 Acknowledgments

- Built as a college project to demonstrate full-stack development skills
- UI components from Shadcn UI
- Icons from Lucide
- Design inspiration from modern CMS platforms

---

⭐ If you found this project helpful, please give it a star!
