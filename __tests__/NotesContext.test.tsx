import { render, screen, waitFor } from '@testing-library/react';
import { NotesProvider, useNotes } from '@/context/NotesContext';

// Simple test component
const TestComponent = () => {
  const { notes, isLoading } = useNotes();

  return (
    <div>
      <div data-testid="loading">{isLoading ? 'Loading' : 'Ready'}</div>
      <div data-testid="notes-count">{notes.length}</div>
      {notes.map((note) => (
        <div key={note.id} data-testid={`note-${note.id}`}>
          {note.title}
        </div>
      ))}
    </div>
  );
};

describe('NotesContext', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should provide notes context and show loading state', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ notes: [] }),
    });

    render(
      <NotesProvider>
        <TestComponent />
      </NotesProvider>
    );

    // Initially should show loading or ready state
    expect(screen.getByTestId('loading')).toBeInTheDocument();
    
    // Wait for loading to complete
    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Ready');
    }, { timeout: 3000 });

    expect(screen.getByTestId('notes-count')).toHaveTextContent('0');
  });

  it('should fetch and display notes from API', async () => {
    const mockNotes = [
      {
        _id: '1',
        title: 'Test Note',
        category: 'Work',
        description: 'Test description',
        author: 'Test User',
        isFavourite: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ notes: mockNotes }),
    });

    render(
      <NotesProvider>
        <TestComponent />
      </NotesProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Note')).toBeInTheDocument();
    }, { timeout: 3000 });

    expect(screen.getByTestId('notes-count')).toHaveTextContent('1');
  });

  it('should handle API errors gracefully', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(
      <NotesProvider>
        <TestComponent />
      </NotesProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading')).toHaveTextContent('Ready');
    }, { timeout: 3000 });

    // Should still render but with 0 notes
    expect(screen.getByTestId('notes-count')).toHaveTextContent('0');
  });
});
