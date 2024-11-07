import { render, screen } from '@testing-library/react';
import { ChannelHero } from './channel-hero';

describe('ChannelHero Component', () => {
  it('displays the channel name and creation time correctly', () => {
    render(<ChannelHero name="Test Channel" creationTime={new Date().getTime()} />);
    expect(screen.getByText('# Test Channel')).toBeInTheDocument();
    expect(screen.getByText(/This channel was created on/i)).toBeInTheDocument();
  });
});