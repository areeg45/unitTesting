// ToggleButton.test.tsx
import { test, expect } from 'vitest'; 
import ToggleButton from './ToggleButton';
import {fireEvent, render} from '@testing-library/react'

test('renders toggle button with initial state Off', async () => {
    const { getAllByText } = render(<ToggleButton />);
    const buttons = getAllByText('Off');
    expect(buttons.length).toBe(1); 
  });
  
  test('toggles state when button is clicked', async () => {
    const { getAllByText } = render(<ToggleButton />);
    const buttons = getAllByText('Off');
    const button = buttons[0]; 
    fireEvent.click(button);
    expect(getAllByText('On').length).toBe(1); 
    fireEvent.click(button);
    expect(getAllByText('Off').length).toBe(2); 
  });