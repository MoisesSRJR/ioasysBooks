import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('app')).toBeInTheDocument();
  });
});
