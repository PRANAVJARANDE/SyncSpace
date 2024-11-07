import { render } from '@testing-library/react';
import { ConvexClientProvider } from './convex-client-provider';

describe('ConvexClientProvider Component', () => {
  it('renders children components correctly', () => {
    render(
      <ConvexClientProvider>
        <div>Child Component</div>
      </ConvexClientProvider>
    );
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});