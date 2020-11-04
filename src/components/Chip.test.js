import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ChipContainer from './ChipContainer';


describe('Chip button', () => {
  function setup() {
    const utils =  render(<ChipContainer />);
    const themaButton = screen.getByRole('button', { name: /love/i });
    return {
      ...utils, 
      themaButton
    }
  }
 
  test('is rendered', () => {
    const { themaButton } = setup()
    expect(themaButton).toBeInTheDocument();
  });

  test('when clicked is selected', () => {
    const { themaButton } = setup()
    userEvent.click(themaButton);
    expect(themaButton).toHaveClass('Chip-isActive'); 
  });

  test('when clicked Get Quote Button is NOT disabled', () => {
    const { themaButton } = setup()
    const getQuoteBtn = screen.getByRole('button', { name: /get quote/i }); 
    userEvent.click(themaButton);
    expect(getQuoteBtn).toBeEnabled();
  });
});