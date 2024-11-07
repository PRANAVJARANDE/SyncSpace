import { render, screen } from '@testing-library/react';
import { EmojiPopover } from './emoji-popover';

describe('EmojiPopover Component', () => {
  it('renders with hint text correctly', () => {
    render(<EmojiPopover onEmojiSelect={() => {}}>😀</EmojiPopover>);
    expect(screen.getByText(/Emoji/i)).toBeInTheDocument();
  });
});