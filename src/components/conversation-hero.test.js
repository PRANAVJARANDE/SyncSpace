import { render, screen } from '@testing-library/react';
import { ConversationHero } from './conversation-hero';

describe('ConversationHero Component', () => {
  it('renders conversation name and fallback correctly', () => {
    render(<ConversationHero name="John Doe" image="test.jpg" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText(/This conversation is just between you and/i)).toBeInTheDocument();
  });
});