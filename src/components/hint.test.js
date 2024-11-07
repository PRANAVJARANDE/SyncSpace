import { render, screen } from '@testing-library/react';
import { Hint } from './hint';

describe('Hint Component', () => {
  it('displays the hint label correctly', () => {
    render(<Hint label="Test Hint">Hover over me</Hint>);
    expect(screen.getByText(/Test Hint/i)).toBeInTheDocument();
  });
});