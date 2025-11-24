import { render, screen } from '@testing-library/react';
import Sidebar from '@/components/Sidebar';

describe('Sidebar', () => {
  it('should render sidebar with navigation items', () => {
    render(<Sidebar />);

    expect(screen.getAllByText('Nyathet').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Dashboard').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Favourites').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Profile').length).toBeGreaterThan(0);
  });

  it('should have correct links', () => {
    render(<Sidebar />);

    const dashboardLinks = screen.getAllByRole('link', { name: /dashboard/i });
    expect(dashboardLinks[0]).toHaveAttribute('href', '/dashboard');

    const favouritesLinks = screen.getAllByRole('link', {
      name: /favourites/i,
    });
    expect(favouritesLinks[0]).toHaveAttribute('href', '/dashboard/favourites');

    const profileLinks = screen.getAllByRole('link', { name: /profile/i });
    expect(profileLinks[0]).toHaveAttribute('href', '/dashboard/profile');
  });

  it('should render logout button', () => {
    render(<Sidebar />);

    const logoutButtons = screen.getAllByText('Logout');
    expect(logoutButtons.length).toBeGreaterThanOrEqual(1);
  });
});
