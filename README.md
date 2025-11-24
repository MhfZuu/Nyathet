<div align="center">

# Nyathet

### Modern Note-Taking App for Everyone

A beautiful and intuitive note-taking application built with Next.js, MongoDB, and Clerk authentication.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-8.20.0-green?style=for-the-badge&logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6c47ff?style=for-the-badge)

[Live Demo](https://nyathet.vercel.app) • [Report Bug](https://github.com/MhfZuu/Nyathet/issues) • [Request Feature](https://github.com/MhfZuu/Nyathet/issues)

</div>

---

## Features

- **Secure Authentication** - Powered by Clerk
- **Rich Note Management** - Create, edit, delete, and organize notes
- **Favorites** - Mark important notes as favorites
- **Search & Filter** - Quickly find your notes
- **Responsive Design** - Works seamlessly on all devices
- **Cloud Sync** - Access your notes from anywhere
- **Dark Mode** - Easy on the eyes
- **Beautiful UI** - Clean and modern interface

## Quick Start

### Prerequisites

- Node.js 20+
- MongoDB Atlas account
- Clerk account

### Installation

```bash
# Clone the repository
git clone https://github.com/MhfZuu/Nyathet.git
cd Nyathet

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Lint code
npm test             # Run tests
```

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ☕ by [MhfZuu](https://github.com/MhfZuu)

</div>
