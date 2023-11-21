// __tests__/components/Sidebar.test.tsx
import Sidebar from '@/components/SideBar/Sidebar';
import { render, screen } from '@testing-library/react';
// import { useRouter } from 'next/navigation';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('Sidebar page', () => {
  it('shows the Sidebar page in the document', async () => {
    // Mock the useRouter implementation
    // useRouter.(() => ({
    //   replace: jest.fn(),
    // }));

    render(<Sidebar />);
    const sidebar = await screen.findByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });
});
