import Sidebar from '@/components/SideBar/Sidebar';
import { render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));
const mockStore = configureMockStore([
  /* middlewares */
]);

const store = mockStore({
  admin: {
    id: 'Test User',
  },
});
describe('Sidebar page', () => {
  it('shows the Sidebar page in the document', async () => {
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>,
    );
    const sidebar = await screen.findByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });
});
