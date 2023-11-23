import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home page', () => {
  it('shows the Home page in the document', () => {
    render(<Home />);
    const homePage = screen.getByTestId('home_page');
    expect(homePage).toBeInTheDocument();
  });
});
