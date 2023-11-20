import Sidebar from '@/components/SideBar/Sidebar';
import { render, screen } from '@testing-library/react';

describe('Sidebar page', () => {
  it('shows the Sidebar page in the document', () => {
    render(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });
});
