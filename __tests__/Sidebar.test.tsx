import { render, screen } from '@testing-library/react';
import Sidebar from '@/components/Sidebar';

describe('Sidebar', () => {
  it('should render sidebar with navigation items', () => {
    render(<Sidebar />);
    
    expect(screen.getByText('Nyathet')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Favourites')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('should have correct links', () => {
    render(<Sidebar />);
    
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    expect(dashboardLink).toHaveAttribute('href', '/dashboard');
    
    const favouritesLink = screen.getByRole('link', { name: /favourites/i });
    expect(favouritesLink).toHaveAttribute('href', '/dashboard/favourites');
    
    const profileLink = screen.getByRole('link', { name: /profile/i });
    expect(profileLink).toHaveAttribute('href', '/dashboard/profile');
  });

  it('should render logout button', () => {
    render(<Sidebar />);
    
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });
});
