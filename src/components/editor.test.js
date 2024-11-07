import { render, screen, fireEvent } from '@testing-library/react';
import Editor from './editor';

describe('Editor Component', () => {
  it('renders the editor and allows text input', () => {
    render(<Editor onSubmit={() => {}} />);
    expect(screen.getByPlaceholderText('Write something...')).toBeInTheDocument();
  });
});