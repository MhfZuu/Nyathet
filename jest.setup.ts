import '@testing-library/jest-dom';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
}));

// Mock Clerk
jest.mock('@clerk/nextjs', () => ({
  useUser: () => ({
    isLoaded: true,
    user: {
      id: 'test-user-id',
      fullName: 'Test User',
      username: 'testuser',
    },
  }),
  useClerk: () => ({
    signOut: jest.fn(),
  }),
  UserButton: () => 'User Button',
}));

// Mock fetch
global.fetch = jest.fn();
